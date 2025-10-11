import axios from "axios";
import { useEffect, useState } from "react";
import JokeCard from "../components/JokesCard";

const Joke = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/jokes/random/100"
      );
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
    <>
      <h1 className="flex justify-center text-3xl mask-linear-from-inherit mt-4 mb-2">Some Random Jokes</h1>
      <div className="flex flex-wrap">
        {data.map(function (elem, idx) {
          return (
            <JokeCard
              key={idx}
              setup={elem.setup}
              delivery={elem.punchline}
              category={elem.category}
              id={elem.id}
              safe={elem.safe}
            />
          );
        })}
      </div>
    </>
  );
};

export default Joke;
