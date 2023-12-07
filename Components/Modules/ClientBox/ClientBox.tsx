import Image from "next/image";
import React from "react";

export default function ClientBox() {
  return (
    <>
      <div className="box lg:flex lg:gap-7 text-center lg:text-left cursor-pointer" >
        <div>
          <Image src="/Images/testimonial-1.webp" alt="testimonial" width={1000} height={1000} className="rounded-full mx-auto w-[200px] h-[200px] lg:h-auto lg:w-[400px]"  />
        </div>
        <div className=" flex flex-col gap-7"> 
          <div className="title flex flex-col gap-1">
            <h1 className="text-[25px] font-semibold">Linda secudera</h1>
            <span className="text-[18px] opacity-80">Project Manager</span>
          </div>
          <i className="lg:w-[90%] lg:text-[22px] opacity-90"> 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, exercitationem laudantium? Nesciunt suscipit voluptas
            temporibus magnam, reiciendis aperiam 
          </i>
        </div>
      </div>
    </>
  );
}
