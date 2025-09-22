import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-screen h-screen px-30 text-2xl">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
