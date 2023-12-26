import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'next-scroll';

export default function Menu() {
  const [clickHandler, setClickHandler] = useState('none');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setClickHandler('none');
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [])

  return (
    <>
      <div>
        <div className="w-[220px] h-[250px] bg-opacity-50 rounded-2xl bg-gradient-to-r from-[rgb(165,9,251)] to-blue-500  " ref={menuRef}>
          <ul className="pt-[20px] pl-[20px] flex flex-col gap-1">
            <Link to="About" offset={100} duration={700}>
              <li
                className={`${
                  clickHandler === "About" ? "text-[20px] text-[rgb(103,48,114)]" : "text-[18px]"
                } hover:opacity-70 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  setClickHandler("About");
                }}
              >
                About
              </li>
            </Link>
            <Link to="Services" offset={100} duration={700}>
              <li
                className={`${
                  clickHandler === "Services" ? "text-[20px] text-[rgb(103,48,114)]" : "text-[18px]"
                } hover:opacity-70 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  setClickHandler("Services");
                }}
              >
                Services
              </li>
            </Link>
            <Link to="Portfolio" offset={100} duration={700}>
              <li
                className={`${
                  clickHandler === "Portfolio" ? "text-[20px] text-[rgb(103,48,114)]" : "text-[18px]"
                } hover:opacity-70 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  setClickHandler("Portfolio");
                }}
              >
                Portfolio
              </li>
            </Link>
            <Link to="Awards" offset={100} duration={700}>
              <li
                className={`${
                  clickHandler === "Awards" ? "text-[20px] text-[rgb(103,48,114)]" : "text-[18px]"
                } hover:opacity-70 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  setClickHandler("Awards");
                }}
              >
                Awards
              </li>
            </Link>
            <Link to="Testimonial" offset={100} duration={700}>
              <li
                className={`${
                  clickHandler === "Testimonial" ? "text-[20px] text-[rgb(103,48,114)]" : "text-[18px]"
                } hover:opacity-70 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  setClickHandler("Testimonial");
                }}
              >
                Testimonial
              </li>
            </Link>
            <Link to="Blog" offset={100} duration={700}>
              <li
                className={`${
                  clickHandler === "Blog" ? "text-[20px] text-[rgb(103,48,114)]" : "text-[18px]"
                } hover:opacity-70 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  setClickHandler("Blog");
                }}
              >
                Blog
              </li>
            </Link>
            <Link to="Contact" offset={100} duration={700}>
              <li
                className={`${
                  clickHandler === "Contact" ? "text-[20px] text-[rgb(103,48,114)]" : "text-[18px]"
                } hover:opacity-70 transition-all duration-300 cursor-pointer`}
                onClick={() => {
                  setClickHandler("Contact");
                }}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
