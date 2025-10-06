import { useState } from "react";
import { useEffect } from "react";
import axios from "../services/AxiosConfig";
import ProductCard from "../components/ProductCard";
const Products = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("products");
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="flex justify-center text-3xl mt-4">List of All Products</h1>
      <div className="flex flex-wrap px-10">
        {data.map(function (elem, idx) {
          return (
            <ProductCard
              key={idx}
              title={elem.title}
              image={elem.image}
              category={elem.category}
              price={elem.price}
              description={elem.description}
              rating={elem.rating.count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
