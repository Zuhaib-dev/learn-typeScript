import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CatCard from '../components/CatCard';

const Cat = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="flex justify-center text-3xl mt-3 mb-2 mask-radial-from-inherit">
        Cute Cat🙀{' '}
      </h1>
      <div className="flex justify-center flex-wrap">
        {loading ? (
          <div className="flex justify-center flex-wrap">
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
            <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-md m-2"></div>
          </div>
        ) : (
          data.map((cat, index) => (
            <CatCard
              key={index}
              url={cat.url}
              id={cat.id}
              width={cat.width}
              height={cat.height}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Cat;
