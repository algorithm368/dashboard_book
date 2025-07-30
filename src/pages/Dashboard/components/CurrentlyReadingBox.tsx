interface Book {
  title?: string;
  author?: string;
  genre?: string;
  endDate?: string | null;
  pagesRead: number;
  totalPages: number;
}

interface CurrentlyReadingBoxProps {
  readonly books: Book[];
}

function CurrentlyReadingBox({ books }: CurrentlyReadingBoxProps) {
  return (
    <div className="px-[16px] py-[8px] w-full min-h-[60px]">
      {books.map((book) => (
        <div
          key={book.title}
          className="flex items-center justify-between w-full mb-8"
        >
          <div>
            <div className="font-medium text-[16px] leading-[24px] text-[#0D141C]">
              {book.title}
            </div>
            <div className="font-regular text-[14px] text-[#4A739C]">
              {book.author}
            </div>
          </div>
          <div className="flex items-center min-w-[180px]">
            <div className="bg-blue-100 rounded w-28 h-1.5 mr-3 overflow-hidden">
              <div
                className="bg-blue-500 h-1.5"
                style={{
                  width: `${(book.pagesRead / book.totalPages) * 100}%`,
                }}
              />
            </div>
            <span className="font-medium text-base">{book.pagesRead}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrentlyReadingBox;
