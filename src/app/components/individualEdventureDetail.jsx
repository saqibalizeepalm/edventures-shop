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
      <div className="overflow-x-auto mt-3">
      <table className="min-w-full">
        <tbody>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 2</td>
            <td className="p-2">Washington DC</td>
            <td className="p-2">3 days/units</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 3</td>
            <td className="p-2">Atlanta</td>
            <td className="p-2">2 days/units</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 4</td>
            <td className="p-2">New Orleans</td>
            <td className="p-2">3 days/units</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 5</td>
            <td className="p-2">Charleston</td>
            <td className="p-2">1 day/unit</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 6</td>
            <td className="p-2">Nashville</td>
            <td className="p-2">1 day/unit</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 7</td>
            <td className="p-2">Florida</td>
            <td className="p-2">2 days/unit</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 8</td>
            <td className="p-2">San Francisco</td>
            <td className="p-2">2 days/unit</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 9</td>
            <td className="p-2">San diego</td>
            <td className="p-2">2 days/unit</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 10</td>
            <td className="p-2">Sacramento</td>
            <td className="p-2">1 day/unit</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Edventure # 11</td>
            <td className="p-2">New York City</td>
            <td className="p-2">1 day/unit</td>
          </tr>
          <tr className="even:bg-gray-100">
            <td className="p-2">Bonus video</td>
            <td className="p-2">Holidays around the world</td>
            <td className="p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
      <CitiesModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default IndividualEdventureDetail;
