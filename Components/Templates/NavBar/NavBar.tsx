"use client"
import ToolTipButtons from "@/Components/Modules/TooltipButtons/ToolTipButtons";
import React, { useEffect, useRef, useState } from "react";
import { UseScrollPosition } from "@/Hooks/UseScrollPosition/UseScrollPosition";
import Menu from "@/Components/Modules/Menu/Menu";
import GoUpBtn from "@/Components/Modules/GoUpBtn/GoUpBtn";
import Image from "next/image";
import { Link } from "next-scroll";

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
    document.addEventListener("click", handleDocumentClick)

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [clickHandlerMenu])

  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        className={`w-full top-0 z-50 transition-shadow sticky md:h-[100px] h-[80px] text-white  ${
          scrollPosition > 0 ? " bg-opacity-95 bg-[#151516]" : "shadow-none"
        }  `}
      >
        <div className="  transition-all duration-500 pt-[15px] items-center gap-2 flex md:justify-between justify-center ">
          <div className="pl-[3vw] hidden md:block">
            <Image alt="Logo" src="/Images/logo3.png" width={70} height={70} />
          </div>
          <div className="flex md:gap-5 justify-around  gap-2 pr-[3vw] ">
          <Link to="Contact" offset={100} duration={700}>
            <ToolTipButtons
              firstValue="Let`s Talk"
              secondValue="Let`s Talk"
              bgstyle="bg-[#212529]"
              textcolor="text-[#ffff]"
              />
              </Link>
            <span onClick={toggleMenu}>
              <ToolTipButtons
                firstValue="Menu"
                secondValue="Menu"
                bgstyle="bg-[#fff]"
                textcolor="text-black"
              />
            </span>
          </div>
        </div>
        <div className={`menu flex justify-end md:pr-[78px] pr-[50px] pt-[10px] md:pt-[0px] ${clickHandlerMenu ? "block" : "hidden"}`} ref={menuRef}>
          <Menu />
        </div>

      </div>
    </>
  );
};

export default NavBar;
