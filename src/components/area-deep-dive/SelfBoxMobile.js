import { useState } from "react";
import Image from "next/image";

function SelfBoxMobile() {
    const [selfExpanded, setSelfExpanded] = useState(true);
  return (
    <>
      <div className="md:hidden mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
            <span className="text-gray-700">Self</span>
          </div>
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
              onClick={() => setSelfExpanded(!selfExpanded)}
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

        {selfExpanded && (
          <>
            <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden mb-4">
              <div
                className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                style={{ width: "77.5%" }}
              >
                <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2">
                  77.5%
                </span>
              </div>
            </div>

            {/* Self Subcategories */}
            <div className="pl-4 border-l-2 border-[#9CA3B0] space-y-4 p">
              {/* Physical Health */}
              <div>
                <p className="text-gray-700 mb-1">Physical Health</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "65.7%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      65.7%
                    </span>
                  </div>
                </div>
              </div>

              {/* Physical Fitness */}
              <div>
                <p className="text-gray-700 mb-1">Physical Fitness</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "78.9%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      78.9%
                    </span>
                  </div>
                </div>
              </div>

              {/* Bodily Comfort */}
              <div>
                <p className="text-gray-700 mb-1">Bodily Comfort</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "60.3%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      60.3%
                    </span>
                  </div>
                </div>
              </div>

              {/* Emotional Health */}
              <div>
                <p className="text-gray-700 mb-1">Emotional Health</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "87.2%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      87.2%
                    </span>
                  </div>
                </div>
              </div>

              {/* Mood */}
              <div>
                <p className="text-gray-700 mb-1">Mood</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "76.9%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      76.9%
                    </span>
                  </div>
                </div>
              </div>

              {/* Stress level */}
              <div>
                <p className="text-gray-700 mb-1">Stress level</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "80.8%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      80.8%
                    </span>
                  </div>
                </div>
              </div>

              {/* Mental Clarity */}
              <div className="relative">
                <p className="text-gray-700 mb-1 flex items-center gap-1">
                  <Image
                    src="/area-deep-dive/mental-icon.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  Mental Clarity
                </p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "100%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      100%
                    </span>
                  </div>
                </div>
              </div>

              {/* Self-Awareness */}
              <div>
                <p className="text-gray-700 mb-1">Self-Awareness</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "80.3%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      80.3%
                    </span>
                  </div>
                </div>
              </div>

              {/* Self-Acceptance */}
              <div>
                <p className="text-gray-700 mb-1">Self-Acceptance</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "92.4%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      92.4%
                    </span>
                  </div>
                </div>
              </div>

              {/* Sense of Purpose */}
              <div className="relative">
                <p className="text-gray-700 mb-1 flex items-center gap-1">
                  <Image
                    src="/area-deep-dive/sense-icon.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  Sense of Purpose
                </p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "53.1%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      53.1%
                    </span>
                  </div>
                </div>
              </div>

              {/* Inner Peace */}
              <div>
                <p className="text-gray-700 mb-1">Inner Peace</p>
                <div className="relative h-6 bg-[#B60A06] rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                    style={{ width: "67.5%" }}
                  >
                    <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2 text-sm">
                      67.5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SelfBoxMobile;
