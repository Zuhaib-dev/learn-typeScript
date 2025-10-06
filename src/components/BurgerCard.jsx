import React from "react";

const BurgerCard = ({
  name,
  image,
  firstEpisode,
  nicknames,
  gender,
  hair,
  age,
  voicedBy,
  relatives,
  url,
  wikiUrl,
}) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mx-auto">
      {/* Character Image */}
      <img src={image} alt={name} className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500 italic">
            First appeared in: {firstEpisode}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p>
              <span className="font-semibold">Gender:</span> {gender}
            </p>
            <p>
              <span className="font-semibold">Hair:</span> {hair}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Age:</span> {age}
            </p>
            <p>
              <span className="font-semibold">Voiced by:</span> {voicedBy}
            </p>
          </div>
        </div>

        {/* Nicknames */}
        {nicknames > 0 && (
          <div>
            <h3 className="font-semibold text-gray-800">Nicknames:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {nicknames.map((nickname, index) => (
                <li key={index}>{nickname}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Relatives */}
        {relatives > 0 && (
          <div>
            <h3 className="font-semibold text-gray-800">Relatives:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {relatives.map((rel, index) => (
                <li key={index}>{rel.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex space-x-4 pt-4">
          <a
            href={wikiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Wiki
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            API Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerCard;
