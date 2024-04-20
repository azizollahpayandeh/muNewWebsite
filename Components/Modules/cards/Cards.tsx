import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

interface CardsProps {
  imgsrc: string;
  firstlist: string;
  secondlist: string;
  thirdlist: string;
  button: string;
}

export default function Cards({
  imgsrc,
  firstlist,
  secondlist,
  thirdlist,
  button,
}: CardsProps) {
  return (
    <>
      <div className="flex hover:opacity-60 flex-col hover:cursor-pointer transition-all items-center duration-300">
        <div className="flex flex-col ">
          <div className="">
            <Image
              src={imgsrc}
              alt="img"
              width={550}
              height={393}
              className="rounded-2xl"
            />
          </div>
          <ul className="flex justify-start gap-4 mt-[10px]">
            <li className="">{firstlist}</li>
            <li className="flex items-center gap-1">
              {" "}
              <span>
                <GoDotFill className="w-[10px]" />
              </span>{" "}
              {secondlist}
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <span>
                <GoDotFill className="w-[10px]" />
              </span>{" "}
              {thirdlist}
            </li>
          </ul>
          <div>
            <h1 className="lg:text-[32px] "> {button}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
