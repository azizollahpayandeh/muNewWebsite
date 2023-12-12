"use client"
import ToolTipButtons from "@/Components/Modules/TooltipButtons/ToolTipButtons";
import React from "react";
import { UseScrollPosition } from "@/Components/Modules/UseScrollPosition/UseScrollPosition";
import Image from "next/image";

export default function NavBar() {
    const scrollPosition = UseScrollPosition()
  return (
    <>
    <div className={`w-full top-0 z-50 transition-shadow sticky h-[100px] text-white  ${scrollPosition > 0 ? " bg-opacity-95 bg-[#151516]" : "shadow-none"}  `}>
      <div className=" pt-[15px] items-center gap-2 flex justify-between ">
        <div className="pl-[3vw]">
          <Image alt="Logo" src="/Images/logo3.png" width={70} height={70}/>
        </div>
        <div className="flex md:gap-5 gap-2 pr-[3vw] ">
          <ToolTipButtons firstValue='Let`s Talk' secondValue='Let`s Talk' bgstyle='bg-[#212529]' textcolor="text-[#ffff]"/>
          <ToolTipButtons firstValue='Menu' secondValue='Menu' bgstyle='bg-[#fff]' textcolor="text-black"/>
        </div>
      </div>
    </div>
    </>
  );
}
