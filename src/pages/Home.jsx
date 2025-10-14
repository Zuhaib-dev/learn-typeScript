import axios from "axios";
import { useEffect, useState } from "react";
import QuotesCard from "../components/QuotesCard";

const Home = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("https://api.realinspire.live/v1/quotes/random");
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
      <h1 className="flex justify-center text-3xl mask-radial-from-neutral-300">
         Qoutes to Get With
      </h1>
      <div >
        {data.map(function (elem, idx) {
          return (
            <QuotesCard key={idx} author={elem.author} content={elem.content} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
