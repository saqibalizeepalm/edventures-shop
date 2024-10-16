import { useState } from 'react';

const CitiesModal = ({ isOpen, onClose }) => {
  const [selectedCities, setSelectedCities] = useState([]);
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  const toggleCitySelection = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const handleAdd = () => {
    console.log('Selected cities:', selectedCities);
    onClose(); // Close the modal
    // Implement further functionality here (e.g., API call)
  };

  const handleSkip = () => {
    onClose(); // Close the modal without action
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl mb-4">Select Cities</h2>
        <ul className="mb-4">
          {cities.map((city) => (
            <li key={city} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCities.includes(city)}
                onChange={() => toggleCitySelection(city)}
                className="mr-2"
              />
              {city}
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
          <button
            onClick={handleSkip}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitiesModal;
