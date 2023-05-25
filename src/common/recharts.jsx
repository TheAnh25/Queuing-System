import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Recharts = () => {
  const data = [
    {
      name: "05",
      sl: 4000,
      amt: 2400,
    },
    {
      name: "12",
      sl: 3000,
      amt: 2210,
    },
    {
      name: "18",
      sl: 2000,
      amt: 2290,
    },
    {
      name: "25",
      sl: 2780,
      amt: 2000,
    },
  ];
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="95%">
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sl"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Recharts;
