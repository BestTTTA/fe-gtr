import Image from "next/image";
import { useState } from "react";

export default function FiveBoxMobile({ socialData, actionsData, getsData, environmentData }) {
  const [selfExpanded, setSelfExpanded] = useState(true);
  const [socialExpanded, setSocialExpanded] = useState(true);
  const [actionsExpanded, setActionsExpanded] = useState(true);
  const [getsExpanded, setGetsExpanded] = useState(true);
  const [environmentExpanded, setEnvironmentExpanded] = useState(true);
  
  const [showSelfElements, setShowSelfElements] = useState(false);
  const [showSocialElements, setShowSocialElements] = useState(false);
  const [showActionsElements, setShowActionsElements] = useState(false);
  const [showGetsElements, setShowGetsElements] = useState(false);
  const [showEnvironmentElements, setShowEnvironmentElements] = useState(false);
  
  // Get scores from the passed data
  const selfScore = 77.5; // Default self score
  const socialScore = socialData?.gtr ? parseFloat(socialData.gtr).toFixed(1) : "0.0";
  const actionsScore = actionsData?.gtr ? parseFloat(actionsData.gtr).toFixed(1) : "0.0";
  const getsScore = getsData?.gtr ? parseFloat(getsData.gtr).toFixed(1) : "0.0";
  const environmentScore = environmentData?.gtr ? parseFloat(environmentData.gtr).toFixed(1) : "0.0";

  // Function to format element name for display
  const formatElementName = (name) => {
    if (typeof name !== 'string') return name;
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="md:hidden mt-8">
      {/* Self */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 text-[14px]">Self</span>
          <div className="flex gap-2">
            <button className="p-1" onClick={() => setShowSelfElements(!showSelfElements)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={40}
                height={40}
                alt="arrow-up icon"
              />
            </button>
          </div>
        </div>
        {selfExpanded && (
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
        
        {/* Self Elements */}
        {showSelfElements && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="text-gray-700">Self Acceptance</span>
                </div>
                <span className="text-gray-700 font-medium">24%</span>
              </div>
              <div className="relative h-[16px] bg-[#B60A06] rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                  style={{ width: `24%` }}
                >
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <span className="text-gray-700">Sense Of Purpose</span>
                </div>
                <span className="text-gray-700 font-medium">97%</span>
              </div>
              <div className="relative h-[16px] bg-[#B60A06] rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                  style={{ width: `97%` }}
                >
                </div>
              </div>
            </div>
            
            <div className="mt-2 mb-4 bg-gray-50 p-3 rounded-md">
              <h4 className="text-sm font-semibold mb-1">Notes:</h4>
              <p className="text-sm text-gray-600">Focus on self-acceptance to improve overall well-being.</p>
            </div>
          </div>
        )}
      </div>

      {/* Social */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 text-[14px]">Social</span>
          <div className="flex gap-2">
            <button className="p-1" onClick={() => setShowSocialElements(!showSocialElements)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={40}
                height={40}
                alt="arrow-up icon"
              />
            </button>
            {/* <button className="p-1" onClick={() => setSocialExpanded(!socialExpanded)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={25}
                height={25}
                alt="Arrow icon"
              />
            </button> */}
          </div>
        </div>
        {socialExpanded && (
          <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full flex items-center justify-end"
              style={{ width: `${socialScore}%` }}
            >
              <span className="absolute text-white font-medium text-sm px-2">
                {socialScore}%
              </span>
            </div>
          </div>
        )}
        
        {/* Social Elements */}
        {showSocialElements && socialData?.elements && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {socialData.elements.map((element, index) => (
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
            
            {/* {socialData.notes && (
              <div className="mt-2 mb-4 bg-gray-50 p-3 rounded-md">
                <h4 className="text-sm font-semibold mb-1">Notes:</h4>
                <p className="text-sm text-gray-600">{socialData.notes}</p>
              </div>
            )} */}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 text-[14px]">Actions</span>
          <div className="flex gap-2">
            <button className="p-1" onClick={() => setShowActionsElements(!showActionsElements)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={40}
                height={40}
                alt="arrow-up icon"
              />
            </button>
            {/* <button className="p-1" onClick={() => setActionsExpanded(!actionsExpanded)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={25}
                height={25}
                alt="Arrow icon"
              />
            </button> */}
          </div>
        </div>
        {actionsExpanded && (
          <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full flex items-center justify-end"
              style={{ width: `${actionsScore}%` }}
            >
              <span className="absolute text-white font-medium text-sm px-2">
                {actionsScore}%
              </span>
            </div>
          </div>
        )}
        
        {/* Actions Elements */}
        {showActionsElements && actionsData?.elements && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {actionsData.elements.map((element, index) => (
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
{/*             
            {actionsData.notes && (
              <div className="mt-2 mb-4 bg-gray-50 p-3 rounded-md">
                <h4 className="text-sm font-semibold mb-1">Notes:</h4>
                <p className="text-sm text-gray-600">{actionsData.notes}</p>
              </div>
            )} */}
          </div>
        )}
      </div>

      {/* Gets (Obtainments) */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 text-[14px]">Obtainments</span>
          <div className="flex gap-2">
            <button className="p-1" onClick={() => setShowGetsElements(!showGetsElements)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={40}
                height={40}
                alt="arrow-up icon"
              />
            </button>
            {/* <button className="p-1" onClick={() => setGetsExpanded(!getsExpanded)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={25}
                height={25}
                alt="Arrow icon"
              />
            </button> */}
          </div>
        </div>
        {getsExpanded && (
          <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full flex items-center justify-end"
              style={{ width: `${getsScore}%` }}
            >
              <span className="absolute text-white font-medium text-sm px-2">
                {getsScore}%
              </span>
            </div>
          </div>
        )}
        
        {/* Gets Elements */}
        {showGetsElements && getsData?.elements && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {getsData.elements.map((element, index) => (
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
{/*             
            {getsData.notes && (
              <div className="mt-2 mb-4 bg-gray-50 p-3 rounded-md">
                <h4 className="text-sm font-semibold mb-1">Notes:</h4>
                <p className="text-sm text-gray-600">{getsData.notes}</p>
              </div>
            )} */}
          </div>
        )}
      </div>

      {/* Environment */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700 text-[14px]">Environment</span>
          <div className="flex gap-2">
            <button className="p-1" onClick={() => setShowEnvironmentElements(!showEnvironmentElements)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={40}
                height={40}
                alt="arrow-up icon"
              />
            </button>
            {/* <button className="p-1" onClick={() => setEnvironmentExpanded(!environmentExpanded)}>
              <Image
                src="/area-deep-dive/arrow-up-icon.svg"
                width={25}
                height={25}
                alt="Arrow icon"
              />
            </button> */}
          </div>
        </div>
        {environmentExpanded && (
          <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full flex items-center justify-end"
              style={{ width: `${environmentScore}%` }}
            >
              <span className="absolute text-white font-medium text-sm px-2">
                {environmentScore}%
              </span>
            </div>
          </div>
        )}
        
        {/* Environment Elements */}
        {showEnvironmentElements && environmentData?.elements && (
          <div className="mt-4 pl-4 border-l-2 border-gray-200">
            {environmentData.elements.map((element, index) => (
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
{/*             
            {environmentData.notes && (
              <div className="mt-2 mb-4 bg-gray-50 p-3 rounded-md">
                <h4 className="text-sm font-semibold mb-1">Notes:</h4>
                <p className="text-sm text-gray-600">{environmentData.notes}</p>
              </div>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}
