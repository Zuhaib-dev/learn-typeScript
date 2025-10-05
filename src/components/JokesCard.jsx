import React from 'react';

const JokeCard = ({ setup,delivery,category,safe,id, }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white bg-blue-500 rounded-full px-3 py-1">
          {category}
        </span>
        {safe && (
          <span className="text-xs text-green-600 font-semibold">
            ✅ Safe for work
          </span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {setup}
        </h3>
        <p className="mt-2 text-gray-600">{delivery}</p>
      </div>

      <div className="text-right text-xs text-gray-400">
        Joke ID: {id}
      </div>
    </div>
  );
};

export default JokeCard;
