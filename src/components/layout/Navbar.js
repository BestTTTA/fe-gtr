"use client";
import Image from "next/image";
import { NavbarContext } from "@/context/NavbarProvider";
import { useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const { setIsOpen } = useContext(NavbarContext);
  const pathname = usePathname();
  const [viewMode, setViewMode] = useState("M"); // D, W, M, Y for Day, Week, Month, Year
  const [dateRange, setDateRange] = useState({
    fromDate: "",
    toDate: ""
  });

  // Initialize date range on component mount
  useEffect(() => {
    // Set default date range based on the initial view mode (Month)
    updateDateRangeForViewMode("M");
  }, []);

  // Format date for display (MM/DD/YYYY)
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  // Update date range based on view mode
  const updateDateRangeForViewMode = (mode) => {
    const today = new Date();
    let fromDate = new Date(today);
    
    // Set date range based on selected view mode
    switch(mode) {
      case 'D':
        // Just today
        break;
      case 'W':
        // Last 7 days
        fromDate.setDate(today.getDate() - 7);
        break;
      case 'M':
        // Last 30 days
        fromDate.setDate(today.getDate() - 30);
        break;
      case 'Y':
        // Last 365 days
        fromDate.setDate(today.getDate() - 365);
        break;
      default:
        // Default to last 30 days
        fromDate.setDate(today.getDate() - 30);
    }
    
    setDateRange({
      fromDate: fromDate.toISOString().split('T')[0],
      toDate: today.toISOString().split('T')[0]
    });
  };

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    updateDateRangeForViewMode(mode);
  };

  // Handle date change
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="sticky top-0 z-20 md:hidden w-full bg-white drop-shadow-sm shadow-[0px_-3px_8px_rgba(0,0,0,0.5)] py-[16px] px-[16px]">
        <div
          className={`flex flex-col ${pathname != "/" ? "h-fit" : "h-[94px]"
            } md:h-[88px]`}
        >
          <div className="w-full flex justify-between">
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
            <div className="flex">
              <div className="w-[48px] h-[48px] flex items-center justify-center">
                <Image
                  src="/users_img/Icon.svg"
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
          </div>
          {pathname != "/" ? (
            ""
          ) : (
            <div className="flex gap-1 w-full items-center justify-center h-[48px]">
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  {formatDateForDisplay(dateRange.fromDate)}
                </div>
              </div>
              <div className="text-[14px]">to</div>
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  {formatDateForDisplay(dateRange.toDate)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden md:flex w-full items-center gap-8 bg-white drop-shadow-sm shadow-[0px_-3px_8px_rgba(0,0,0,0.5)] py-[16px] px-[16px]">
        {/* Area Deep Dive Layout */}
        {pathname === "/your-gtr/area-deep-dive" && (
          <>
            <div className="flex gap-1 w-fit items-center justify-center h-[48px]">
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  {formatDateForDisplay(dateRange.fromDate)}
                </div>
              </div>
              <div className="text-[14px]">to</div>
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
                  {formatDateForDisplay(dateRange.toDate)}
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <input
                placeholder="E.g. What activities could inspire me? What do I prioritize too much?"
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
            <button className="flex self-end items-center p-4 rounded-[22px] bg-[#FF9933] text-[12px] font-medium px-5">
              New Log
            </button>
          </>
        )}

        {/* Dashboard Layout */}
        {pathname === "/your-gtr/dashboard" && (
          <>
            <div className="flex items-center">
              <div className="flex rounded-full overflow-hidden">
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'D' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'} rounded-l-full`}
                  onClick={() => handleViewModeChange('D')}
                >
                  D
                </button>
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'W' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'}`}
                  onClick={() => handleViewModeChange('W')}
                >
                  W
                </button>
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'M' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'}`}
                  onClick={() => handleViewModeChange('M')}
                >
                  M
                </button>
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'Y' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'} rounded-r-full`}
                  onClick={() => handleViewModeChange('Y')}
                >
                  Y
                </button>
              </div>
            </div>
            <div className="flex gap-1 w-fit items-center justify-center h-[48px]">
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <input 
                  type="date"
                  name="fromDate"
                  value={dateRange.fromDate}
                  onChange={handleDateChange}
                  className="w-[133px] h-[22px] bg-transparent text-center text-[14px]"
                />
              </div>
              <div className="text-[14px]">to</div>
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <input 
                  type="date"
                  name="toDate"
                  value={dateRange.toDate}
                  onChange={handleDateChange}
                  className="w-[133px] h-[22px] bg-transparent text-center text-[14px]"
                />
              </div>
            </div>
          </>
        )}

        {/* Insights Layout */}
        {(pathname === "/your-gtr/self" || pathname.includes("/insights/")) && (
          <>
            <div className="flex items-center">
              <div className="flex rounded-full overflow-hidden">
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'D' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'} rounded-l-full`}
                  onClick={() => handleViewModeChange('D')}
                >
                  D
                </button>
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'W' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'}`}
                  onClick={() => handleViewModeChange('W')}
                >
                  W
                </button>
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'M' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'}`}
                  onClick={() => handleViewModeChange('M')}
                >
                  M
                </button>
                <button
                  className={`px-4 py-1 text-sm ${viewMode === 'Y' ? 'bg-[#ff9933] text-black' : 'bg-[#c1c6da] text-white'} rounded-r-full`}
                  onClick={() => handleViewModeChange('Y')}
                >
                  Y
                </button>
              </div>
            </div>
            <div className="flex gap-1 w-fit items-center justify-center h-[48px]">
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <input 
                  type="date"
                  name="fromDate"
                  value={dateRange.fromDate}
                  onChange={handleDateChange}
                  className="w-[133px] h-[22px] bg-transparent text-center text-[14px]"
                />
              </div>
              <div className="text-[14px]">to</div>
              <div className="bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px]">
                <input 
                  type="date"
                  name="toDate"
                  value={dateRange.toDate}
                  onChange={handleDateChange}
                  className="w-[133px] h-[22px] bg-transparent text-center text-[14px]"
                />
              </div>
            </div>
          </>
        )}

        {/* Default Layout for other pages */}
        {pathname !== "/your-gtr/area-deep-dive" && 
         pathname !== "/dashboard" && 
         !pathname.includes("/insights") && (
          <div className="w-full flex justify-end">
            <button className="flex self-end items-center p-4 rounded-[22px] bg-[#FF9933] text-[12px] font-medium px-5">
              Start New Assessment
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
