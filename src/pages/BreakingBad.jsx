import axios from "axios";
import { useEffect, useState } from "react";
import BreakingBadCard from "../components/BreakingBadCard";

const BreakingBad = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.breakingbadquotes.xyz/v1/quotes/10"
      );
      setdata(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1 className="flex justify-center text-3xl mask-radial-from-stone-300">
        Breaking Bad Qoutes
      </h1>
      <div className="">
        {data.map(function (elem, idx) {
          return (
            <BreakingBadCard
              key={idx}
              author={elem.author}
              quote={elem.quote}
            />
          );
        })}
      </div>
    </>
  );
};

export default BreakingBad;
