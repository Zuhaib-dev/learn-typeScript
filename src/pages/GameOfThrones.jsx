import axios from "axios";
import React, { useEffect, useState } from "react";
import GotCard from "../components/GOTCard";

const GameOfThrones = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://thronesapi.com/api/v2/Characters"
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
      <h1 className="flex justify-center text-3xl mask-linear-from-inherit mt-4 mb-4">
        Game Of Thrones
      </h1>
      <div className="flex flex-wrap px-20 gap-4">
        {data.map(function (elem, idx) {
          return (
            <GotCard
              key={idx}
              fullName={elem.fullName}
              imageUrl={elem.imageUrl}
              title={elem.title}
              family={elem.family}
            />
          );
        })}
      </div>
    </>
  );
};

export default GameOfThrones;
