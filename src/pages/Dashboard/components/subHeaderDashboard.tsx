interface SubHeaderDashboardProps {
  readonly title: string;
}

function SubHeaderDashboard({ title }: SubHeaderDashboardProps) {
  return (
    <div className="w-[960px] min-h-[60px] px-[20px] py-[16px]">
      <span className="text-[24px] font-bold text-[#0D141C]">
        {title}
      </span>
    </div>
  );
}

export default SubHeaderDashboard;