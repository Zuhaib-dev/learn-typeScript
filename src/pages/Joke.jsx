import axios from "axios";
import { useEffect, useState } from "react";
import JokeCard from "../components/JokesCard";

const Joke = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?amount=10"
      );
      console.log(response.data.jokes);

      setdata(response.data.jokes);
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
              delivery={elem.delivery}
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
