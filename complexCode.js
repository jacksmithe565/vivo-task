/* 
Filename: complexCode.js
Content: Complex and sophisticated JavaScript code

Purpose: This code implements a web application for managing a bookstore. It provides functionalities such as adding books, searching books, managing inventory, and generating sales reports.

Note: This code is a simplified version and does not include server-side integration or a database. It is just meant to demonstrate a complex JavaScript implementation.

Feel free to modify, expand, and customize this code to meet your specific needs.
*/

// Book class definition
class Book {
  constructor(id, title, author, price, quantity) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
}

// Bookstore class definition
class Bookstore {
  constructor() {
    this.books = [];
  }

  addBook(title, author, price, quantity) {
    const id = this.books.length + 1;
    const newBook = new Book(id, title, author, price, quantity);
    this.books.push(newBook);
  }

  searchBook(title) {
    const searchResults = [];
    for (const book of this.books) {
      if (book.title.toLowerCase().includes(title.toLowerCase())) {
        searchResults.push(book);
      }
    }
    return searchResults;
  }

  updateBookQuantity(id, quantity) {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      book.quantity = quantity;
    }
  }

  generateSalesReport() {
    const report = [];
    for (const book of this.books) {
      const revenue = book.price * book.quantity;
      report.push(`Book: ${book.title} by ${book.author}, Revenue: $${revenue.toFixed(2)}`);
    }
    return report;
  }
}

// Example usage of the bookstore functionality
const myBookstore = new Bookstore();

myBookstore.addBook("JavaScript: The Good Parts", "Douglas Crockford", 29.99, 50);
myBookstore.addBook("Eloquent JavaScript", "Marijn Haverbeke", 39.99, 100);
myBookstore.addBook("You Don't Know JS", "Kyle Simpson", 24.99, 75);
myBookstore.addBook("JavaScript: The Definitive Guide", "David Flanagan", 49.99, 150);

console.log("Bookstore Contents:");
console.log(myBookstore.books);

const searchResults = myBookstore.searchBook("javascript");
console.log("Search Results:");
console.log(searchResults);

myBookstore.updateBookQuantity(2, 120);
console.log("Updated Bookstore Contents:");
console.log(myBookstore.books);

const salesReport = myBookstore.generateSalesReport();
console.log("Sales Report:");
console.log(salesReport);
