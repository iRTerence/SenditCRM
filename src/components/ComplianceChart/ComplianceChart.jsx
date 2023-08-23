import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import "./ComplianceChart.scss";

const data = [
  { name: "Category 1", value: 250 },
  { name: "Category 2", value: 200 },
  { name: "Category 3", value: 150 },
  { name: "Category 4", value: 100 },
];

const colors = ["#5D45DB", "#A698EB", "#D3CCF5", "#ECE9FF"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name, // Include the 'name' parameter
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7; // Adjust the radius
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  const labelOffset = 10; // Adjust the label offset

  const isLargest =
    data[index].value === Math.max(...data.map((item) => item.value));
  const nameTextColor = isLargest ? "#ECE9FF" : "#5D45DB";

  return (
    <>
      <text
        x={x}
        y={y - labelOffset} // Adjust vertical positioning for the name
        fill={nameTextColor}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {name}
      </text>
      {/* Background rectangle for the percentage */}
      <rect
        x={x - 18} // Adjust the positioning of the rectangle
        y={y} // Adjust the positioning of the rectangle
        width={36} // Adjust the width of the rectangle
        height={18} // Adjust the height of the rectangle
        fill="#ECE9FF" // Background color
        rx={5} // Rounded corners
        ry={5} // Rounded corners
      />
      <text
        x={x}
        y={y + labelOffset} // Adjust vertical positioning for the percentage
        fill="#5D45DB" // Text color
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </>
  );
};

const ComplianceChart = ({ title }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          {/* Adding a smaller Pie for the center circle */}
          <Pie
            data={[{ value: 1 }]} // Just one data point to render the circle
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={60} // Adjust the radius of the center circle as needed
            fill="#fff" // You can change the color of the circle as needed
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          color: "#3A3A3A",
          textAlign: "center",
          fontFamily: "Nunito",
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "33.6px",
          marginBottom: "20px", // Adjust margin as needed
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default ComplianceChart;
