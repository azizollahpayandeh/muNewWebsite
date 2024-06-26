import React from "react";
import Services from "@/Components/Modules/ServiceBox/Services";
import Pretitle from "@/Components/Modules/PreTitle/Pretitle";

export default function WhatIDo() {
  return (
    <>
      <div id="Services" className="h-[100vh] lg:h-[60vh] 2xl:h-[65vh]  lg:flex lg:justify-between">
        <div className="title ">
          <Pretitle pretitle="SERVICES" />
          <h1 className="text-[40px] lg:text-[50px] font-semibold">
            What I{" "}
            <span className="bg-gradient-to-b from-rose-500 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
              Do
            </span>
          </h1>
        </div>

        <div className="services flex flex-col gap-10 mt-[20px]">
          <Services />
          <Services />
          <Services />
        </div>
      </div>
    </>
  );
}
