"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Image from "next/image";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexLineChart = () => {
  const [chartData] = useState({
    series: [
      {
        name: "Series 1",
        data: [52.2, 56.1, 50.0, 48.7, 55.4, 73.8],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      colors: ["#C6B06A"],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        type: "category",
        categories: ["2/9", "16/9", "1/10", "15/10", "1/11", "Today 16/11"],
        labels: {
          formatter: function (value) {
            return value;
          },
        },
        tickPlacement: "on",
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
      },
      tooltip: {
        x: {
          formatter: function (value, opts) {
            return chartData.options.xaxis.categories[opts.dataPointIndex];
          },
        },
      },
    },
  });

  return (
    <>
      <div
        id="chart"
        className="md:hidden bg-white rounded-[40px] p-[16px] flex flex-col gap-[16px]"
      >
        <div className="p-[8px]">
          <h1 className="font-bold text-[18px]">Good Time Journey</h1>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={300}
            width="100%"
          />
        </div>
        <div className="p-[8px]">
          <h1 className="font-bold text-[18px] mb-[8px]">
            You’re currently on an upswing!
          </h1>
          <p className="text-[14px] font-normal mb-[32px]">
            In particular, the increased time you’ve spent with yourself shows a
            significant impact on this trend.
          </p>
        </div>
        <button className="border flex gap-[8px] items-center justify-center rounded-[24px] p-4 text-[#31363F]">
          <Image
            src="/dashboard/forecast-icon.png"
            width={22}
            height={22}
            alt="GTR Dashboard forecast-icon"
          />
          Show forecast
        </button>
        <button className="border flex gap-[8px] items-center justify-center rounded-[24px] p-4 text-[#31363F]">
          <Image
            src="/dashboard/pattern-detection-icon.png"
            width={22}
            height={22}
            alt="GTR Dashboard pattern-detection-icon"
          />
          Show pattern detection
        </button>
      </div>

      <div
        id="chart"
        className="hidden md:flex bg-white rounded-[40px] p-[16px] gap-[16px]"
      >
        <div className="w-full p-[8px]">
          <h1 className="font-bold text-[18px]">Good Time Journey</h1>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={350}
            width="100%"
          />
        </div>
        <div className="flex flex-col items-start justify-center p-[8px]">
          <h1 className="text-nowrap font-bold text-[18px] mb-[8px]">
            Static text to explain this section
          </h1>
          <p className=" text-nowrap text-[14px] font-normal mb-[32px]">
            Additional description
          </p>
        </div>
      </div>
    </>
  );
};

export default ApexLineChart;
