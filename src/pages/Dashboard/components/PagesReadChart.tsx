import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { getPageReadPerMonth } from "../../../utils/getPageReadPerMonth";

const data = getPageReadPerMonth();

function PagesReadChart() {
  return (
    <div className="bg-white rounded-[12px] border border-[#E5E8EB] p-6 w-full max-w-[960px] mx-auto">
      <div className="mb-4">
        <div className="text-[#0D141C] text-base font-medium">
          Pages Read Per Month
        </div>
        <div className="text-3xl font-bold text-[#0D141C]">
          {data.reduce((sum, m) => sum + m.pages, 0)}
        </div>
        <div className="text-sm text-blue-500">
          Last 12 Months{" "}
          <span className="text-green-600 font-semibold">+12%</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid stroke="#E5E8EB" strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pages"
            stroke="#3B5BA9"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PagesReadChart;
