import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ImageCard from "../components/ImageCard";

const Home = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      setdata(response.data);
      setTimeout(() => {
        toast.success("Data Fetched");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>
    
    <>
    <h1 className="flex justify-center mt-10">List Of Images</h1>
    <div className="flex flex-wrap px-20">
      {data.map(function(item,idx){
        return <ImageCard key={idx} name={item.author} image={item.download_url} id={item.id}   />
      })}
    </div>
    </>
  </div>;
};

export default Home;
