import Image from "next/image";
import { useState } from "react";

export default function SelfBoxMobile({ areaData }) {
  const [expanded, setExpanded] = useState(true);
  const [showElements, setShowElements] = useState(false);

  const selfScore = areaData?.gtr ? parseFloat(areaData.gtr).toFixed(1) : "0.0";

  // Function to format element name for display
  const formatElementName = (name) => {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="md:hidden mb-6 mt-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 text-[14px]">Self</span>
        <div className="flex gap-2">
          <button className="p-1" onClick={() => setShowElements(!showElements)}>
            <Image
              src="/area-deep-dive/arrow-up-icon.svg"
              width={40}
              height={40}
              alt="arrow-up icon"
            />
          </button>
          {/* <button className="p-1" onClick={() => setExpanded(!expanded)}>
            <Image
              src="/area-deep-dive/arrow-up-icon.svg"
              width={25}
              height={25}
              alt="Arrow icon"
            />
          </button> */}
        </div>
      </div>
      {expanded && (
        <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full flex items-center justify-end"
            style={{ width: `${selfScore}%` }}
          >
            <span className="absolute text-white font-medium text-sm px-2">
              {selfScore}%
            </span>
          </div>
        </div>
      )}

      {/* Elements section */}
      {showElements && areaData?.elements && (
        <div className="mt-4 pl-4 border-l-2 border-gray-200">
          {areaData.elements.map((element, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  {element.isHigh && (
                    <span className="mr-2 text-blue-500">●</span>
                  )}
                  {element.isLow && (
                    <span className="mr-2 text-red-500">●</span>
                  )}
                  <span className="text-gray-700">
                    {formatElementName(element.element)}
                  </span>
                </div>
                <span className="text-gray-700 font-medium">{element.gtr}%</span>
              </div>
              <div className="relative h-[16px] bg-[#B60A06] rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                  style={{ width: `${element.gtr}%` }}
                >
                </div>
              </div>
            </div>
          ))}
          
          {areaData.notes && (
            <div className="mt-2 mb-4 bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-semibold mb-1">Notes:</h4>
              <p className="text-sm text-gray-600">{areaData.notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
