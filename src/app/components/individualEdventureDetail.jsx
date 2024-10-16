import React,{useState} from 'react';
import Image from 'next/image';
import CitiesModal from './citiesModal';

const IndividualEdventureDetail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
      <div
       onClick={openModal}
        className="rounded-l-full rounded-r-full flex items-center pl-2 pr-2 text-primary cursor-pointer "
        style={{ border: '1px solid#1D67CD', width: '150px' }}
      >
        Subscription only
      </div>
      <div className="flex justify-between mt-5">
        <p className="text-2xl cursor-pointer">
          Subscription Starter – inclusive Colonial
          <br /> Road Trip
        </p>
        <p className="font-bold text-lg">$155.00</p>
      </div>
      {/* <div className="flex  mt-5">
        <p className="text-primary hover:underline text-lg font-bold cursor-pointer">
          View Details
        </p>
      </div> */}
      <div className="mt-5">
        <p className="text-lg font-bold">First Shipment includes:</p>
        <ul className="list-disc mt-3">
          <li>Travel Duffel Bag or Backpack</li>
          <li>Activities and craft supplies for 14 days/units</li>
          <li>A souvenir Travel Journal for child</li>
          <li>A copy of our Parent’s or Grandparent’s Guide</li>
          <li>Access to at least one 5-7 minute video per day</li>
          <li>Supplies for two craft activities per day</li>
        </ul>
      </div>
      <div className="mt-5">
        <p className="text-lg font-bold">
          Additional Monthly Shipments include:
        </p>
        <ul className="list-disc mt-3">
          <li>Additional parent’s guide per city</li>
          <li>Access to at least one 5-7 minute video per day</li>
          <li>Activities and craft supplies for each day of each city</li>
          <li>Shipping and Handling</li>
        </ul>
      </div>
      <CitiesModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default IndividualEdventureDetail;
