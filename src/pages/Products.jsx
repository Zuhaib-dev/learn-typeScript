import { useEffect, useState } from "react";
import Axios from "../services/apiConfig";
import Card from "../components/Card";
const Products = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await Axios.get("/products");
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
      <>
        <h1 className="text-2xl flex justify-center mt-5">
          List Of All Products
        </h1>
        <div className="flex flex-wrap px-17">
          {data.map(function (elem, idx) {
            return (
              <Card
                key={idx}
                name={elem.title}
                price={elem.price}
                image={elem.image}
                category={elem.category}
              />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Products;
