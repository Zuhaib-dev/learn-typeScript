import React from "react";

const AnimeCard = ({  name, ki, maxKi, race, gender, description, image, affiliation }) => {
  

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300 mx-auto">
      {/* Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain  hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

        {/* Power Info */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-gray-700">Ki:</span> {ki}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Max Ki:</span> {maxKi}
          </div>
        </div>

        {/* Race, Gender, Affiliation */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div>
            <span className="font-semibold text-gray-700">Race:</span> {race}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Gender:</span>{" "}
            {gender}
          </div>
          <div>
            <span className="font-semibold text-gray-700">Affiliation:</span>{" "}
            {affiliation}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm max-h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
