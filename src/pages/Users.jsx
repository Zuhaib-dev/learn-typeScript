import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const Users = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
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
    <div>
      <h1>ALL Users</h1>
      <div>
        {data.map(function (item, idx) {
          return (
            <UserCard
              key={idx}
              name={item.author}
              image={item.download_url}
              price={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Users;
