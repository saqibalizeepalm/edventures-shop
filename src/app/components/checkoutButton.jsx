// src/app/components/CheckoutButton.js
"use client"; // This component must be client-side

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY); // Set this in your .env file

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    // Create Checkout Session
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 2000, // $20.00
            },
            quantity: 1,
          },
        ],
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.error(result.error.message);
    }

    setLoading(false);
  };

  return (
    // <button
    //       className="rounded-l-full rounded-r-full flex items-center hover:bg-orange-300 pl-2 pr-2 bg-primary cursor-pointer text-white"
    //       style={{  width: '100px' }}
    //     >
    //       Add to Cart
    //     </button>
    <button
      role="link"
      onClick={handleClick}
      disabled={loading}
      className={`rounded-l-full rounded-r-full flex items-center hover:bg-orange-300 pl-2 pr-2 bg-primary cursor-pointer text-white ${loading && 'opacity-50'}`}
    >
      {loading ? 'Processing...' : 'Checkout'}
    </button>
  );
};

export default CheckoutButton;
