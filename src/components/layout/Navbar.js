"use client";
import Image from "next/image";
import { NavbarContext } from "@/context/NavbarProvider";
import { useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const { setIsOpen } = useContext(NavbarContext);
  const pathname = usePathname();
  const [viewMode, setViewMode] = useState("M"); // D, W, M, Y for Day, Week, Month, Year
  const [dateRange, setDateRange] = useState({
    fromDate: "",
    toDate: "",
  });
  const [isSelectingDate, setIsSelectingDate] = useState(false);
  const [selectingField, setSelectingField] = useState("fromDate"); // "fromDate" or "toDate"
  const datePickerRef = useRef(null);
  const fromDateRef = useRef(null);
  const toDateRef = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerPosition, setDatePickerPosition] = useState({
    top: 0,
    left: 0,
  });
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(
    new Date().getMonth()
  );
  const [currentCalendarYear, setCurrentCalendarYear] = useState(
    new Date().getFullYear()
  );

  // Initialize date range on component mount
  useEffect(() => {
    // Set default date range based on the initial view mode (Month)
    updateDateRangeForViewMode("M");
  }, []);

  // Format date for display (MM/DD/YYYY)
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  // Update date range based on view mode
  const updateDateRangeForViewMode = (mode) => {
    const today = new Date();
    let fromDate = new Date(today);

    // Set date range based on selected view mode
    switch (mode) {
      case "D":
        // Just today
        break;
      case "W":
        // Last 7 days
        fromDate.setDate(today.getDate() - 7);
        break;
      case "M":
        // Last 30 days
        fromDate.setDate(today.getDate() - 30);
        break;
      case "Y":
        // Last 365 days
        fromDate.setDate(today.getDate() - 365);
        break;
      default:
        // Default to last 30 days
        fromDate.setDate(today.getDate() - 30);
    }

    setDateRange({
      fromDate: fromDate.toISOString().split("T")[0],
      toDate: today.toISOString().split("T")[0],
    });
  };

  // Handle view mode change
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    updateDateRangeForViewMode(mode);
  };

  // Handle opening the custom date picker
  const handleOpenDatePicker = (field) => {
    setSelectingField(field);
    setShowDatePicker(true);
  };

  // Handle date selection in the custom date picker
  const handleDateClick = (date) => {
    if (selectingField === "fromDate") {
      setDateRange((prev) => ({ ...prev, fromDate: date }));
      setSelectingField("toDate");
    } else {
      // If selecting end date, ensure it's not before start date
      if (date < dateRange.fromDate) {
        setDateRange((prev) => ({ fromDate: date, toDate: prev.fromDate }));
      } else {
        setDateRange((prev) => ({ ...prev, toDate: date }));
      }
      setShowDatePicker(false);
    }
  };

  // Close date picker
  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  // Navigate to previous month
  const goToPrevMonth = () => {
    if (currentCalendarMonth === 0) {
      setCurrentCalendarMonth(11);
      setCurrentCalendarYear(currentCalendarYear - 1);
    } else {
      setCurrentCalendarMonth(currentCalendarMonth - 1);
    }
  };

  // Navigate to next month
  const goToNextMonth = () => {
    if (currentCalendarMonth === 11) {
      setCurrentCalendarMonth(0);
      setCurrentCalendarYear(currentCalendarYear + 1);
    } else {
      setCurrentCalendarMonth(currentCalendarMonth + 1);
    }
  };

  // Get month name
  const getMonthName = (month) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  };

  // Generate calendar for the date picker
  const generateCalendar = () => {
    const currentMonth = currentCalendarMonth;
    const currentYear = currentCalendarYear;

    // Start with first day of current month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDay.getDay();

    // Get days in month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Generate calendar grid
    const calendarDays = [];

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }

    // Add cells for each day
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      const isInRange = date >= dateRange.fromDate && date <= dateRange.toDate;
      const isStartDate = date === dateRange.fromDate;
      const isEndDate = date === dateRange.toDate;

      calendarDays.push(
        <div
          key={`day-${day}`}
          onClick={() => handleDateClick(date)}
          className={`w-8 h-8 flex items-center justify-center cursor-pointer text-sm transition-colors
            ${isInRange && !isStartDate && !isEndDate ? "bg-orange-100" : ""}
            ${
              isStartDate || isEndDate
                ? "bg-[#FF9933] text-white rounded-full"
                : "rounded-full"
            }
            ${
              date === new Date().toISOString().split("T")[0] &&
              !isStartDate &&
              !isEndDate
                ? "border border-gray-400"
                : ""
            }
            hover:bg-gray-200 hover:rounded-full`}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  // Custom Date Picker Component
  const CustomDatePicker = () => {
    if (!showDatePicker) return null;

    // Years for dropdown (10 years before and after current year)
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
      years.push(year);
    }

    // Months for dropdown
    const months = [
      { value: 0, label: "January" },
      { value: 1, label: "February" },
      { value: 2, label: "March" },
      { value: 3, label: "April" },
      { value: 4, label: "May" },
      { value: 5, label: "June" },
      { value: 6, label: "July" },
      { value: 7, label: "August" },
      { value: 8, label: "September" },
      { value: 9, label: "October" },
      { value: 10, label: "November" },
      { value: 11, label: "December" },
    ];

    const handleMonthChange = (e) => {
      setCurrentCalendarMonth(parseInt(e.target.value));
    };

    const handleYearChange = (e) => {
      setCurrentCalendarYear(parseInt(e.target.value));
    };

    return (
      <div
        className="absolute top-full mt-2 z-[100] bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-[290px]"
        style={{
          left: selectingField === "fromDate" ? "0" : "auto",
          right: selectingField === "toDate" ? "0" : "auto",
        }}
        ref={datePickerRef}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium flex items-center gap-2">
            <select
              value={currentCalendarMonth}
              onChange={handleMonthChange}
              className="bg-gray-100 rounded px-2 py-1 text-sm"
            >
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
            <select
              value={currentCalendarYear}
              onChange={handleYearChange}
              className="bg-gray-100 rounded px-2 py-1 text-sm"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <button
              onClick={goToPrevMonth}
              className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <span>←</span>
            </button>
            <button
              onClick={goToNextMonth}
              className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <span>→</span>
            </button>
            <button
              onClick={closeDatePicker}
              className="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <span>×</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-7 gap-1 mb-2 text-gray-600">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="w-8 h-8 flex items-center justify-center font-medium text-xs"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {generateCalendar()}
          </div>
        </div>

        <div className="mt-2 text-xs text-gray-500 text-center italic">
          {selectingField === "fromDate"
            ? "Click to select start date"
            : "Click to select end date"}
        </div>
      </div>
    );
  };

  const renderDateRangeDisplay = () => (
    <div className="flex gap-1 w-fit items-center justify-center h-[48px] relative">
      <div
        ref={fromDateRef}
        className={`bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px] cursor-pointer
          ${
            selectingField === "fromDate" && isSelectingDate
              ? "border-2 border-[#FF9933]"
              : ""
          }`}
        onClick={() => handleOpenDatePicker("fromDate")}
      >
        <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
          {formatDateForDisplay(dateRange.fromDate)}
        </div>
      </div>
      <div className="text-[14px]">to</div>
      <div
        ref={toDateRef}
        className={`bg-[#F0F2F5] px-[16px] py-[8px] w-fit rounded-[16px] cursor-pointer
          ${
            selectingField === "toDate" && isSelectingDate
              ? "border-2 border-[#FF9933]"
              : ""
          }`}
        onClick={() => handleOpenDatePicker("toDate")}
      >
        <div className="flex w-[133px] h-[22px] items-center justify-center text-[14px]">
          {formatDateForDisplay(dateRange.toDate)}
        </div>
      </div>

      {showDatePicker && <CustomDatePicker />}
    </div>
  );

  // Close the date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [datePickerRef]);

  return (
    <div className="z-50">
      <div className="sticky top-0 md:hidden w-full bg-white drop-shadow-sm shadow-[0px_-3px_8px_rgba(0,0,0,0.5)] py-[16px] px-[16px]">
        <div
          className={`flex flex-col ${
            pathname != "/" ? "h-fit" : "h-[94px]"
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
          {pathname != "/" ? "" : renderDateRangeDisplay()}
        </div>
      </div>

      <div className="hidden md:flex w-full items-center gap-8 bg-white drop-shadow-sm shadow-[0px_-3px_8px_rgba(0,0,0,0.5)] py-[16px] px-[16px]">
        {/* Area Deep Dive Layout */}
        {pathname === "/your-gtr/area-deep-dive" && (
          <>
            {renderDateRangeDisplay()}
            <div className="relative flex-1">
              <input
                placeholder="E.g. What activities could inspire me? What do I prioritize too much?"
                className="flex bg-gray-200 w-full p-4 pr-12 rounded-full"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <Image
                  src="/navbar-icons/arrow-up-icon.png"
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
                  className={`px-4 py-1 text-sm ${
                    viewMode === "D"
                      ? "bg-[#ff9933] text-black"
                      : "bg-[#c1c6da] text-white"
                  } rounded-l-full`}
                  onClick={() => handleViewModeChange("D")}
                >
                  D
                </button>
                <button
                  className={`px-4 py-1 text-sm ${
                    viewMode === "W"
                      ? "bg-[#ff9933] text-black"
                      : "bg-[#c1c6da] text-white"
                  }`}
                  onClick={() => handleViewModeChange("W")}
                >
                  W
                </button>
                <button
                  className={`px-4 py-1 text-sm ${
                    viewMode === "M"
                      ? "bg-[#ff9933] text-black"
                      : "bg-[#c1c6da] text-white"
                  }`}
                  onClick={() => handleViewModeChange("M")}
                >
                  M
                </button>
                <button
                  className={`px-4 py-1 text-sm ${
                    viewMode === "Y"
                      ? "bg-[#ff9933] text-black"
                      : "bg-[#c1c6da] text-white"
                  } rounded-r-full`}
                  onClick={() => handleViewModeChange("Y")}
                >
                  Y
                </button>
              </div>
            </div>
            {renderDateRangeDisplay()}
          </>
        )}

        {/* Insights Layout */}
        {(pathname === "/your-gtr/insights" || pathname.includes("/insights/")) && (
          <>
          <div className="flex items-center">
            <div className="flex rounded-full overflow-hidden">
              <button
                className={`px-4 py-1 text-sm ${
                  viewMode === "D"
                    ? "bg-[#ff9933] text-black"
                    : "bg-[#c1c6da] text-white"
                } rounded-l-full`}
                onClick={() => handleViewModeChange("D")}
              >
                D
              </button>
              <button
                className={`px-4 py-1 text-sm ${
                  viewMode === "W"
                    ? "bg-[#ff9933] text-black"
                    : "bg-[#c1c6da] text-white"
                }`}
                onClick={() => handleViewModeChange("W")}
              >
                W
              </button>
              <button
                className={`px-4 py-1 text-sm ${
                  viewMode === "M"
                    ? "bg-[#ff9933] text-black"
                    : "bg-[#c1c6da] text-white"
                }`}
                onClick={() => handleViewModeChange("M")}
              >
                M
              </button>
              <button
                className={`px-4 py-1 text-sm ${
                  viewMode === "Y"
                    ? "bg-[#ff9933] text-black"
                    : "bg-[#c1c6da] text-white"
                } rounded-r-full`}
                onClick={() => handleViewModeChange("Y")}
              >
                Y
              </button>
            </div>
          </div>
          {renderDateRangeDisplay()}
        </>
        )}

        <div className="w-full flex justify-end">
          <button className="flex self-end items-center p-4 rounded-[22px] bg-[#FF9933] text-[12px] font-medium px-5">
            Start New Assessment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
