import Pretitle from "@/Components/Modules/PreTitle/Pretitle";
import ToolTipButtons from "@/Components/Modules/TooltipButtons/ToolTipButtons";
import React from "react";

export default function LetsTalk() {
  return (
    <>
      <div
      id="Contact"
        className="all flex lg:flex-row flex-col lg:justify-between
       h-[70vh] 2xl:h-[60vh] mb-[190px] lg:mb-[0px] "
      >
        <div className="title mb-[30px]">
          <Pretitle pretitle="SERVICES" />
          <h1 className="text-[40px] lg:text-[50px] font-semibold">
            Let`s{" "}
            <span className="bg-gradient-to-b from-rose-500 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
              Talk
            </span>
          </h1>
        </div>

        <div className="allright lg:w-[55vw] flex  flex-col gap-10">
          <div className="texttt flex flex-col md:flex-row gap-[10px]   ">
            <div className="leftTex w-[50%]">
              <p>EMAIL:</p>
              <h2 className="xl:text-[23px]  text-[19px] font-semibold">
                AzizollahPayandeh1@gmail.com
              </h2>
            </div>

            <div className="leftTex w-[50%]">
              <p>Call:</p>
              <h2 className="text-[23px] font-semibold">09056113913</h2>
            </div>
          </div>

          <div className="allInput flex flex-col gap-4 ">
            <div className="flex flex-col   lg:flex-row  gap-[15px] mg:gap-[10px]">
              <input
              
                type="text"
                placeholder="name"
                className=" outline-none lg:w-[50%] w-full   rounded-lg h-[50px] bg-[#1d2024] text-[15px] opacity-75 placeholder:pl-[10px] "
              />
              <input
              
                type="text"
                placeholder="email"
                className=" outline-none lg:w-[50%] w-full     rounded-lg h-[50px]  bg-[#1d2024] text-[15px] opacity-75 placeholder:pl-[10px]"
              />
            </div>
            <div>
              <input
              
                type="text"
                placeholder="subject"
                className=" outline-none h-[50px]   rounded-lg w-full bg-[#1d2024] text-[15px] opacity-75 placeholder:pl-[10px] "
              />
            </div>
            <div>
              <textarea
              
                name=""
                id=""
                placeholder="Message"
                className="lg:h-[10vw] h-[100px] outline-none  rounded-lg w-full placeholder:pt-[5px] bg-[#1d2024] text-[15px] opacity-75 placeholder:pl-[10px] "
              ></textarea>
            </div>
            <div className="buton flex lg:justify-end text-[12px] ">
              <ToolTipButtons
                firstValue="SEND MESSAGE"
                secondValue="SEND MESSAGE"
                bgstyle="bg-[#212529]"
                textcolor="text-[#ffff]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
