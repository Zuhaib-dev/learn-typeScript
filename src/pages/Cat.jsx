import axios from "axios";
import React, { useEffect, useState } from "react";
import CatCard from "../components/CatCard";

const Cat = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1 className="flex justify-center text-3xl mt-3 mb-2 mask-radial-from-inherit">Cute Cat🙀 </h1>
      <div className="flex justify-center flex-wrap">
        {data.map((cat, index) => {
          return (
            <CatCard
              key={index}
              url={cat.url}
              id={cat.id}
              width={cat.width}
              height={cat.height}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cat;
