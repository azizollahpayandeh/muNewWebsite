import React from "react";
import { FaPaintbrush } from "react-icons/fa6";

export default function Services() {
  return (
    <>
      <div
        className="flex mr-[20px] transition-all duration-500 ease-in-out hover:bg-[#251741] flex-col lg:flex-row lg:w-[50vw]  w-[84vw]  lg:h-[130px] h-[170px] gap-2 shadow-[0px_3px_5px_0px_rgb(165,9,251)] bg-[#151516] rounded-xl text-white lg:justify-around lg:items-center">
        <div className="pl-[10px] pt-[10px]">
          <h1 className="lg:text-[30px] text-[27px]">01/</h1>
        </div>
        <div className="flex  pl-[10px] lg:text-[27px] text-[22px] lg:justify-center items-center lg:gap-3 gap-2">
          <FaPaintbrush className="w-[20px]" />
          <h1>Design</h1>
        </div>
        <div className="lg:w-[400px] w-[340px] pl-[10px] pb-[10px]">
          <p className="text-[15px] text-gray-300">
            Lorem ipsum dolor sit amet,  adipisicing elit, sed do
            eiusmod tempor incididunt ut labore etnt ut 
          </p>
        </div>
      </div>
    </>
  );
}
