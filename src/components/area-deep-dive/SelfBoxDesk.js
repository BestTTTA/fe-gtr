import { useState } from "react";
import Image from "next/image";

function SelfBoxDesk() {
  const [selfExpanded, setSelfExpanded] = useState(true);

  return (
    <>
      <div className="hidden md:flex md:flex-col mb-6 ml-37 mt-4">
        {/* ส่วนหัว: ชื่อ Self + แถบคะแนนรวม */}
        <div className="flex justify-between items-center mb-2 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            <span className="text-gray-700">Self</span>
          </div>
          <div className="flex w-full pl-20">
            {/* แถบคะแนนรวม Self */}
            <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
              <div
                className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                style={{ width: "77.5%" }}
              >
                77.5%
              </div>
            </div>
          </div>
          {/* ปุ่มต่างๆ (magnify, toggle) */}
          <div className="flex px-1">
            <button className="">
              <Image
                src="/area-deep-dive/magnify-icon.svg"
                width={39}
                height={40}
                alt="Magnify Icon"
              />
            </button>
            <button className="" onClick={() => setSelfExpanded(!selfExpanded)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={25}
                height={25}
                alt="Toggle Icon"
              />
            </button>
          </div>
        </div>

        {/* ส่วนรายละเอียด: แสดง/ซ่อนด้วย selfExpanded */}
        {selfExpanded && (
          <div className="flex pl-33 border-l-2 border-[#9CA3B0] mt-2">
            <div className="flex w-full">
              {/* Column สำหรับ Label */}
              <div className="flex text-nowrap w-fit justify-between flex-col gap-4">
                <div className=" text-gray-700 text-[14px]">
                  Physical Health
                </div>
                <div className=" text-gray-700">Physical Fitness</div>
                <div className=" text-gray-700">Bodily Comfort</div>
                <div className=" text-gray-700">Emotional Health</div>
                <div className=" text-gray-700">Mood</div>
                <div className=" text-gray-700">Stress level</div>
                <div className=" flex items-center text-gray-700">
                  <Image
                    src="/area-deep-dive/mental-icon.svg"
                    width={20}
                    height={20}
                    alt="Mental Clarity icon"
                    className="mr-1"
                  />
                  Mental Clarity
                </div>
                <div className=" text-gray-700">Self-Awareness</div>
                <div className=" text-gray-700">Self-Acceptance</div>
                <div className=" flex items-center text-gray-700">
                  <Image
                    src="/area-deep-dive/sense-icon.svg"
                    width={20}
                    height={20}
                    alt="Sense of Purpose icon"
                    className="mr-1"
                  />
                  Sense of Purpose
                </div>
                <div className=" text-gray-700">Inner Peace</div>
              </div>

              {/* Column สำหรับ Progress Bar */}
              <div className="flex pl-10 justify-between flex-col gap-4 w-full">
                {/* Physical Health */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "65.7%" }}
                  >
                    65.7%
                  </div>
                </div>
                {/* Physical Fitness */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "78.9%" }}
                  >
                    78.9%
                  </div>
                </div>
                {/* Bodily Comfort */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "60.3%" }}
                  >
                    60.3%
                  </div>
                </div>
                {/* Emotional Health */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "81.2%" }}
                  >
                    81.2%
                  </div>
                </div>
                {/* Mood */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "76.9%" }}
                  >
                    76.9%
                  </div>
                </div>
                {/* Stress level */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "80.8%" }}
                  >
                    80.8%
                  </div>
                </div>
                {/* Mental Clarity */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-full"
                    style={{ width: "100%" }}
                  >
                    100%
                  </div>
                </div>
                {/* Self-Awareness */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "80.3%" }}
                  >
                    80.3%
                  </div>
                </div>
                {/* Self-Acceptance */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "92.4%" }}
                  >
                    92.4%
                  </div>
                </div>
                {/* Sense of Purpose */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "52.1%" }}
                  >
                    52.1%
                  </div>
                </div>
                {/* Inner Peace */}
                <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
                  <div
                    className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
                    style={{ width: "67.5%" }}
                  >
                    67.5%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex px-[34px]"></div>
            
          </div>
        )}
      </div>
    </>
  );
}

export default SelfBoxDesk;
