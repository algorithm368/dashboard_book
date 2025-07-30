import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

function TopLineLabel({ x, y, width }) {
  // Draw a horizontal line at the top of each bar
  return (
    <line x1={x} x2={x + width} y1={y} y2={y} stroke="#333" strokeWidth={2} />
  );
}

function ReadingByGenreChart({ data }) {
  return (
    <div className="gap-[24px] px-[12px] py-[0px]">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="genre" className="font-bold" />
          <Tooltip />
          <Bar dataKey="count" fill="#E8EDF5">
            <LabelList
              dataKey="count"
              content={TopLineLabel}
              fill="#757575"
              fontWeight={2}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ReadingByGenreChart;
