import { useEffect, useState } from "react";
import axios from "../services/apiConfig";
import { toast } from "react-toastify";
import UserCard from "../components/UserCard";
const Users = () => {
  const [user, setuser] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get("/users");
      setuser(response.data);
      
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return <div>
    <>
    <h1 className="flex justify-center mt-10">List Of All Users</h1>
    <div className="flex flex-wrap px-10">
      {user.map(function(item, idx){
        return <UserCard key={idx} name={item.name.firstname} email={item.email} address={item.address.street}   />
      })}
    </div>
    </>
  </div>;
};

export default Users;
