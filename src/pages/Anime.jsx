import axios from 'axios';
import { useEffect, useState } from 'react';
import AnimeCard from '../components/AnimeCard';

const Anime = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://dragonball-api.com/api/characters',
      );
      console.log(response.data.items);
      setdata(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-3xl flex justify-center mt-4 mb-5 ">
        List Of All Anime Charecters
      </h1>
      <div className="flex flex-wrap">
        {data.map(function (elem, idx) {
          return (
            <AnimeCard
              key={idx}
              name={elem.name}
              image={elem.image}
              gender={elem.gender}
              ki={elem.ki}
              race={elem.race}
              description={elem.description}
              affiliation={elem.affiliation}
              maxKi={elem.maxKi}
            />
          );
        })}
      </div>
    </>
  );
};

export default Anime;
