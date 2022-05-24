// book class: represent a book

// const { list } = require("postcss");

// const { List } = require("css-tree");

class book {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('Bookstore')) || [];
  }

  addBook(title, author) {
    this.books.push({ title, author });
    this.storeBookData();
    this.addBookToList();
  }

  addBookToList() {
    const table = document.querySelector('#book-list');
    let listOfBooks = '';
    this.books.forEach((book, index) => {
      listOfBooks += `
    <tr>
     <td>${book.title} by ${book.author}</td>
    <td><button class="delete" type="button" id=${index}>Remove</button></td>
       
        
    </tr>
    <div><hr></div>`;
    });
    table.innerHTML = listOfBooks;
    if (this.books.length > 0) {
      const deleteButtons = document.querySelectorAll('.delete');
      deleteButtons.forEach((btn) => { btn.addEventListener('click', this.deleteBook.bind(this)); });
    }
  }

  deleteBook(click) {
    const bookId = click.target.id;
    this.books.splice(bookId, 1);
    this.storeBookData();
    this.addBookToList();
  }

  storeBookData() {
    const bookdata = JSON.stringify(this.books);
    localStorage.setItem('Bookstore', bookdata);
  }
}

const Bookstore = new book();

// Ul class: handles UI task

class userInterface {
  static displayBooks() {
    const storedBooks = [
      { title: 'Book 1', author: 'one' },
      { title: 'Book 2', author: 'two' },
    ];

    // const books = displayBooks;

    // books.forEach((book) => userInterface.addBookToList(book));

    storedBooks.forEach((book) => userInterface.addBookToList(book));
  }
}

// store class: store the task

// event: display books

window.onload = () => { Bookstore.addBookToList(); };

// events: add books

// const addBook = document.querySelector("#book-form");

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#tuthor').value;
  Bookstore.addBook(title, author);
});

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
