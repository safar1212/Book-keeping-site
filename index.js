// book class: represent a book

// const { List } = require("css-tree");

class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Ul class: handles UI task

class userInterface {
  static displayBooks() {
    const storedBooks = [
      { title: "Book 1", author: "one" },
      { title: "Book 2", author: "two" }
    ];

    const books = displayBooks;

    books.forEach((book) => userInterface.addBookToList(book));
  }

  static addBookToList(book) {
    const table = document.querySelector("#book-list");

    const row = document.createElement("thead");

    row.innerHTML = `
    <tr>
        <th>"${book.title}"</th>
        <th>by</th>
        <th>${book.author}</th>
    </tr>
    <tr>
        <th><button type="button" id="delete">Remove</button></th>
    </tr>
    `;

    table.appendChild(row);
  }
}

// store class: store the task

// event: display books

document.addEventListener('DOMContentLoaded', userInterface.displayBooks);

// events: add books

// events: remove books



















// let books = [];

// const collection = document.getElementById('bookss');

// function createForm() {
//   const div = document.createElement('div');
//   div.className = 'main-container';
//   div.innerHTML = `
// <div>
// <div id = "dynamic">
// </div>
// </div>
// <div>
//   <form id = "bookForm">
//     <input type="text" name = "title" id="title" required placeholder="Title"><br><br>
//     <input type="text" name = "author" id="tuthor" required placeholder="Author"><br><br>
//     <button id="addItem" type= "button">add</button>
//   </form>
// </div>
// `;
//   collection.appendChild(div);
// }
// createForm();

// function dataStore() {
//   localStorage.setItem('bookData', JSON.stringify(books));
// }

// function deleteBook(event) {
//   const bookIndex = event.target.id;
//   books.splice(bookIndex, 1);
//   dataStore();
//   displayBooks();
// }

// function displayBooks() {
//   let listOfBooks = '';
//   books.forEach((book, index) => {
//     listOfBooks += ` <div class="book">
//     <div>${book.title}</div>
//     <div>${book.author}</div>
//     <div>
//         <button class='btn-delete' id=${index}>Remove</button>
//     </div>
//     <hr/>
//   </div>`;
//   });
//   const div = document.getElementById('dynamic');
//   div.innerHTML = listOfBooks;
//   if (books.length > 0) {
//     const deleteButtons = document.querySelectorAll('.btn-delete');
//     deleteButtons.forEach((button) => { button.addEventListener('click', deleteBook); });
//   }
// }
// function addItem() {
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('tuthor').value;
//   const form = document.forms[0];

//   books.push({ title, author });
//   dataStore();
//   displayBooks();
//   form.reset();
// }

// document.getElementById('addItem').addEventListener('click', addItem);
// window.onload = () => {
//   books = JSON.parse(localStorage.getItem('bookData')) || [];
//   if (books) {
//     displayBooks();
//   }
// };
