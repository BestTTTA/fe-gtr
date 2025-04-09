"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamically import the chart to avoid SSR issues
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
          formatter: function(value) {
            return value;
          }
        },
        tickPlacement: 'on',
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5, 
      },
      tooltip: {
        x: {
          formatter: function(value, opts) {
            return chartData.options.xaxis.categories[opts.dataPointIndex];
          }
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
        width="100%"
      />
    </div>
  );
};

export default ApexLineChart;