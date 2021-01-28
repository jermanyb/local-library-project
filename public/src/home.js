function totalBooksCount(books) { 
  var total = 0; books.forEach((books) => { total ++ }); 
  return total; }

function totalAccountsCount(accounts) {
  var total = 0;
  for (i = 0; i < accounts.length; i++) {
    total += accounts[i];
  }
  return accounts.length;
  return total;
}

function booksBorrowedCount(books) {
  return books.filter((book) => {
    const[recent] = book.borrows;
    return !recent.returned;
  }).length;
}


function getMostCommonGenres(books) { 
  const genre = books.map((book) => book.genre);
 let array = [];
  let count = {};
  genre.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (let key in count) {
    array.push({
      'name' : key,
      'count' : count[key],
    }); 
  }
  array.sort((a,b) => (a.count < b.count ? 1 : -1));
  return array.slice(0,5);
}



function getMostPopularBooks(books) {
  let result = books
    .sort((book1, book2) => book2.borrows.length - book1.borrows.length)
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    });
  return result.slice(0, 5);
}   

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   result[author.id] = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
  });
  books.forEach(
    (book) => (result[book.authorId].count += book.borrows.length)
  );
  let results = result.sort(
    (author1, author2) => author2.count - author1.count
  );
  return results.slice(0, 5);
}


module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
