/**
 * Get a count of books for each genre.
 * @param {Array} books - Array of book objects.
 * @returns {Object} - An object with genre as key and count as value.
 */
export function getGenreCounts(books) {
  const genreCounts = {};
  books.forEach((book) => {
    if (book.genre) {
      genreCounts[book.genre] = (genreCounts[book.genre] || 0) + 1;
    }
  });
  return genreCounts;
}

// Example usage:
// import bookData from '../assets/data/bookData.json';
// const genreCounts = getGenreCounts(bookData);
// console.log(genreCounts);
