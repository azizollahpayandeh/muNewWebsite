import React from "react";

interface SocialProps {
  icone: any;
  title: string;
}

export default function Social({ icone, title }: SocialProps) {
  return (
    <section className="flex justify-center items-center">
      <button className="group flex justify-center p-2 rounded-md drop-shadow-xl  to-black text-white font-semibold hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
        {icone}
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
          {`${title}`}
        </span>
      </button>
    </section>
  )
}
