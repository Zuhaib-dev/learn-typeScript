
const ProductCard = ({ image,price,description,category,title,rating,  }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 m-4">
      <img
        src={image}
        alt={image}
        className="h-64 w-full object-contain bg-gray-100 p-4"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-2 capitalize">{category}</p>
        <p className="text-gray-700 font-bold text-xl mb-2">${price}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.286 3.959c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.176 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.285-3.959a1 1 0 00-.364-1.118L2.32 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.959z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-600">({rating})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
