import React from "react";

interface CardBPProbe {
  title: string;
  desc: string;
}

export default function CardBP({ title, desc }: CardBPProbe) {
  return (
    <>
      <div className="all">
        <div className=" md:w-[230px] h p-6  shadow-[0px_3px_5px_0px_rgb(165,9,251)] bg-[#151516] ">
          <div className="textall ">
            <h2 className="opacity-80">{title}</h2>
            <h3 className="text-[14px] opacity-70 mt-[1px]">{desc}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
