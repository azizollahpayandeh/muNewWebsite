"use client"
import ToolTipButtons from "@/Components/Modules/TooltipButtons/ToolTipButtons";
import React, { useEffect, useRef, useState } from "react";
import { UseScrollPosition } from "@/Components/Modules/UseScrollPosition/UseScrollPosition";
import Menu from "@/Components/Modules/Menu/Menu";
import Image from "next/image";

interface NavBarProps {
  
}

const NavBar: React.FC<NavBarProps> = () => {
  const scrollPosition = UseScrollPosition();
  const [clickHandlerMenu, setClickHandlerMenu] = useState(false);

  const toggleMenu = () => {
    setClickHandlerMenu(!clickHandlerMenu);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (clickHandlerMenu && menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setClickHandlerMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [clickHandlerMenu]);

  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        className={`w-full top-0 z-50 transition-shadow sticky h-[100px] text-white  ${
          scrollPosition > 0 ? " bg-opacity-95 bg-[#151516]" : "shadow-none"
        }  `}
      >
        <div className=" pt-[15px] items-center gap-2 flex justify-between ">
          <div className="pl-[3vw]">
            <Image alt="Logo" src="/Images/logo3.png" width={70} height={70} />
          </div>
          <div className="flex md:gap-5 gap-2 pr-[3vw] ">
            <ToolTipButtons
              firstValue="Let`s Talk"
              secondValue="Let`s Talk"
              bgstyle="bg-[#212529]"
              textcolor="text-[#ffff]"
            />
            <p onClick={toggleMenu}>
              <ToolTipButtons
                firstValue="Menu"
                secondValue="Menu"
                bgstyle="bg-[#fff]"
                textcolor="text-black"
              />
            </p>
          </div>
        </div>
        <div className={`menu flex justify-end pr-[78px] ${clickHandlerMenu ? "block" : "hidden"}`} ref={menuRef}>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default NavBar;
