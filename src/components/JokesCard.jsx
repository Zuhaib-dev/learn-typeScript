import React from "react";

const categoryIcons = {
  Pun: "🧠",
  Programming: "💻",
  Misc: "🎲",
  Dark: "🌑",
  Spooky: "👻",
  Christmas: "🎄",
  Political: "🏛️",
  // Fallback icon
  default: "😂",
};

const JokeCard = ({ joke, setup, delivery, category, type, safe, id }) => {
  const icon = categoryIcons[category] || categoryIcons.default;

  return (
    <div className="max-w-md mx-auto bg-yellow-50 border border-yellow-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white bg-indigo-500 rounded-full px-3 py-1 flex items-center gap-1">
          <span>{icon}</span>
          <span>{category}</span>
        </span>
        {safe ? (
          <span className="text-xs text-green-600 font-semibold">
            ✅ Safe for work
          </span>
        ) : (
          <span className="text-xs text-red-600 font-semibold">
            ⚠️ Not safe for work
          </span>
        )}
      </div>

      <div>
        {type === "single" ? (
          <p className="text-lg text-gray-800 font-medium italic">"{joke}"</p>
        ) : (
          <>
            <h3 className="text-lg font-semibold text-gray-800">{setup}</h3>
            <p className="mt-2 text-gray-700"> Answer: {delivery}</p>
          </>
        )}
      </div>

      <div className="text-right text-xs text-gray-500">Joke ID: #{id}</div>
    </div>
  );
};

export default JokeCard;
