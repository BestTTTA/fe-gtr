"use client";
import React, { useState } from "react";

function Selecter() {
  const [active, setActive] = useState(1);

  const handleClick = (value) => {
    setActive(value);
  };

  return (
    <div className="md:hidden w-full flex items-center">
      <div
        onClick={() => handleClick(1)}
        className={`flex text-[14px] transition-all duration-100 bg-[#0C2A55] items-center justify-center w-full  cursor-pointer rounded-l-full
            ${active === 1 ? "h-[32px] text-[#FF9933]" : "h-[38] text-white"}`}
      >
        1
      </div>

      {[2, 3, 4, 5, 6].map((num) => (
        <div
          key={num}
          onClick={() => handleClick(num)}
          className={`flex text-[14px] transition-all duration-100 border-[#0C2A55] border bg-[#0C2A55] items-center justify-center w-full cursor-pointer 
           ${active === num ? "h-[32px] text-[#FF9933]" : "h-[38] text-white"}`}
        >
          {num}
        </div>
      ))}

      <div
        onClick={() => handleClick(7)}
        className={`flex text-[14px] transition-all duration-100 bg-[#0C2A55] items-center justify-center w-full  cursor-pointer rounded-r-full
            ${active === 7 ? "h-[32px] text-[#FF9933]" : "h-[38] text-white"}`}
      >
        7
      </div>
    </div>
  );
}

export default Selecter;
