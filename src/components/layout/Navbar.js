"use client";
import Image from "next/image";
import { NavbarContext } from "@/context/NavbarProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";
function Navbar() {
  const { setIsOpen } = useContext(NavbarContext);
  const pathname = usePathname();

  return (
    <>
      <div className=" md:hidden w-full bg-white drop-shadow-sm shadow-[0px_-3px_8px_rgba(0,0,0,0.5)] py-[16px] px-[16px]">
        <div
          className={`flex flex-col ${
            pathname != "/" ? "h-fit" : "h-[94px]"
          } md:h-[88px]`}
        >
          <div className="w-full  flex  justify-between">
            <div
              className="w-[48px] h-[48px] flex items-center justify-center"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src="/navbar-icons/menu-icon.png"
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
            <div className="w-[48px] h-[48px] flex items-center justify-center">
              <Image
                src="/navbar-icons/menu-plus-icon.png"
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
          </div>
          {pathname != "/" ? (
            ""
          ) : (
            <div className="flex gap-1 w-full items-center justify-center  h-[48px]">
              <div className="bg-[#F0F2F5] px-[16px] py-[8px]  w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  05/01/2025
                </div>
              </div>
              <div className="text-[14px]">to</div>
              <div className="bg-[#F0F2F5] px-[16px] py-[8px]  w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  05/03/2025
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex w-full items-center gap-8 bg-white drop-shadow-sm shadow-[0px_-3px_8px_rgba(0,0,0,0.5)] py-[16px] px-[16px]">
        {pathname != "/" ? (
          ""
        ) : (
          <>
            <div className="flex gap-1 w-fit items-center justify-center  h-[48px]">
              <div className="bg-[#F0F2F5] px-[16px] py-[8px]  w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  05/01/2025
                </div>
              </div>
              <div className="text-[14px]">to</div>
              <div className="bg-[#F0F2F5] px-[16px] py-[8px]  w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  05/03/2025
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <input
                placeholder="Hinted search text"
                className="flex bg-gray-200 w-full p-4 pr-12 rounded-full"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Image
                  src="/navbar-icons/magnify-icon.png"
                  width={42}
                  height={42}
                  alt="Search icon"
                />
              </div>
            </div>
          </>
        )}

        {pathname != "/" ? (
          <div className="w-full flex justify-end">
            <button className="flex self-end items-center p-4 rounded-[22px] bg-[#FF9933] text-[12px] font-medium px-5">
              Start New Assessment
            </button>
          </div>
        ) : (
          <button className="flex self-end items-center p-4 rounded-[22px] bg-[#FF9933] text-[12px] font-medium px-5">
            New Log
          </button>
        )}
      </div>
    </>
  );
}

export default Navbar;
