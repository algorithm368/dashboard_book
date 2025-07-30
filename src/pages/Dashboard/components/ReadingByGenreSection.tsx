import ReadingByGenreChart from "./ReadingByGenreChart";
import bookData from "../../../assets/data/bookData.json"
import { getGenreCounts } from "../../../utils/getGenreCounts";

const genreCounts = getGenreCounts(bookData);
const genres = Object.keys(genreCounts);
const counts = Object.values(genreCounts); // TypeScript infers number[]
const totalGenres = genres.length;

const chartData = genres.map((genre, index) => ({
  genre,
  count: counts[index],
}));


function ReadingByGenreSection() {
  return (
    <div className="w-full gap-[16px] px-[16px] py-[24px]">
      <div className="p-[24px] gap-[8px] align-left border border-[#CFDBE8] rounded-[8px]">
        <div className="text-[#0D141C] text-[16px] font-medium line-height-[24px] letter-spacing-[0px]">
          Book by Genre
        </div>
        <div className="text-[#0D141C] text-[32px] font-bold line-height-[40px] letter-spacing-[0px]">
          {totalGenres} Genres
        </div>
        <div className="text-[#4A739C] text-[16px] line-height-[24px]">
          All Time{" "}
          <span className="text-green-600 font-semibold">+10%</span>
        </div>
        <ReadingByGenreChart data={chartData} />
      </div>
    </div>
  );
}


export default ReadingByGenreSection;
