import "./Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "January",
      amount: 2400,
    },
    {
      name: "February",
      amount: 2210,
    },
    {
      name: "March",
      amount: 2290,
    },
    {
      name: "April",
      amount: 2000,
    },
    {
      name: "May",
      amount: 2181,
    },
    {
      name: "June",
      amount: 2500,
    },
  ];
  return (
    <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="totalChart" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EFA939" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#EFA939" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#EFA939"
            fillOpacity={1}
            fill="url(#totalChart)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
