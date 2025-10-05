import { useEffect, useState } from "react";
import axios from "../services/AxiosConfig";
import UserCard from "../components/UserCard";

const Users = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("/users");
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
      <h1 className="flex justify-center text-3xl mt-4">List Of All Users</h1>
      <div className="flex flex-wrap ">
        {data.map(function (elem, idx) {
          return (
            <UserCard
              key={idx}
              firstname={elem.name.firstname}
              lastname={elem.name.lastname}
              email={elem.email}
              username={elem.username}
              phone={elem.phone}
            />
          );
        })}
      </div>
    </>
  );
};

export default Users;
