"use client";
import { useState } from "react";
import Image from "next/image";
import SelfBoxMobile from "@/components/area-deep-dive/SelfBoxMobile";
import SelfBoxDesk from "@/components/area-deep-dive/SelfBoxDesk";
import FourBoxMobile from "@/components/area-deep-dive/FourBoxMobile";
import FourBoxDesk from "@/components/area-deep-dive/FourBoxDesk";

export default function AreaDeepDive() {
  const [totalExpanded, setTotalExpanded] = useState(true);

  return (
    <div className="flex h-dvh py-[32px] px-[16px] flex-col bg-[#F0F2F5] overflow-y-auto">
      <h1 className="text-[24px] font-bold">Area Deep Dive</h1>
      <div className="flex flex-col md:flex md:flex-row md:text-sm md:gap-1 gap-2 mt-2">
        <p className="flex items-center gap-2">
          Click on
          <Image
            src="/area-deep-dive/star-icon.svg"
            width={17}
            height={17}
            alt="Picture of the author"
          />
          to zoom in on the area
        </p>
        <p className="flex items-center">
          <Image
            src="/area-deep-dive/star-icon.svg"
            width={17}
            height={17}
            alt="Picture of the author"
          />
          = biggest influencer to energy flow
        </p>
        <p className="flex items-center">
          <Image
            src="/area-deep-dive/star-icon.svg"
            width={17}
            height={17}
            alt="Picture of the author"
          />
          = biggest influencer to energy blockage
        </p>
      </div>

      {/* GTR Score Card */}
      <div className="mt-6 bg-white md:rounded-[16px] rounded-[40px] p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-4">GTR Score</h2>
        {/* Total GTR Score */}
        <div className="md:hidden mb-6 mt-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 text-[14px]">Total GTR Score</span>
            <div className="flex gap-2">
              <button className="p-1">
                <Image
                  src="/area-deep-dive/magnify-icon.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </button>
              <button
                className="p-1"
                onClick={() => setTotalExpanded(!totalExpanded)}
              >
                <Image
                  src="/area-deep-dive/arrow-up-icon.svg"
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </button>
            </div>
          </div>
          {totalExpanded && (
            <div className="md:hidden relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full flex items-center justify-end"
                style={{ width: "74.9%" }}
              >
                <span className="absolute text-white font-medium text-sm px-2">
                  74.9%
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center">
          <span className="text-gray-700 text-[14px] text-nowrap p-4">
            Total GTR Score
          </span>
          <div className="w-full flex bg-[#B60A06] rounded-full h-[28px]">
            <div className="w-[74.9%] bg-[#C6B06A] rounded-l-full"></div>
          </div>
        </div>

        {/* Self */}
        <SelfBoxMobile />
        <SelfBoxDesk />

        {/* Four */}
        <FourBoxMobile />
        <FourBoxDesk />
      </div>
    </div>
  );
}
