import React from 'react';
import Image from 'next/image';
// import CheckoutButton from './checkoutButton';

const GroupEdventureDetail = () => {
  return (
    <div>
      <div
        className="rounded-l-full rounded-r-full flex items-center pl-2 pr-2 text-primary cursor-pointer "
        style={{ border: '1px solid#1D67CD', width: '100px' }}
      >
        20 children
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-2xl cursor-pointer">Colonial Road Trip</p>
        <p className="font-bold text-lg">$1,800.00</p>
      </div>
      <div className="flex gap-6 mt-5">
        <button
          className="rounded-l-full rounded-r-full flex items-center hover:bg-orange-300 pl-2 pr-2 bg-primary cursor-pointer text-white"
          style={{ width: '100px' }}
        >
          Add to Cart
        </button>
        {/* <CheckoutButton/> */}
        <p className="text-primary hover:underline text-lg font-bold cursor-pointer">
          Call to book
        </p>
      </div>
      <div className="mt-5">
        <p className="text-lg font-bold">Each kit includes:</p>
        <ul className="list-disc mt-3">
          <li>City EDventures duffel travel bag</li>
          <li>Activities and craft supplies for 30 days/units.</li>
          <li>20 souvenir Travel Journals for children.</li>
          <li>2 copies of the Facilitator’s Guide.</li>
          <li>Access to at least one 5-7 minute video per day.</li>
          <li>Supplies for three games/craft activities per day.</li>
          <li>Certificate of Completion.</li>
          <li>Souvenir of the entire Edventure.</li>
          <li>All shipping and handling.</li>
        </ul>
      </div>
      <div className="mt-16">
        <p
          className="text-heading font-poppins line-height-extra-loose tracking-small text-primary text-center"
          style={{ fontWeight: 'bold', lineHeight: '0.5em' }}
        >
          Nation’s Beginnings
        </p>
        <p
          className="text-heading font-poppins line-height-extra-loose tracking-small text-custom-blue text-center"
          style={{ fontWeight: 'bold' }}
        >
          Philadelphia and Boston
        </p>
      </div>
      <Image
        src="/images/group-img-2.webp"
        width={585}
        height={585}
        alt="group edventure"
      />

      {/* -------------------- */}
      <div
        className="rounded-l-full rounded-r-full flex items-center pl-2 pr-2 text-primary cursor-pointer "
        style={{ border: '1px solid#1D67CD', width: '100px' }}
      >
        20 children
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-2xl cursor-pointer">
          Anchor Colonies – Boston and <br /> Philadelphia
        </p>
        <p className="font-bold text-lg">$1,500.00</p>
      </div>
      <div className="flex gap-6 mt-5">
        <button
          className="rounded-l-full rounded-r-full flex items-center pl-2 pr-2 hover:bg-orange-300 bg-primary cursor-pointer text-white"
          style={{ width: '100px' }}
        >
          Add to Cart
        </button>
        <p className="text-primary hover:underline text-lg font-bold cursor-pointer">
          Call to book
        </p>
      </div>
      <div className="mt-5">
        <p className="text-lg font-bold">Each kit includes:</p>
        <ul className="list-disc mt-3">
          <li>City EDventures duffel travel bag</li>
          <li>Activities and craft supplies for 30 days/units.</li>
          <li>20 souvenir Travel Journals for children.</li>
          <li>2 copies of the Facilitator’s Guide..</li>
          <li>Access to at least one 5-7 minute video per day.</li>
          <li>Supplies for three games/craft activities per day.</li>
          <li>Certificate of Completion.</li>
          <li>Souvenir of the entire Edventure.</li>
          <li>All shipping and handling.</li>
        </ul>
      </div>
      <div className="mt-16">
        <p
          className="text-heading font-poppins line-height-extra-loose tracking-small text-primary text-center"
          style={{ fontWeight: 'bold', lineHeight: '0.5em' }}
        >
          Belles of the Old South
        </p>
        <p
          className="text-heading font-poppins line-height-extra-loose tracking-small text-custom-blue text-center"
          style={{ fontWeight: 'bold' }}
        >
          New Orleans and Atlanta
        </p>
      </div>
      <Image
        src="/images/group-img-3.webp"
        width={585}
        height={585}
        alt="group edventure"
      />
      {/* ----------------- */}

      <div
        className="rounded-l-full rounded-r-full flex items-center pl-2 pr-2 text-primary cursor-pointer "
        style={{ border: '1px solid#1D67CD', width: '100px' }}
      >
        20 children
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-2xl cursor-pointer">
          Belles of the Old South – New Orleans <br /> and Atlanta
        </p>
        <p className="font-bold text-lg">$1,500.00</p>
      </div>
      <div className="flex gap-6 mt-5">
        <button
          className="rounded-l-full rounded-r-full flex items-center pl-2 pr-2 bg-primary hover:bg-orange-300 cursor-pointer text-white"
          style={{ width: '100px' }}
        >
          Add to Cart
        </button>
        <p className="text-primary hover:underline text-lg font-bold cursor-pointer">
          Call to book
        </p>
      </div>
      <div className="mt-5">
        <p className="text-lg font-bold">Each kit includes:</p>
        <ul className="list-disc mt-3">
          <li>City EDventures duffel travel bag</li>
          <li>Activities and craft supplies for 30 days/units.</li>
          <li>20 souvenir Travel Journals for children.</li>
          <li>2 copies of the Facilitator’s Guide..</li>
          <li>Access to at least one 5-7 minute video per day.</li>
          <li>Supplies for three games/craft activities per day.</li>
          <li>Certificate of Completion.</li>
          <li>Souvenir of the entire Edventure.</li>
          <li>All shipping and handling.</li>
        </ul>
      </div>
    </div>
  );
};

export default GroupEdventureDetail;
