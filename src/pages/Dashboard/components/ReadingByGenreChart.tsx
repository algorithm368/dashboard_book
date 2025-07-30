import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function TopLineLabel({
  x = 0,
  y = 0,
  width = 0,
}: Readonly<{
  x?: number | string;
  y?: number | string;
  width?: number | string;
}>) {
  const nx = Number(x) || 0;
  const ny = Number(y) || 0;
  const nwidth = Number(width) || 0;
  return (
    <line
      x1={nx}
      x2={nx + nwidth}
      y1={ny}
      y2={ny}
      stroke="#333"
      strokeWidth={2}
    />
  );
}

interface GenreData {
  genre: string;
  count: number;
}

function ReadingByGenreChart({ data }: Readonly<{ data: GenreData[] }>) {
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
