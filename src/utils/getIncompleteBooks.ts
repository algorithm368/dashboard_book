type Book = {
  title: string;
  author: string;
  totalPages: number;
  pagesRead: number;
};

export function getIncompleteBooks(books: Book[]): Book[] {
  return books
    .filter((book) => book.totalPages !== book.pagesRead)
    .map((book) => ({
      title: book.title,
      author: book.author,
      totalPages: book.totalPages,
      pagesRead: book.pagesRead,
    }));
}
