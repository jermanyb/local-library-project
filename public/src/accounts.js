function findAccountById(accounts, id) {
let foundId = accounts.find((account) => account.id === id);
return foundId;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
  accountA['name'].last.toLowerCase() < accountB['name'].last.toLowerCase() ? -1 : 1);
}

function numberOfBorrows(account, books) {
  let counter = 0;
  for(let book of books) {
    for(let borrowsArray of book.borrows) {
      if(borrowsArray.id === account.id) {
        counter++;
      }
    }
  } return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  const user = account.id
  let booksArray = [];
  for(let book of books) {
    const borrows = book.borrows;
    if(borrows[0].id === user && borrows[0].returned === false) {
      booksArray.push({'title': book.title, 'author': {'name':book.authorId}});
  }
}
booksArray = booksArray.map(bookObject => {
  let authorId = bookObject.author.name;
  bookObject.author.name = authors.find(author => authorId === author.id).name
  return bookObject;
});
return booksArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
