import StatBox from "./StatBox";
function StatSection() {
  return (
    <div className="flex flex-row gap-[8px] p-[16px] w-full">
      <StatBox title="Total Books Read" value={5} />
      <StatBox title="Total Pages Read" value={2515} />
    </div>
  );
}

export default StatSection;
