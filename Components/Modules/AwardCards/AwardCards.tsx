import React from "react";

export default function AwardCards() {
  return (
    <>
      <div className="lg:w-[55vh]  hover:bg-[#251741] xl:h-[13vw]  shadow-[0px_3px_5px_0px_rgb(165,9,251)] bg-[#151516] rounded-xl text-white">
        <div className="p-[20px] ">
        <div className="flex flex-col gap-1 ">

        <h1 className="text-[28px]">Award Title</h1>
        <span className="text-[13px] opacity-40">2023</span>
        <p className="w-[90%] text-[15px] opacity-90">
          Lorem ipsum dolor sit amet, consect adipisicing elit, do
          eiusmod tempor incididunt ut labore et doloreet doloreet doloreet dolore
        </p>
        </div>
        </div>
      </div>
    </>
  );
}
