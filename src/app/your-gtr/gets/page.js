import TabNavigation from "@/components/layout/TabNavigation";

export default function Gets() {
  return (
    <div className="flex flex-col h-lvh overflow-auto bg-[#F0F2F5]">
      <TabNavigation />
      <div className="flex flex-col gap-[16px] py-[32px] px-[16px]">
        <h1 className="text-[24px] font-bold">Gets</h1>
        
        {/* Page content goes here */}
        <div className="bg-white rounded-[20px] p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Gets Analysis</h2>
          <p className="text-gray-600">
            Understand what you're gaining and how it influences your Good Time Ratio.
          </p>
        </div>
      </div>
    </div>
  );
} 