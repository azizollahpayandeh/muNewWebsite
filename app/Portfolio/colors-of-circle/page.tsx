import React from "react";
import CardBP from "@/Components/Modules/CardBP/CardBP";
import Image from "next/image";
import ToolTipButtons from "@/Components/Modules/TooltipButtons/ToolTipButtons";

export default function page() {
  return (
    <>
      <div>
        <div className="pr-[7.7vw] 2xl:pr-[10vw] 2xl:pl-[10vw] pl-[7.7vw]">
          <div className="all flex justify-center">
            <div className="textFirst mt-[30px] lg:mt-[50px] ">
              <h1 className="text-[35px] md:text-[60px]">
                Colors Of
                <span className="bg-gradient-to-b from-rose-500 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
                  Circle
                </span>
              </h1>
              <p className="text-gray-400 lg:w-[800px] text-[14px] md:text-[16px] w-[]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit
              </p>
            </div>
          </div>

          <div className="cards flex flex-col md:flex-row  md:flex-wrap justify-center xl:flex-nowrap xl:justify-between 2xl:justify-evenly gap-6 mt-[80px]">
            <CardBP title="Services:" desc="Visual ArtConcept" />
            <CardBP title="Services:" desc="Visual ArtConcept" />
            <CardBP title="Services:" desc="Visual ArtConcept" />
            <CardBP title="Services:" desc="Visual ArtConcept" />
          </div>
        </div>

        <div className="pl-[3vw] 2xl:pl-[5vw] 2xl:pr-[5vw] pr-[3vw] mt-[100px]">
          <div className="anotherblog bg-[#151516] w-full mb-[10px] rounded-2xl ">
            <div className="flex justify-center">
              <p className="text-[14px] opacity-70 md:w-[50%] pt-[80px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat consequat lab.
              </p>
            </div>

            <Image
              alt=""
              src="/Images/blog-1.webp"
              width={1000}
              height={400}
              className="mx-auto rounded-lg pt-[50px] "
            />
            <div className="flex justify-center gap-10 pt-10">
              <Image
                alt=""
                src="/Images/blog-2.webp"
                width={480}
                height={480}
                className="rounded-lg "
              />
              <Image
                alt=""
                src="/Images/blog-3.webp"
                width={480}
                height={480}
                className="rounded-lg "
              />
            </div>
            <div className="flex justify-around gap-44 mt-[40px] pb-[50px]">
              <ToolTipButtons
                firstValue="PREV PROJECT"
                secondValue="PREV PROJECT"
                bgstyle="bg-[#474747]"
                textcolor="text-[#ffff]"
              />
              <ToolTipButtons
                firstValue="NEXT PROJECT"
                secondValue="NEXT PROJECT"
                bgstyle="bg-[#474747]"
                textcolor="text-[#ffff]"
              />
            </div>
          </div>
        </div>
        <div className="h-[10vh]">
          <h1 className="text-center text-[20px] pt-[25px] opacity-80">
            © 2023 , Azizollah Payandeh
          </h1>
        </div>
      </div>
    </>
  );
}
