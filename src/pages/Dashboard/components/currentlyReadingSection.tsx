import { getIncompleteBooks } from "../../../utils/getIncompleteBooks";
import bookData from "../../../assets/data/bookData.json";
import CurrentlyReadingBox from "./CurrentlyReadingBox";

function CurrentlyReadingSection() {
  const books = getIncompleteBooks(bookData);
  return (
    <div className="px-[16px] py-[8px] w-full min-h-[60px]">
      <CurrentlyReadingBox books={books} />
    </div>
  );
}

export default CurrentlyReadingSection;
