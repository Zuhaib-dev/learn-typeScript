import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "../services/apiConfig";
import Card from '../components/Card'
const Products = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/products");
      setdata(response.data);
      setTimeout(() => {
        toast.success("data Fetched ")
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <>
        <h1 className="flex justify-center mt-10">List Of All Products</h1>
        <div className="flex flex-wrap px-10">
          {data.map(function(item,idx){
            return <Card key={idx} image={item.image} price={item.price} name={item.price} category={item.category} />
          })}
        </div>
      </>
    </div>
  );
};

export default Products;
