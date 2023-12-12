"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ClientBox from '@/Components/Modules/ClientBox/ClientBox';

export default function ClientSpeak() {
  return (
    <>
        <div className='lg:h-[30vh]  mt-[100px] mb-[100px]'>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <ClientBox/>
            </SwiperSlide>

            <SwiperSlide>
            <ClientBox/>
            </SwiperSlide>

            <SwiperSlide>
            <ClientBox/>
            </SwiperSlide>


          </Swiper>
        <hr className="shadow-[0px_1px_5px_2px_rgb(165,9,251)] h-[0.5px] lg:w-[75%] xl:ml-[260px] lg:ml-[200px] mt-[10px]"/>
        </div>
    </>
  )
}
