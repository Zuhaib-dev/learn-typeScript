const GotCard = ({ fullName, title, family, imageUrl }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-wrap items-center p-4 hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mr-4"
        src={imageUrl}
        alt={fullName}
      />
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-semibold text-gray-800">{fullName}</h2>
        <p className="text-gray-600 text-sm mt-1">{title}</p>
        <p className="text-gray-500 text-sm">{family}</p>
      </div>
    </div>
  );
};

export default GotCard;
