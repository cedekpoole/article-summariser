import React from "react";
import Title from "../assets/title.png";
import Logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa";
import MotionDiv from "./MotionDiv";

const Hero = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <MotionDiv duration={0.8} x={-25} y={-25}>
          <div className="flex items-center">
            <img src={Logo} className="w-28" alt="" />
            <p className="font-bold -ml-4">OPENAI ARTICLE SUMMARISER</p>
          </div>
        </MotionDiv>
        <a href="https://www.cedekpoole.com " target="_blank">
          <div className="items-center cursor-pointer mr-10 hidden sm:flex bg-black py-2 px-3 rounded-lg text-white hover:bg-blue-500 duration-500 hover:shadow-xl">
            <p>PORTFOLIO</p>
            <FaArrowRight className="ml-2" />
          </div>
        </a>
      </div>
      <div className="flex flex-col w-5/6 mx-auto">
        <MotionDiv duration={0.9} x={100}>
          <img className="mx-auto" src={Title} alt="Page title" />
        </MotionDiv>
        <MotionDiv duration={1.2} x={150}>
          <p className="text-center italic text-sm sm:text-lg">
            SUMMARISE ANY ARTICLE IN AN INSTANT
          </p>
        </MotionDiv>
        <hr className="border-slate-200 mb-3 mt-3" />
      </div>
    </header>
  );
};

export default Hero;
