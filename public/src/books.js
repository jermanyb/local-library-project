function findAuthorById(authors, id) {
    let foundAuth = authors.find((author) => author.id === id);
    return foundAuth;
    }

function findBookById(books, id) {
    let foundBook = books.find((book) => book.id === id);
    return foundBook;
    }

function findEntityById(entities, id) {
  let foundEntity = entities.find((entity) => entity.id === id);
  return foundEntity;
}

function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned){
        returned.push(book);
      } else {
        borrowed.push(book);
      }
      return acc;
    },
    [[], []]
    )
}

function getBorrowersForBook(book, accounts){
  let borrowers = [];
  book.borrows.forEach((borrow) => {
    let account = accounts.find((account) => borrow.id === account.id);
    let allInfo = { ...account }; 
    allInfo.returned = borrow.returned;
    borrowers.push(allInfo);
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
