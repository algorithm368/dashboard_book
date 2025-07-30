import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface LineChartProps {
  readonly data: readonly { month: string; year: number; pages: number }[];
}

function LineChart({ data }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RechartsLineChart data={data}>
        <CartesianGrid stroke="#E5E8EB" strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pages"
          stroke="#3B5BA9"
          strokeWidth={2}
          dot={false}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}

export default LineChart;
