"use client";
import { useState, useEffect } from "react";

const DotFollowMouse: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPosition((prevPosition) => ({
        x: prevPosition.x + window.scrollX,
        y: prevPosition.y + window.scrollY,
      }));
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div
        className="w-4 h-4 bg-white rounded-full absolute"
        style={{
          left: `calc(${position.x}px - 0vw)`,
          top: `calc(${position.y}px - 0vh)`,
        }}
      />
  );
};

export default DotFollowMouse;
