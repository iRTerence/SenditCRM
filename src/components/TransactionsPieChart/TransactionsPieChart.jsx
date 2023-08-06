import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import "./TransactionsPieChart.scss";

const data = [
  { name: "Category 1", value: 250 },
  { name: "Category 2", value: 200 },
  { name: "Category 3", value: 150 },
  { name: "Category 4", value: 100 },
];

const colors = ["#5523D2", "#7ADEA7", "#FAC800", "#FF6C4B"];

const TransactionsPieChart = () => {
  return (
    <div>
      <h2 className="transaction-chart-title">Transactions</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TransactionsPieChart;
