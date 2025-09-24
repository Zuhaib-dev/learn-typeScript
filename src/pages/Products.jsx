import { useEffect, useState } from "react";
import Axios from "../services/ApiConfig";
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
  return <div>
    <h1 className="flex justify-center text-xl mt-10 mb-10">List Of All Products</h1>
    <div className="flex flex-wrap gap-10">
      {data.map(function(elem, idx){
        return <Card key={idx} name={elem.title} category={elem.category} price={elem.price} image={elem.image}  />
      })}
    </div>
  </div>;
};

export default Products;
