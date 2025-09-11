"use client"
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
    const params = useParams()
  return (
    <div>
      <Navbar />
      <h1>{params.id}'s Collection </h1>
      <Footer />
    </div>
  );
};

export default page;
