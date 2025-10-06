import axios from "axios";
import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";

const Memes = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      setdata(response.data.data.memes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1 className="text-3xl flex justify-center mask-linear-from-inherit mt-4 mb-4">Memes</h1>
      <div className="flex flex-wrap px-20 gap-4">
        {data.map(function (elem, idx) {
          return (
            <MemeCard
              key={idx}
              name={elem.name}
              url={elem.url}
              captions={elem.captions}
              box_count={elem.box_count}
            />
          );
        })}
      </div>
    </>
  );
};

export default Memes;
