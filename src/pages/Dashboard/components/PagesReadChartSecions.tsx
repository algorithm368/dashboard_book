import LineChart from "./LineChart";
import { getPageReadPerMonth } from "../../../utils/getPageReadPerMonth";

const data = getPageReadPerMonth();

function PagesReadChartSection() {
  return (
    <div className="w-full gap-[16px] px-[16px] py-[24px]">
      <div className="gap-[8px] p-[24px] gap-[8px] bg-white rounded-[8px] border border-[#E5E8EB]">
        <div
          className="text-[#0D141C] text-[16px]
        font-medium line-height-[24px] letter-spacing-[0px] align-left"
        >
          Page Read Per Month
        </div>
        <div className="text-[#0D141C] font-bold text-[32px] line-height-[40px] align-left">
          {data.reduce((sum, m) => sum + m.pages, 0)}
        </div>
        <div className="text-[#4A739C] text-[16px] line-height-[24px] align-left">
          Last 12 Months{" "}
          <span className="text-green-600 font-semibold">+12%</span>
        </div>
        <LineChart data={data} />
      </div>
    </div>
  );
}

export default PagesReadChartSection;
