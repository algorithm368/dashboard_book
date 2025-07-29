import bookData from "../assets/data/bookData.json";

export function getPageReadPerMonth() {
  // Find the latest endDate in your data, or use today if none
  const endDates = bookData
    .filter((book) => book.endDate)
    .map((book) => new Date(book.endDate));
  const latest = endDates.length
    ? new Date(Math.max(...endDates.map((d) => d.getTime())))
    : new Date();

  // Create an array of months for the last 12 months up to the latest endDate
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(
      latest.getFullYear(),
      latest.getMonth() - (11 - i),
      1
    );
    return {
      month: date.toLocaleString("default", { month: "short" }),
      year: date.getFullYear(),
      pages: 0,
    };
  });

  bookData.forEach((book) => {
    if (book.endDate) {
      const end = new Date(book.endDate);
      const idx = months.findIndex(
        (m) =>
          m.year === end.getFullYear() &&
          m.month === end.toLocaleString("default", { month: "short" })
      );
      if (idx !== -1) {
        // Use totalPages for finished books
        months[idx].pages += book.totalPages ?? book.pagesRead ?? 0;
      }
    }
  });

  return months;
}
