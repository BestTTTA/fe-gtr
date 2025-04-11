import Image from "next/image";

function FourBoxDesk() {
  return (
    <div className="hidden md:flex md:flex-col gap-1">

      <div className="flex pl-26 w-full items-center hover:bg-[#F0F1F5] py-6 rounded-[24px]">
        <div className="flex items-center gap-2 ">
          <Image
            src="/area-deep-dive/mental-icon.svg"
            width={40}
            height={40}
            alt="Magnify Icon"
          />
          <Image
            src="/area-deep-dive/social-icon.svg"
            width={40}
            height={40}
            alt="Magnify Icon"
          />
          <span className="text-gray-700">Social</span>
        </div>
        <div className="flex w-full pl-17">
          {/* แถบคะแนนรวม Self */}
          <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
            <div
              className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
              style={{ width: "90.4%" }}
            >
              90.4
            </div>
          </div>
        </div>
        {/* ปุ่มต่างๆ (magnify, toggle) */}
        <div className="flex pl-4">
          <button className="">
            <Image
              src="/area-deep-dive/magnify-icon.svg"
              width={40}
              height={40}
              alt="Magnify Icon"
            />
          </button>
          <button
            className=""
            onClick={() => setSelfExpanded(!selfExpanded)}
          >
            <Image
              src="/area-deep-dive/arrow-up-icon.svg"
              width={25}
              height={25}
              alt="Toggle Icon"
            />
          </button>
        </div>
      </div>

      <div className="flex pl-26 w-full items-center hover:bg-[#F0F1F5] py-6 rounded-[24px]">
        <div className="flex items-center gap-2 ">
          <Image
            src="/area-deep-dive/sense-icon.svg"
            width={40}
            height={40}
            alt="Magnify Icon"
          />
          <Image
            src="/area-deep-dive/actions-icon.svg"
            width={40}
            height={40}
            alt="Magnify Icon"
          />
          <span className="text-gray-700">Actions</span>
        </div>
        <div className="flex w-full pl-15">
          {/* แถบคะแนนรวม Self */}
          <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
            <div
              className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
              style={{ width: "47.0%" }}
            >
              47.0
            </div>
          </div>
        </div>
        {/* ปุ่มต่างๆ (magnify, toggle) */}
        <div className="flex pl-4">
          <button className="">
            <Image
              src="/area-deep-dive/magnify-icon.svg"
              width={40}
              height={40}
              alt="Magnify Icon"
            />
          </button>
          <button
            className=""
            onClick={() => setSelfExpanded(!selfExpanded)}
          >
            <Image
              src="/area-deep-dive/arrow-up-icon.svg"
              width={25}
              height={25}
              alt="Toggle Icon"
            />
          </button>
        </div>
      </div>

      <div className="flex pl-26 w-full items-center hover:bg-[#F0F1F5] py-6 rounded-[24px]">
        <div className="flex items-center gap-2 pl-[39px]">
          <Image
            src="/area-deep-dive/obtain-icon.svg"
            width={40}
            height={40}
            alt="Magnify Icon"
          />
          <span className="text-gray-700">Obtainments</span>
        </div>
        <div className="flex w-full pl-8">
          {/* แถบคะแนนรวม Self */}
          <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
            <div
              className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
              style={{ width: "47.0%" }}
            >
              47.0
            </div>
          </div>
        </div>
        {/* ปุ่มต่างๆ (magnify, toggle) */}
        <div className="flex pl-4">
          <button className="">
            <Image
              src="/area-deep-dive/magnify-icon.svg"
              width={40}
              height={40}
              alt="Magnify Icon"
            />
          </button>
          <button
            className=""
            onClick={() => setSelfExpanded(!selfExpanded)}
          >
            <Image
              src="/area-deep-dive/arrow-up-icon.svg"
              width={25}
              height={25}
              alt="Toggle Icon"
            />
          </button>
        </div>
      </div>

      <div className="flex pl-26 w-full items-center hover:bg-[#F0F1F5] py-6 rounded-[24px]">
        <div className="flex items-center gap-2 pl-[39px]">
          <Image
            src="/area-deep-dive/environment-icon.svg"
            width={40}
            height={40}
            alt="Magnify Icon"
          />
          <span className="text-gray-700">Environment</span>
        </div>
        <div className="flex w-full pl-9">
          {/* แถบคะแนนรวม Self */}
          <div className="flex w-full h-[28px] bg-[#B60A06] rounded-full">
            <div
              className="flex justify-end items-center pr-2 text-white bg-[#C6B06A] rounded-l-full"
              style={{ width: "47.0%" }}
            >
              47.0
            </div>
          </div>
        </div>
        {/* ปุ่มต่างๆ (magnify, toggle) */}
        <div className="flex pl-4">
          <button className="">
            <Image
              src="/area-deep-dive/magnify-icon.svg"
              width={40}
              height={40}
              alt="Magnify Icon"
            />
          </button>
          <button
            className=""
            onClick={() => setSelfExpanded(!selfExpanded)}
          >
            <Image
              src="/area-deep-dive/arrow-up-icon.svg"
              width={25}
              height={25}
              alt="Toggle Icon"
            />
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default FourBoxDesk;
