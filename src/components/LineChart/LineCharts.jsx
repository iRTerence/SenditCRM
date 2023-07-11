import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", value1: 20, value2: 15 },
  { name: "Feb", value1: 25, value2: 18 },
  { name: "Mar", value1: 30, value2: 20 },
  { name: "Apr", value1: 35, value2: 18 },
  { name: "May", value1: 20, value2: 27 },
  { name: "Jun", value1: 15, value2: 5 },
  { name: "Jul", value1: 50, value2: 30 },
];

function LineCharts() {
  return (
    <div>
      <div
        style={{
          color: "#3A3A3A",
          fontFamily: "Nunito",
          fontSize: "17px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "26.4px",
          paddingTop: "10px",
          paddingLeft: "25px",
        }}
      >
        Activities
      </div>
      <ResponsiveContainer width="99%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid stroke="#F3F4F6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Line
            type="monotone"
            dataKey="value1"
            stroke="#FAC800"
            strokeWidth={3.273}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#5523D2"
            strokeWidth={3.273}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineCharts;
