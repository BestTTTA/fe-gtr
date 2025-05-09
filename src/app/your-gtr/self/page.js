import SelfCard from "@/components/self/SelfCard";
import KeyInfluencers from "@/components/dashboard/KeyInfluencers";
import TopEmotions from "@/components/dashboard/TopEmotions";
import ApexLineChart from "@/components/dashboard/ApexLineChart";
import Image from "next/image";

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

      <div className="flex flex-col bg-white p-4 rounded-4xl">
        <div className="reflection-content">
          <h3 className="font-semibold mb-2">
            Your personal Self reflection notes
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            These are the notes you made during the assessment. Now that
            you&apos;ve seen the bigger picture, would you like to add anything?
          </p>

          <div className="w-full bg-[#F0F2F5] rounded-[24px] p-[32px] flex flex-col justify-center">
            <h1 className="font-bold">Reflection on my current Self</h1>
            {/* <p className="text-[16px] mt-4">{reflectionText}</p> */}
            <p className="text-[16px] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris. Integer in mauris eu
              nibh euismod gravida. Duis actellus et risus vulputate vehicula.
            </p>
          </div>

          <button
            className="border rounded-full flex items-center mt-4 px-4 py-2 gap-2"
            // onClick={() => setIsEditing(true)}
          >
            <Image
              alt="GTR Icon"
              width={20}
              height={20}
              src="/self-insights/edit-icon.svg"
            />
            Edit reflection
          </button>
        </div>

        {/* <div className="reflection-edit-mode">
                  <h3 className="font-semibold mb-2">
                    Your personal Self reflection notes
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    These are the notes you made during the assessment. Now that
                    you&apos;ve seen the bigger picture, would you like to add
                    anything?
                  </p>
                  <textarea
                    className="w-full min-h-[200px] text-[16px] border border-gray-300 rounded-[16px] p-4 mt-2"
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                  />
                  <div className="flex gap-4 mt-4">
                    <button
                      className="bg-[#F7931E] text-black rounded-full px-6 py-3 font-medium"
                      onClick={() => setIsEditing(false)}
                    >
                      Save edit
                    </button>
                    <button
                      className="border border-gray-300 rounded-full px-6 py-3 font-medium"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div> */}
      </div>
    </div>
  );
}
