import Image from "next/image";

function KeyInfluencers() {
  return (
    <div className="bg-white flex flex-col w-full p-[16px] rounded-[40px]">
    <h1 className="font-bold text-[18px] hidden md:flex">Key influencers</h1>
      <div className="w-full flex flex-col md:flex md:flex-row p-[8px] gap-[16px]">
        <h1 className="font-bold text-[18px] md:hidden">Key influencers</h1>
        <div className="flex bg-[#F8F9FB] w-full rounded-[24px] overflow-hidden">
          <div className="flex h-full w-[8px] bg-[#C6B06A]"></div>
          <div className="flex flex-col w-full p-[16px] ">
            <div className="flex text-[#151C2A] text-[16px] font-bold items-center gap-x-[8px]">
              <Image
                src="/dashboard/energy-flow-icon.png"
                width={40}
                height={40}
                alt="GTR Dashboard energy-flow-icon"
              />
              Energy-Flow
            </div>
            <div className="flex w-full flex-col pl-[32px]">
              <div className="flex ">
                <div className="flex border-b w-full py-[16px] text-[14px] items-center font-normal gap-[8px]">
                  <Image
                    src="/dashboard/self-icon.png"
                    width={27}
                    height={27}
                    alt="GTR Dashboard self-icon"
                  />
                  Mental Clarity (100%)
                </div>
              </div>
              <div className="flex py-[16px]">
                <div className="flex border-b w-full pb-[16px] text-[14px] items-center font-normal gap-[8px]">
                  <Image
                    src="/dashboard/actions-icon.png"
                    width={27}
                    height={27}
                    alt="GTR Dashboard actions-icon"
                  />
                 Gym (96%)
                </div>
              </div>
              <div className="flex">
                <div className="flex text-[14px] items-center font-normal gap-[8px]">
                  <Image
                    src="/dashboard/social-icon.png"
                    width={27}
                    height={27}
                    alt="GTR Dashboard social-icon"
                  />
                  Kira (93%)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-[#F8F9FB] w-full rounded-[24px] overflow-hidden">
          <div className="flex h-full w-[8px] bg-[#B60A06]"></div>
          <div className="flex flex-col w-full p-[16px]">
            <div className="flex text-[#151C2A] text-[16px] font-bold items-center gap-x-[8px]">
              <Image
                src="/dashboard/energy-tension-icon.png"
                width={40}
                height={40}
                alt="GTR Dashboard energy-tension-icon"
              />
              Energy-Tension
            </div>
            <div className="flex w-full flex-col pl-[32px]">
              <div className="flex">
                <div className="flex border-b w-full py-[16px] text-[14px] items-center font-normal gap-[8px]">
                  <Image
                    src="/dashboard/actions-icon.png"
                    width={27}
                    height={27}
                    alt="GTR Dashboard actions-icon"
                  />
                  Making tax rep0rt (5%)
                </div>
              </div>
              <div className="flex py-[16px]">
                <div className="flex border-b w-full pb-[16px] text-[14px] items-center font-normal gap-[8px]">
                  <Image
                    src="/dashboard/actions-icon.png"
                    width={27}
                    height={27}
                    alt="GTR Dashboard actions-icon"
                  />
                 Gym (96%)
                </div>
              </div>
              <div className="flex">
                <div className="flex text-[14px] items-center font-normal gap-[8px]">
                  <Image
                    src="/dashboard/social-icon.png"
                    width={27}
                    height={27}
                    alt="GTR Dashboard social-icon"
                  />
                  Kira (93%)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyInfluencers;
