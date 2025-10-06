import React from "react";

const MemeCard = ({ url,name,captions,box_count }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative pb-[100%]">
        <img
          src={url}
          alt={name}
          className="absolute h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <span className="font-medium">Captions: </span>
            {captions.toLocaleString()}
          </div>
          <div>
            <span className="font-medium">Boxes: </span>
            {box_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;
