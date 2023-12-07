import React from "react";
import { FaRegCircle } from "react-icons/fa6";

interface pretitleProps {
  pretitle: string;
}

export default function Pretitle({ pretitle }: pretitleProps) {
  return (
    <>
      <div className="flex gap-1 opacity-50">
        <FaRegCircle className="w-[10px] " />
        <span className="text-[13px] ">{pretitle}</span>
      </div>
    </>
  );
}
