import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen px-30 text-2xl">
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
