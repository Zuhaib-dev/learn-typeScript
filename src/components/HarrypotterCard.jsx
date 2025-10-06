import React from "react";

const HarryPotterCard = ({
  image,
  name,
  dateOfBirth,
  species,
  gender,
  house,
  ancestry,
  hairColour,
  eyeColour,
  patronus,
  hogwartsStudent,
  alive,
  actor,
  wand
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-xl rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={image || "https://images.unsplash.com/photo-1746278169792-496874fccc11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D"}
        alt={name}
        className="w-full h-72 object-cover object-top"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p>
              <strong>Species:</strong> {species}
            </p>
            <p>
              <strong>Gender:</strong> {gender}
            </p>
            <p>
              <strong>DOB:</strong> {dateOfBirth}
            </p>
            <p>
              <strong>House:</strong> {house || "N/A"}
            </p>
            <p>
              <strong>Ancestry:</strong> {ancestry}
            </p>
          </div>
          <div>
            <p>
              <strong>Hair:</strong> {hairColour}
            </p>
            <p>
              <strong>Eyes:</strong> {eyeColour}
            </p>
            <p>
              <strong>Patronus:</strong> {patronus}
            </p>
            <p>
              <strong>Student:</strong> {hogwartsStudent ? "Yes" : "No"}
            </p>
            <p>
              <strong>Alive:</strong> {alive ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-300 dark:border-gray-700 pt-4 text-sm">
          <h3 className="font-semibold text-lg mb-1">Wand</h3>
          <p>
            <strong>Wood:</strong> {wand?.wood || "N/A"}
          </p>
          <p>
            <strong>Core:</strong> {wand?.core || "N/A"}
          </p>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            <strong>Played by:</strong> {actor}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarryPotterCard;
