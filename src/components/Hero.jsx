import React from "react";
import Title from "../assets/title.png";
import Logo from "../assets/logo.png";
const Hero = () => {
  return (
    <div>
      <div className="flex justify-between content-center">
        <div className="flex items-center">
        <img src={Logo} className="w-28" alt="" />
        <p className="font-bold -ml-4">OPENAI ARTICLE SUMMARISER</p>
        </div>
      </div>
      <div className="flex flex-col w-5/6 mx-auto">
        <img className="mx-auto" src={Title} alt="Page title" />
        <p className="text-center italic text-sm sm:text-lg">
          SUMMARISE ANY ARTICLE IN AN INSTANT
        </p>
        <hr className="border-slate-200 mb-3 mt-3" />
      </div>
    </div>
  );
};

export default Hero;
