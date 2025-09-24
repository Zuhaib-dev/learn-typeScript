const Card = ({ image, name, category, price,desc }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
          {category}
        </p>
        <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">{desc}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-gray-900">{price}</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
