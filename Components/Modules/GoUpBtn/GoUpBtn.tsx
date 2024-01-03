"use client";
import { Link } from "next-scroll";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { UseScrollPosition } from "@/Hooks/UseScrollPosition/UseScrollPosition";

export default function GoUpBtn() {
  const scrollPosition = UseScrollPosition();

  return (
    <>
      <div>
        <div className={`${scrollPosition > 600 ? "block" : "hidden"}`}>
          <div className="p-[20px] rounded-full bg-gradient-to-r from-[rgb(165,9,251)] to-blue-500">
            <Link to="About">
              <FaArrowUp className="text-[15px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
