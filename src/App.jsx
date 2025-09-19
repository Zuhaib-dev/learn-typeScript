import axios from "./services/apiConfig";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/products");
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <>
        <h1 className="flex justify-center text-3xl mt-10">List Of Products</h1>
        <div className="flex flex-wrap px-10">
          {data.map(function (elem, idx) {
            return (
              <Card
                key={idx}
                name={elem.title}
                price={elem.price}
                category={elem.category}
                image={elem.image}
              />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default App;
