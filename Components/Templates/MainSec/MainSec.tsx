import Image from "next/image";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Social from "@/Components/Modules/Sociall/Social";


export default function MainSec() {
  return (
    <>
      <div id="About" className="lg:h-[90vh] h-[140vh]">
        <div className="flex justify-center text-center">
          {/* <h1 className="xl:text-[118px] md:text-[80px] text-[60px]  mt-20 ">
            <span className="text-stroke bg-clip-text ">Azizollah Payandeh</span>
          </h1> */}
          <Image src="/Images/maintitle.png" width={900} height={600} alt="Main Sec" className="pt-[50px] pb-[50px]" />
        </div>

        <div className=" lg:hidden pt-[50px]">
          <Image
            width={250}
            height={250}
            alt="profile"
            src="/Images/prof.jpg"
            className="rounded-full mx-auto "
            
          />
        </div>

        <div className="alllll lg:flex lg:justify-between   mt-[5vw]">
          <div className="left lg:flex-col flex flex-col lg:w-[26vw] gap-8">
            <div className="bio ">
              <h4 className="text-[16px] font-[500]">BIOGRAPHY</h4>
              <p className="text-[#c3c1c1] text-[15px] mt-[5px] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="flex lg:flex-col gap-6">
              <div className="skils w-auto flex flex-col ">
                <h4 className="font-[500] text-[16px]">SKILLS</h4>
                <p className="text-[#c3c1c1]  text-[15px] mt-[5px] leading-7">
                  Web Development & UI & UX Design 
                </p>
              </div>

              <div className="conect flex flex-col">
                <h1>CONNECT</h1>
                <div className="flex gap-2 mt-[5px]">
                  <Social
                    icone={
                      <FaTwitter className="lg:p-4 p-3 md:p-3 rounded-full bg-[#212529] cursor-pointer " />
                    }
                    title="Twitter"
                  />
                  <Social
                    icone={
                      <RiInstagramFill className="lg:p-4 p-3 md:p-3 rounded-full bg-[#212529] cursor-pointer " />
                    }
                    title="Instagram"
                  />
                  <Social
                    icone={
                      <BsFacebook className="lg:p-4 p-3 md:p-3 rounded-full bg-[#212529] cursor-pointer " />
                    }
                    title="FaceBook"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="middle w-[21vw] hidden   lg:flex lg:justify-center lg:items-center">
            <Image
              width={400}
              height={400}
              alt="profile"
              src="/Images/prof.jpg"
              className="rounded-full lg:ml-[-50px] xl:ml-[-180px]"
            />
          </div>
          <div className="flex justify-around  lg:flex-col gap-3 pt-10 mr-[20px] ">
            <div className="flex flex-col lg:text-right text-left">
              <h4 className="text-[16px] font-[500]">PROJECTS DONE</h4>
              <span className="text-[35px] lg:text-[50px] mt-[-3px] ">432</span>
            </div>

            <div className="flex flex-col text-right">
              <h4 className="text-[16px] font-[500]">YEARS OF EXPERIENCE</h4>
              <span className="text-[35px] lg:text-[50px] mt-[-3px] ">13+</span>
            </div>

            <div className="flex flex-col text-right">
              <h4 className="text-[16px] font-[500]">WORLDWIDE CLIENTS</h4>
              <span className="text-[35px] lg:text-[50px] mt-[-3px] ">900</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
