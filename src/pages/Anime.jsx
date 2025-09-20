import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimeCard from '../components/AnimeCard'
const Anime = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://dattebayo-api.onrender.com/characters"
      );
      console.log(response.data);
      setdata(response.data.characters);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>
    
    <>
    <h1>Anime</h1>
    <div className="flex flex-wrap px-10">
        {data.map(function(item,idx){
            return <AnimeCard key={idx} name={item.name} image={item.images} gender={item.personal.sex} birthdata={item.personal.birthdate} bloodtype={item.personal.bloodType} />
        })}
    </div>
    </>
  </div>;
};

export default Anime;
