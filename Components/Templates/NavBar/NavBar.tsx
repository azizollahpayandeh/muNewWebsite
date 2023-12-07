import ToolTipButtons from "@/Components/Modules/TooltipButtons/ToolTipButtons";
import React from "react";

export default function NavBar() {
  return (
    <>
    <div className="fixed w-full shadow-[0px_2px_3px_0px_rgb(165,9,251)] bg-[#151516] text-white z-50">
      <div className="mt-[20px]  items-center flex justify-between ">
        <div>
          <h1 className="pl-[3vw] font-[500] text-[30px]">Mone</h1>
        </div>
        <div className="flex gap-5 pr-[3vw] ">
          <ToolTipButtons firstValue='Let`s Talk' secondValue='Let`s Talk' bgstyle='bg-[#212529]' textcolor="text-[#ffff]"/>
          <ToolTipButtons firstValue='Menu' secondValue='Menu' bgstyle='bg-[#fff]' textcolor="text-black"/>
        </div>
      </div>
    </div>
    </>
  );
}
