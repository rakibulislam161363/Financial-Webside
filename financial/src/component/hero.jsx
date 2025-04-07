
import React from "react";

function Hero() {
  return (
    <div className="flex justify-between items-center mt-[128px]">
      {/* left */}
      <div className="text-white mr-5">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold">
          Spend your Cardano anywhere, anytime.
        </h1>
        <p className="text-xs md:w-[380px] sm:w-[300px] text-[#ADB2B1] md:pt-8 pt-4">
          Our user-friendly platform enables businesses and individuals to
          seamlessly convert and spend their crypto for everyday purchases.
        </p>
        <button className="lg:px-8 lg:py-3 px-4 py-2 border-[1px] rounded-full hover:bg-gray-500 mt-5 hover:text-white  bg-[#772AB3] text-white flex items-cente justify-center">
          Get Started
          <img className="size-4 ml-2 mt-1" src="Vector 7.png" alt="" />
        </button>
      </div>

      {/* right */}
      <div className="lg:mr-[-100px] md:mr-[-50px] mr-[-25px]">
        <img
          className="xl:w-[793px] xl:h-[539px] md:w-[600px] md:h-[400px] sm:w-[300px] sm:h-[250px]"
          src="Group 21.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;