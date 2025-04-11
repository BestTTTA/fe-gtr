"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { NavbarContext } from "@/context/NavbarProvider";

function Menu() {
  const pathname = usePathname();
  let { isOpen, setIsOpen } = useContext(NavbarContext);

  return (
    <>
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed z-50 min-h-screen text-nowrap top-0 left-0 md:static transition-all duration-300 flex flex-col bg-[#0C2955] overflow-hidden ${
          isOpen ? "w-[240px] p-4 md:p-4" : "w-0 md:w-[240px]"
        }`}
      >
        {isOpen && (
          <>
            {/* Profile */}
            <div className="flex items-center flex-col justify-between px-[16px]">
              <div className="flex w-full items-center justify-between">
                <a href="/users">
                  <div className="flex items-center gap-[8px] py-[16px]">
                    <Image
                      src="/navbar-icons/profilepic.png"
                      width={48}
                      height={48}
                      className="rounded-full"
                      alt="Profile"
                    />
                    <p className="text-sm font-semibold text-white">Chris W.</p>
                  </div>
                </a>
                <Image
                  src="/navbar-icons/edit-icon.png"
                  width={16}
                  height={16}
                  className="rounded-full"
                  alt="Edit icon"
                />
              </div>

              {/* Progress Bar */}
              <div className="flex w-full items-center justify-between">
                <div className="relative w-full h-[18px] bg-[#B60A06] rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[73.8%] bg-[#C6B06A] rounded-l-full border-r-2 border-[#0C2955] flex items-center justify-end pr-1 text-white text-[10.5px] font-medium">
                    73.8
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="pt-[32px] flex flex-col">
              <Link
                href="/your-gtr/dashboard"
                className={`flex py-[16px] pl-[16px] pr-[24px] items-center gap-3 text-sm leading-[22.4px] transition-all duration-200 ${
                  pathname === "/your-gtr/dashboard"
                    ? "text-black bg-[#D6E4FF] rounded-[24px] font-medium"
                    : "text-[#C1C6DA]"
                }`}
              >
                <Image
                  src="/navbar-icons/function-line.png"
                  width={24}
                  height={24}
                  alt="Dashboard"
                  className={
                    pathname === "/your-gtr/dashboard" ? "filter invert" : ""
                  }
                />
                Dashboard
              </Link>

              <div className="w-full flex justify-center">
                <div className="w-[176px] h-[1px] bg-[#788499]" />
              </div>

              <div className="w-full text-white py-[18px] flex pl-[16px] pr-[16px]">
                <h1 className="text-[14px]">You GTR</h1>
              </div>

              {[
                {
                  href: "/your-gtr/area-deep-dive",
                  icon: "area-icon.png",
                  label: "Area Deep Dive",
                },
                {
                  href: "/your-gtr/self",
                  icon: "self-icon.png",
                  label: "Self",
                },
                {
                  href: "/your-gtr/social",
                  icon: "social-icon.png",
                  label: "Social",
                },
                {
                  href: "/your-gtr/actions",
                  icon: "action-icon.png",
                  label: "Actions",
                },
                {
                  href: "/your-gtr/obtainments",
                  icon: "obtainments-icon.png",
                  label: "Obtainments",
                },
                {
                  href: "/your-gtr/environment",
                  icon: "environment-icon.png",
                  label: "Environment",
                },
              ].map(({ href, icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex py-[16px] pl-[16px] pr-[24px] items-center gap-3 text-sm leading-[22.4px] transition-all duration-200 ${
                    pathname === href
                      ? "text-black bg-[#D6E4FF] rounded-[24px] font-medium"
                      : "text-[#C1C6DA]"
                  }`}
                >
                  <Image
                    src={`/navbar-icons/${icon}`}
                    width={24}
                    height={24}
                    alt={label}
                    className={pathname === href ? "filter invert" : ""}
                  />
                  {label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Menu;
