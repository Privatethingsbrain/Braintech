import React from "react";
import Herosection from "./components/Herosection";
import Header1 from "@/components/Header1";
import Footer from "@/components/Footer";
import Economic from "./components/Economic";

const page = () => {
  return (
    <div>
        <Header1/>
     <Herosection/>
     <Economic/>
     <Footer/>
    </div>
  );
};

export default page;
