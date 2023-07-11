import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./BarCharts.scss";

function BarCharts() {
  const data = [
    { name: "Jan", value1: 400, value2: 200 },
    { name: "Feb", value1: 300, value2: 250 },
    { name: "Mar", value1: 500, value2: 350 },
    { name: "Apr", value1: 200, value2: 150 },
    { name: "May", value1: 600, value2: 450 },
    { name: "Jun", value1: 400, value2: 300 },
  ];

  return (
    <div className="chart-container">
      <h2 className="chart-title">Real-Time Transactions</h2>
      <ResponsiveContainer width="99%" height={400}>
        <BarChart data={data}>
          <CartesianGrid
            stroke="#FFFFFF"
            strokeDasharray="0"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" tick={{ fill: "#FFFFFF" }} />
          <YAxis tick={{ fill: "#FFFFFF" }} />
          <Tooltip />
          <Legend iconType="circle" />
          <Bar dataKey="value1" fill="#5523D2" name="Set 1" />
          <Bar dataKey="value2" fill="#FAC800" name="Set 2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
