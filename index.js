let books = [{title: "Book1", Author: "Safar"}];

const collection = document.getElementById("bookss");
books.forEach((books, index) => {
const div = document.createElement('div');
div.className = 'main-container';
div.innerHTML = `<div>
<h1>
    Book Keeping Website
</h1>
</div>
<div>
<p>${books.title}</p>
<p>${books.Author}</p>
<button type= "button">Remove</button>
<hr>
</div>
<div>
<form>
    <input type="text" id="title" required placeholder="Title"><br><br>
    <input type="text" id="tuthor" required placeholder="Author"><br><br>
    <button onclick="addItem()" type= "button">add</button>
  </form>
</div>
`;
collection.appendChild(div);
});
