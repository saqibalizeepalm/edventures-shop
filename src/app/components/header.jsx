import React from 'react';
import Image from 'next/image';

const Header = () => {
  console.log('keys----', process.env.STRIPE_SECRET_KEY);
  return (
    <div className="flex  justify-center w-full" style={{ height: '100px' }}>
      <div
        className="flex  items-center p-4 justify-between top-5 border rounded-l-full rounded-r-full bg-transparent shadow-lg bg-white bg-opacity-30 backdrop-blur-md"
        style={{ width: '853px', height: '69px', position: 'fixed' }}
      >
        <div>
          <Image src="/images/logo-1.webp" width={220} height={61} />
        </div>
        <ul className="flex gap-4 text-gray-400 ">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">EDventure</li>
          <li className="hover:text-black cursor-pointer">Demo</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
          <li className="hover:text-black cursor-pointer">Shop</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
