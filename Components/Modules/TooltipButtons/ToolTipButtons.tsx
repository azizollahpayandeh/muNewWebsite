import React from "react";
import "./ToolTipButtons.css";

interface ToolTipProps {
  firstValue: string;
  secondValue: string;
  bgstyle: string;
  textcolor: string
}

export default function ToolTipButtons({
  firstValue,
  secondValue,
  bgstyle,
  textcolor,
}: ToolTipProps) {
  return (
    <div className={`button cursor-pointer`}>
      <div className="button-wrapper ">
        <div className={`text ${bgstyle} ${textcolor} `}>{firstValue}</div>
        <div className={`second-text ${textcolor} `}>{secondValue}</div>
      </div>
    </div>
  );
}
