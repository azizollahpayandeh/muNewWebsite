import React from "react";
import CardBP from "@/Components/Modules/CardBP/CardBP";
import Image from "next/image";
import ToolTipButtons from "@/Components/Modules/TooltipButtons/ToolTipButtons";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div>
        <div className="pr-[7.7vw] 2xl:pr-[10vw] 2xl:pl-[10vw] pl-[7.7vw]">
          <div className="all flex justify-center">
            <div className="textFirst mt-[30px] lg:mt-[50px] ">
              <h1 className="text-[35px] md:text-[60px]">
                The Art Of Coffe
                <span className="bg-gradient-to-b from-rose-500 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
                  Making
                </span>
              </h1>
              <p className="text-gray-400 lg:w-[800px] text-[14px] md:text-[16px]">
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
              <p className="text-[14px] opacity-70 w-[90%] md:w-[70%] pt-[80px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat consequat lab.
              </p>
            </div>

            <div className="w-[80%] flex flex-col justify-center items-center mx-auto">
              <Image
                alt=""
                src="/Images/blog-1.webp"
                width={1000}
                height={400}
                className="mx-auto rounded-lg w-full pt-[50px] hidden md:block hover:opacity-70  "
              />
              <div className="flex justify-center gap-10 flex-col md:flex-row  pt-10">
                <Image
                  alt=""
                  src="/Images/blog-2.webp"
                  width={482}
                  height={480}
                  className="rounded-lg md:w-[36vw] mx-auto  hover:opacity-70 w-[90%] "
                />
                <Image
                  alt=""
                  src="/Images/blog-3.webp"
                  width={482}
                  height={480}
                  className="rounded-lg md:w-[36vw]  mx-auto hover:opacity-70 w-[90%] "
                />
              </div>
            </div>
            <div className="flex justify-between w-[80%] mx-auto  mt-[40px] pb-[50px]">
              <Link href="/Blogs/optimizing-work-enviroment">
                <ToolTipButtons
                  firstValue="PREV PROJECT"
                  secondValue="PREV PROJECT"
                  bgstyle="bg-[#474747]"
                  textcolor="text-[#ffff]"
                />
              </Link>
              <Link href="/Blogs/visual-art-of-cubes">
                <ToolTipButtons
                  firstValue="NEXT PROJECT"
                  secondValue="NEXT PROJECT"
                  bgstyle="bg-[#474747]"
                  textcolor="text-[#ffff]"
                />
              </Link>
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
