import React from "react";

const QuotesCard = ({ content, author }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-800 text-lg md:text-xl font-medium italic mb-4 text-center">
          “{content}”
        </p>
        <div className="text-right">
          <span className="text-gray-600 font-semibold text-sm md:text-base">
            — {author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuotesCard;
