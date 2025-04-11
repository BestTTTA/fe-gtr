import Image from "next/image";

function GtrScore() {
  return (
    <div className="flex flex-col gap-[8px] p-[16px] pb-[44px] pt-[30px] w-full rounded-[40px] bg-white">
      <h1 className="text-[18px] font-bold">GTR Score</h1>
      <div className="flex w-full items-center justify-between">
        <div className="relative w-full h-[48px] bg-[#B60A06] rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[79.4%] bg-[#C6B06A] rounded-l-full border-r-2 border-white flex items-center justify-end pr-1 text-white text-[20px] font-medium">
            79.4
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex md:flex-row w-full bg-white px-2 gap-[8px] py-[16px]">
        <div className="flex flex-col w-full">
          <div className="flex text-[14px] font-bold items-center gap-[8px]">
            <Image
              src="/dashboard/self-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard self-icon"
            />
            Self
          </div>
          <div className="flex text-[18px] font-bold items-center gap-[8px]">
            77.5
            <Image
              src="/dashboard/arrow-up-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard arrow-up-icon"
              className="mt-2"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="relative w-full h-[8px] bg-[#B60A06] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[79.4%] bg-[#C6B06A] rounded-l-full border-r-2 border-white flex items-center justify-end pr-1 text-white text-[20px] font-medium">
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex text-[14px] font-bold items-center gap-[8px]">
            <Image
              src="/dashboard/social-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard social-icon"
            />
            Social
          </div>
          <div className="flex text-[18px] font-bold items-center gap-[8px]">
            77.5
            <Image
              src="/dashboard/down-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard down-icon"
              className="mt-2"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="relative w-full h-[8px] bg-[#B60A06] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[79.4%] bg-[#C6B06A] rounded-l-full border-r-2 border-white flex items-center justify-end pr-1 text-white text-[20px] font-medium">
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex text-[14px] font-bold items-center gap-[8px]">
            <Image
              src="/dashboard/actions-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard actions-icon"
            />
            Actions
          </div>
          <div className="flex text-[18px] font-bold items-center gap-[8px]">
            77.5
            <Image
              src="/dashboard/arrow-up-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard arrow-up-icon"
              className="mt-2"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="relative w-full h-[8px] bg-[#B60A06] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[79.4%] bg-[#C6B06A] rounded-l-full border-r-2 border-white flex items-center justify-end pr-1 text-white text-[20px] font-medium">
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex text-[14px] font-bold items-center gap-[8px]">
            <Image
              src="/dashboard/obtainments-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard obtainments-icon"
            />
            Obtainments
          </div>
          <div className="flex text-[18px] font-bold items-center gap-[8px]">
            77.5
            <Image
              src="/dashboard/arrow-up-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard arrow-up-icon"
              className="mt-2"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="relative w-full h-[8px] bg-[#B60A06] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[79.4%] bg-[#C6B06A] rounded-l-full border-r-2 border-white flex items-center justify-end pr-1 text-white text-[20px] font-medium">
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex text-[14px] font-bold items-center gap-[8px]">
            <Image
              src="/dashboard/environment-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard environment-icon"
            />
            Environment
          </div>
          <div className="flex text-[18px] font-bold items-center gap-[8px]">
            77.5
            <Image
              src="/dashboard/arrow-up-icon.png"
              width={27}
              height={27}
              alt="GTR Dashboard arrow-up-icon"
              className="mt-2"
            />
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="relative w-full h-[8px] bg-[#B60A06] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-[79.4%] bg-[#C6B06A] rounded-l-full border-r-2 border-white flex items-center justify-end pr-1 text-white text-[20px] font-medium">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GtrScore;
