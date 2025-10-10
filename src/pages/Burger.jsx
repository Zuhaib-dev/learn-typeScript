import axios from "axios";
import React, { useEffect, useState } from "react";
import BurgerCard from "../components/BurgerCard";

const Burger = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://bobsburgers-api.herokuapp.com/characters/?limit=12&skip=110"
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
      <h1 className="flex justify-center text-3xl mt-4 mb-2 mask-radial-from-inherit">Bob's Burgers</h1>
      <div className="flex flex-wrap">
        {data.map(function (elem, idx) {
          return (
            <BurgerCard
              key={idx}
              name={elem.name}
              image={elem.image}
              age={elem.age}
              gender={elem.gender}
              voicedBy={elem.voicedBy}
              url={elem.url}
              wikiUrl={elem.wikiUrl}
              hair={elem.hair}
              nicknames={elem.nicknames}
              relatives={elem.relatives}
              firstEpisode={elem.firstEpisode}
            />
          );
        })}
      </div>
    </>
  );
};

export default Burger;
