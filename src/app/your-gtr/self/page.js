import SelfCard from "@/components/self/SelfCard"

export default function Self() {
  return (
    <div className="w-full h-lvh overflow-auto flex flex-col bg-[#F0F2F5] py-[32px] px-[16px] gap-[16px]">
      <h1 className="text-[#737985] text-[24px]">Area Deep Dive / <strong className="text-black">Self</strong></h1>
      <SelfCard />
    </div>
  )
}
