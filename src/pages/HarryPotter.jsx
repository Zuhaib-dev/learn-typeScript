import axios from "axios";
import React, { useEffect, useState } from "react";
import HarryPotterCard from "../components/HarrypotterCard";

const HarryPotter = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
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
      <h1>Harry Potter Charecters</h1>
      <div className="flex flex-wrap gap-2">
        {data.map(function (elem, idx) {
          return (
            <HarryPotterCard
              key={idx}
              name={elem.name}
              image={elem.image}
              dateOfBirth={elem.dateOfBirth}
              species={elem.species}
              gender={elem.gender}
              hogwartsStudent={elem.hogwartsStudent}
              ancestry={elem.ancestry}
              actor={elem.actor}
              alive={elem.alive}
              wand={elem.wand}
              hairColour={elem.hairColour}
              eyeColour={elem.eyeColour}
              patronus={elem.patronus}
              house={elem.house}
            />
          );
        })}
      </div>
    </>
  );
};

export default HarryPotter;
