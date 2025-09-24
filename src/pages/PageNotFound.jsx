import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const Navigate = useNavigate()
  return (
    <div>
      <h1 className="text-2xl flex justify-center mt-10">Page Not Found </h1>
      <button onClick={()=>Navigate('/')} className="bg-rose-600 rounded-xl px-4 py-2 active:scale-95">
        Home
      </button>
    </div>
  );
};

export default PageNotFound;
