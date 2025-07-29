interface StatBoxProps {
  readonly title: string;
  readonly value: number | string;
}

function StatBox({ title, value }: StatBoxProps) {
  return (
    <div className="bg-[#E8EDF5] rounded-[8px] flex-1 min-w-[200px] min-h-[110px] flex flex-col justify-center p-4 sm:p-6 gap-2">
      <span className="text-base font-medium text-[#0D141C] mb-1">{title}</span>
      <span className="text-2xl font-bold text-[#0D141C]">{value}</span>
    </div>
  );
}

export default StatBox;
