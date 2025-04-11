import { useState } from "react";
import Image from "next/image";
function FourBoxMobile() {
  const [socialExpanded, setSocialExpanded] = useState(false);
  const [actionsExpanded, setActionsExpanded] = useState(false);
  const [obtainmentsExpanded, setObtainmentsExpanded] = useState(false);
  const [environmentExpanded, setEnvironmentExpanded] = useState(false);

  return (
    <div className="md:hidden">
      <div className="hover:bg-[#F0F2F5] focus:bg-[#F0F2F5] mt-8 rounded-[24px] p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Image
              src="/area-deep-dive/mental-icon.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/area-deep-dive/social-icon.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />

            <span className="text-gray-700">Social</span>
          </div>
          <div className="flex gap-2">
            <button className="p-1">
              <Image
                src="/area-deep-dive/magnify-icon.svg"
                width={40}
                height={30}
                alt="Picture of the author"
              />
            </button>
            <button
              className="p-1"
              onClick={() => setSocialExpanded(!socialExpanded)}
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
        {socialExpanded && (
          <>
            <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden mb-4">
              <div
                className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                style={{ width: "90.4%" }}
              >
                <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2">
                  90.4%
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Actions Category */}
      <div className="hover:bg-[#F0F2F5] focus:bg-[#F0F2F5] rounded-[24px] p-2">
        <div className="flex hover:bg-[#F0F2F5] justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Image
              src="/area-deep-dive/sense-icon.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/area-deep-dive/actions-icon.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />

            <span className="text-gray-700">Actions</span>
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
              onClick={() => setActionsExpanded(!actionsExpanded)}
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
        {actionsExpanded && (
          <>
            <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden mb-4">
              <div
                className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                style={{ width: "47.0%" }}
              >
                <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2">
                  47.0%
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Obtainments Category */}
      <div className=" hover:bg-[#F0F2F5] focus:bg-[#F0F2F5] rounded-[24px] p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Image
              src="/area-deep-dive/obtain-icon.svg"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <span className="text-gray-700">Obtainments</span>
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
              onClick={() => setObtainmentsExpanded(!obtainmentsExpanded)}
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
        {obtainmentsExpanded && (
          <>
            <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden mb-4">
              <div
                className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                style={{ width: "74.7%" }}
              >
                <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2">
                  74.7%
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Environment Category */}
      <div className=" hover:bg-[#F0F2F5] focus:bg-[#F0F2F5] rounded-[24px] p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Image
              src="/area-deep-dive/environment-icon.svg"
              width={25}
              height={25}
              alt="Picture of the author"
            />

            <span className="text-gray-700">Environment</span>
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
              onClick={() => setEnvironmentExpanded(!environmentExpanded)}
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
        {environmentExpanded && (
          <>
            <div className="relative h-[28px] bg-[#B60A06] rounded-full overflow-hidden mb-4">
              <div
                className="absolute left-0 top-0 h-full bg-[#C6B06A] rounded-l-full"
                style={{ width: "79.4%" }}
              >
                <span className="absolute right-2 text-white font-medium top-1/2 transform -translate-y-1/2">
                  79.4%
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FourBoxMobile;
