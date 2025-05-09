import SelfCard from "@/components/self/SelfCard";
import KeyInfluencers from "@/components/dashboard/KeyInfluencers";
import TopEmotions from "@/components/dashboard/TopEmotions";
import ApexLineChart from "@/components/dashboard/ApexLineChart";

export default function Self() {
  return (
    <div className="w-full h-lvh overflow-auto flex flex-col bg-[#F0F2F5] py-[32px] px-[16px] gap-[16px]">
      <h1 className="text-[#737985] text-[24px]">
        Insights / <strong className="text-black">Self</strong>
      </h1>
      {/* <SelfCard /> */}

      <div className="w-full flex flex-col bg-white p-2 rounded-4xl py-6">
        <h1 className="m-2 font-bold">GTR</h1>
        <div className="w-full overflow-hidden bg-red rounded-full bg-[#B60A06]">
          <div className="w-[79.4%] items-center justify-end pr-2 text-white flex h-10 bg-[#C6B06A]">
            79.4%
          </div>
        </div>
      </div>

      <KeyInfluencers />
      <TopEmotions />
      <ApexLineChart />
    </div>
  );
}
