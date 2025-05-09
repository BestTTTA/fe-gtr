import Image from "next/image";
import { useState } from "react";

export default function SelfBoxDesk({ areaData }) {
  const [showElements, setShowElements] = useState(false);
  
  // Get the self GTR score from the passed data
  const selfScore = areaData?.gtr ? parseFloat(areaData.gtr).toFixed(1) : "0.0";

  // Function to format element name for display
  const formatElementName = (name) => {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="hidden md:block">
      <div className="flex items-center mt-4">
        <span className="text-gray-700 text-[14px] text-nowrap p-4">Self</span>
        <div className="w-full flex bg-[#B60A06] rounded-full h-[28px]">
          <div 
            className="bg-[#C6B06A] rounded-l-full flex items-center justify-end"
            style={{ width: `${selfScore}%` }}
          >
            <span className="text-white font-medium text-sm px-2">
              {selfScore}%
            </span>
          </div>
        </div>
        <div className="flex gap-2 ml-2">
          <button className="p-1" onClick={() => setShowElements(!showElements)}>
            <Image
              src="/area-deep-dive/magnify-icon.svg"
              width={40}
              height={40}
              alt="Magnify icon"
            />
          </button>
        </div>
      </div>

      {/* Elements section */}
      {showElements && areaData?.elements && (
        <div className="mt-4 ml-12 border-l-2 border-gray-200 pl-6">
          <div className="grid grid-cols-1 gap-4">
            {areaData.elements.map((element, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center mb-1">
                  {element.isHigh && (
                    <span className="mr-2 text-blue-500">●</span>
                  )}
                  {element.isLow && (
                    <span className="mr-2 text-red-500">●</span>
                  )}
                  <span className="text-gray-700 w-1/4">
                    {formatElementName(element.element)}
                  </span>
                  <div className="w-3/4 relative h-[20px] bg-[#B60A06] rounded-full overflow-hidden ml-4">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full flex items-center justify-end"
                      style={{ width: `${element.gtr}%` }}
                    >
                      <span className="absolute text-white font-medium text-xs px-2">
                        {element.gtr}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {areaData.notes && (
            <div className="mt-4 mb-4 bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-semibold mb-1">Notes:</h4>
              <p className="text-sm text-gray-600">{areaData.notes}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
