import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const DogBreedCard = ({ breed, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center space-y-6">
      <div className="w-86 h-86 rounded-lg overflow-hidden shadow-md">
        <img
          src={image}
          alt={breed}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
        />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300 capitalize">
          {breed}
        </h2>
        <p className="text-m text-gray-500 mt-2"> is a beautiful breed!</p>
      </div>
    </div>
  );
};

const DogBreed = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [suggestions, setSuggestions] = useState([]);
  const [dogImage, setDogImage] = useState('');
  const [breed, setBreed] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDogImage = (selectedBreed) => {
    setBreed(selectedBreed);
    setLoading(true);
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (breed.length === 0) {
      setSuggestions([]);
      return;
    }

    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        const filtered = breeds.filter((b) =>
          b.toLowerCase().includes(breed.toLowerCase()),
        );
        setSuggestions(filtered);
      });
  }, [breed]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setValue('query', value);
    setBreed(value);
  };

  const handleSuggestionClick = (selected) => {
    setValue('query', selected);
    setBreed(selected);
    setSuggestions([]);
    fetchDogImage(selected);
  };

  const onSubmit = (data) => {
    setSuggestions([]);
    fetchDogImage(data.query.toLowerCase());
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 space-y-6">
      {/* Breed Card or Skeleton */}
      {loading ? (
        <div className="w-full p-6 rounded-lg shadow-lg bg-gray-100 animate-pulse flex flex-col items-center space-y-4">
          <div className="w-56 h-56 bg-gray-300 rounded-lg"></div>
          <div className="w-40 h-6 bg-gray-300 rounded"></div>
          <div className="w-32 h-4 bg-gray-200 rounded"></div>
        </div>
      ) : (
        dogImage && <DogBreedCard breed={breed} image={dogImage} />
      )}

      {/* Search Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative ">
        <input
          type="text"
          autoComplete="off"
          {...register('query', { required: true })}
          onChange={handleSearchChange}
          placeholder="Search for a dog breed..."
          className="w-full  px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
            {suggestions.map((sugg, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(sugg)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer transition-all duration-200 capitalize"
              >
                {sugg}
              </li>
            ))}
          </ul>
        )}

        {/* Search Button with Pulse */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-rose-600 text-white rounded-lg shadow-md hover:bg-rose-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </form>

      {/* Inline Pulse Animation */}
    </div>
  );
};

export default DogBreed;
