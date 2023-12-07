import React from "react";
import NavBar from "@/Components/Templates/NavBar/NavBar";
import MainSec from "@/Components/Templates/MainSec/MainSec";
import WhatIDo from "@/Components/Templates/WhatIDo/WhatIDo";
import DotFollowMouse from "@/Components/Modules/DotFollow/DotFollowMouse";
import ComponyLogo from "@/Components/Templates/ComponyLogo/ComponyLogo";
import RescentWork from "@/Components/Templates/RecentWork/RescentWork";

export default function page() {
  return (
    <>
      <div>
        <NavBar />
        <div className="pr-[7.7vw] pl-[7.7vw]">
          <MainSec />
          <WhatIDo />
          <ComponyLogo />
        </div>
        <div
          className="pl-[3vw] pr-[3vw]">
          <RescentWork />
        </div>
      </div>
    </>
  );
}
