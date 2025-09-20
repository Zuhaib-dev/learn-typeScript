import React from 'react';

const ImageCard = ({ image, name, id,   }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-64 m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>
      <div className='p-4'>
        <h3 className="text-lg font-semibold text-gray-800"> ID: {id} </h3>
      </div>
      
    </div>
  );
};

export default ImageCard;
