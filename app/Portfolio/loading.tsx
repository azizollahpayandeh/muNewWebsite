import React from "react";
import "./loading.css"


export default function Loading() {
  return (
<div className="pl flex justify-center items-center mx-auto mt-[300px] w-[300px] h-[300px] ">
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__dot"></div>
	<div className="pl__text">Loading…</div>
</div>
  );
}
