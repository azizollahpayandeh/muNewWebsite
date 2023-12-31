"use client";
import Pretitle from "@/Components/Modules/PreTitle/Pretitle";
import Cards from "@/Components/Modules/cards/Cards";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

export default function Blogs() {
  return (
    <>
      <div id="Blog" className="bg-[#1d2024] rounded-2xl mt-[100px] mb-[100px]  h-auto">
        <div className="flex flex-col justify-center items-center ">
          <div className="textTop lg:w-[51vw] w-[84vw] pl-[20px] pt-[80px]">
            <div>
              <Pretitle pretitle="JOURNAL" />
            </div>

            <div className="">
              <h1 className="text-[40px] lg:text-[55px] font-semibold">
                Blog
                <span className="bg-gradient-to-b from-rose-500 via-indigo-500 to-purple-800 text-transparent bg-clip-text">
                  Posts
                </span>
              </h1>
              <p className="text-[15px] text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </p>
            </div>

            <div className="buttons flex gap-2 mt-[20px]">
              <div className="w-[45px] h-[45px] bg-[#49494d] prevEl hover:bg-[#393246] transition-all duration-300 rounded-full flex justify-center items-center cursor-pointer">
                <IoIosArrowRoundBack className="text-[30px]" />
              </div>
              <div className="w-[45px] h-[45px] bg-[#49494d] nextEl hover:bg-[#393246] transition-all duration-300 rounded-full flex justify-center items-center cursor-pointer">
                <IoIosArrowRoundForward className="text-[30px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="swiper w-[90%]  md:h-[520px] 2xl:h-[450px] lg:mt-[100px] mt-[40px]  flex justify-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            navigation={{
              prevEl: ".prevEl",
              nextEl: ".nextEl",
            }}
            breakpoints={{
              // Breakpoint for 2xl (1536px and larger)
              1536: {
                slidesPerView: 3,
              },
              // Breakpoint for xl (1280px and larger)
              1280: {
                slidesPerView: 2,
              },
              // Breakpoint for lg (1024px and larger)
              1024: {
                slidesPerView: 1,
              },
            }}
            loop={true}
          >
            <SwiperSlide>
              <Link href={`Blogs/how-i-come-up-with-new-ideas`}>
                <Cards
                  imgsrc="/Images/blog-1.webp"
                  firstlist="VISUAL ART"
                  secondlist="SISUAL ART"
                  thirdlist="CONCEPT"
                  button="How I Come Up New Ideas"
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href={`Blogs/optimizing-work-enviroment`}>
                <Cards
                  imgsrc="/Images/blog-2.webp"
                  firstlist="3D MODELING"
                  secondlist="SPECAIL ART"
                  thirdlist="CONCEPT"
                  button="Optimizing Work Enviroment"
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href={`Blogs/the-art-of-coffee-making`}>
                <Cards
                  imgsrc="/Images/blog-3.webp"
                  firstlist="3D MODELING"
                  secondlist="SPECAIL ART"
                  thirdlist="CONCEPT"
                  button="The Art Of Coffee Making"
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link href={`Blogs/visual-art-of-cubes`}>
                <Cards
                  imgsrc="/Images/blog-4.webp"
                  firstlist="VISUAL ART"
                  secondlist="SISUAL ART"
                  thirdlist="CONCEPT"
                  button="Visual Art Of Cubes"
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
