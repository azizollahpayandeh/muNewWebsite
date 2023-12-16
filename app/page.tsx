import React from "react";
import NavBar from "@/Components/Templates/NavBar/NavBar";
import MainSec from "@/Components/Templates/MainSec/MainSec";
import WhatIDo from "@/Components/Templates/WhatIDo/WhatIDo";
import DotFollowMouse from "@/Components/Modules/DotFollow/DotFollowMouse";
import ComponyLogo from "@/Components/Templates/ComponyLogo/ComponyLogo";
import RescentWork from "@/Components/Templates/RecentWork/RescentWork";
import Award from "@/Components/Templates/Award/Award";
import ClientSpeak from "@/Components/Templates/ClientSpeak/ClientSpeak";
import Blogs from "@/Components/Templates/Blogs/Blogs";
import LetsTalk from "@/Components/Templates/LetsTalk/LetsTalk";
import Map from "@/Components/Templates/Map/Map";
import LastWord from "@/Components/Templates/LastWorld/LastWord";

export default function page() {
  return (
    <>
      <div>
        <div className="pr-[7.7vw] 2xl:pr-[10vw] 2xl:pl-[10vw] pl-[7.7vw]">
          <MainSec />
          <WhatIDo />
          <ComponyLogo />
        </div>
        <div
          className="pl-[3vw] 2xl:pl-[5vw] 2xl:pr-[5vw] pr-[3vw]">
          <RescentWork />
        </div>
        <div className="pr-[7.7vw] 2xl:pr-[10vw] 2xl:pl-[10vw] pl-[7.7vw]">
          <Award/>
          <ClientSpeak/>
        </div>
        <div className="pl-[3vw] 2xl:pl-[5vw] 2xl:pr-[5vw] pr-[3vw]">
          <Blogs />
        </div>

        <div className="pr-[7.7vw] 2xl:pr-[10vw] 2xl:pl-[10vw] pl-[7.7vw]">
          <LetsTalk/>
          <Map/>
          <LastWord/>
        </div>

      </div>
    </>
  );
}
