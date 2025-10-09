import React from 'react';

const CatCard = ({ id, url, width, height }) => {
  return (
    <div
      className="max-w-xs w-full mx-auto rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      key={id}
    >
      <div className="relative">
        <img
          src={
            url ||
            'https://userimg.tellonym.me/lg-v2/93606150_atgyuprli2fmojqatjqcjukldwbio0qz.jpg'
          }
          alt={`Cat image ${id}`}
          className="w-full h-auto object-cover rounded-t-xl transition-transform duration-500 transform hover:scale-110"
        />
        <div className="absolute top-0 right-0 p-3 bg-black bg-opacity-50 text-white rounded-bl-xl">
          <span className="font-semibold">ID: {id}</span>
        </div>
      </div>

      <div className="p-4 bg-white rounded-b-xl">
        <h2 className="text-xl font-semibold text-gray-800">Cute Cat</h2>
        <p className="text-gray-600 mt-2">
          Width: {width}px | Height: {height}px
        </p>
      </div>
    </div>
  );
};

export default CatCard;
