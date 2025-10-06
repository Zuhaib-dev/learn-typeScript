import React from "react";

const BreakingBadCard = ({ quote, author }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg max-w-md w-full p-6 text-white">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://breakingbadquotes.xyz/img/logo.png"
            alt="Breaking Bad Logo"
            className="w-24 h-auto"
          />
        </div>
        <blockquote className="text-xl font-semibold text-center italic mb-4">
          “{quote}”
        </blockquote>
        <p className="text-right text-green-400 font-medium">— {author}</p>
      </div>
    </div>
  );
};

export default BreakingBadCard;
