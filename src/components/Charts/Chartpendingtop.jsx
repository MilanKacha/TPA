import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const HorizontalBarChartTOP = ({ top5, mode }) => {
  const chartRef = useRef(null);

  const labels = top5
    ? top5.map((item, index) => String.fromCharCode(65 + index))
    : []; // Generate labels A, B, C, D, E

  const lablesDisplay = top5 ? top5.map((item) => item.CustName) : [];
  const data = top5 ? top5.map((item) => Math.abs(item.Amount)) : [];

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        align: "start",
        anchor: "end",
        formatter: (value, context) => `₹${value}`,
        color: "black",
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className=" w-full">
      {/* <h5 className={`text-center pt-1 ${
                    mode ? "text-[#000]" : "text-[#c2c2c2]"
                  }`}>Top 5 Pending TPA</h5> */}
      <Bar
        ref={chartRef}
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: function (context) {
                var gradient = context.chart.ctx.createLinearGradient(
                  0,
                  50,
                  100,
                  0
                );
                gradient.addColorStop(0, "#5c72ff");
                gradient.addColorStop(1, "#2eabee");
                return gradient;
              },
            },
          ],
        }}
        options={options}
      />
      <div className=" text-center mt-1 text-[12px]">
        {labels.map((label, index) => (
          <span key={index} className="">
            <span className="font-bold">{label} </span>- {lablesDisplay[index]}{" "}
            |{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalBarChartTOP;
