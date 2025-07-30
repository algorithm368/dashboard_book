import bookData from "../assets/data/bookData.json";

/**
 * Calculates the total number of pages read per month for the last 12 months,
 * based on the endDate of each finished book in the dataset.
 *
 * @returns {Array} Array of objects, each representing a month (with month name, year, and total pages read).
 */
export function getPageReadPerMonth() {
  // Gather all endDates from books that have been finished (endDate is not null)
  const endDates = bookData
    .filter((book) => book.endDate)
    .filter((book) => book.endDate !== null)
    .map((book) => new Date(book.endDate!));

  // Determine the latest endDate in the dataset, or use today's date if there are no finished books
  const latest = endDates.length
    ? new Date(Math.max(...endDates.map((d) => d.getTime())))
    : new Date();

  // Create an array representing the last 12 months up to the latest endDate
  // Each element is an object with the month name, year, and a pages counter initialized to 0
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(
      latest.getFullYear(),
      latest.getMonth() - (11 - i), // Go back 11 months from latest, up to current month
      1
    );
    return {
      month: date.toLocaleString("default", { month: "short" }), // e.g., "Jan", "Feb"
      year: date.getFullYear(),
      pages: 0,
    };
  });

  // For each finished book, find the corresponding month in the months array
  // and add the number of pages read (prefer totalPages, fallback to pagesRead, or 0)
  bookData.forEach((book) => {
    if (book.endDate) {
      const end = new Date(book.endDate);
      const idx = months.findIndex(
        (m) =>
          m.year === end.getFullYear() &&
          m.month === end.toLocaleString("default", { month: "short" })
      );
      if (idx !== -1) {
        // Add the book's totalPages (or pagesRead if totalPages is missing) to the month's total
        months[idx].pages += book.totalPages ?? book.pagesRead ?? 0;
      }
    }
  });

  // Return the array of months with their corresponding total pages read
  return months;
}
