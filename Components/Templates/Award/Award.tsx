import AwardCards from "@/Components/Modules/AwardCards/AwardCards";
import Pretitle from "@/Components/Modules/PreTitle/Pretitle";
import React from "react";

export default function Award() {
  return (
    <>
      <div id="Awards" className="xl:flex xl:justify-between xl:h-[55vh]">

        <div className="leftText">
          <div>
            <Pretitle pretitle="ACHIEVEMENTS" />
          </div>
          <div>
            <h1 className="text-[40px] lg:text-[50px] font-semibold">
              Awa
              <span className="bg-gradient-to-b from-rose-500 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
                rds
              </span>
            </h1>
          </div>
        </div>

        <div className="awardCards flex gap-5 xl:w-[80%] flex-wrap justify-end mt-[40px] lg:mt-[0px]">
            <AwardCards/>
            <AwardCards/>
            <AwardCards/>
            <AwardCards/>
        </div>  
      </div>
    </>
  );
}
