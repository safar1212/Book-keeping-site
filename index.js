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
<button onclick="removeItem()" type= "button">Remove</button>
<ul id = "dynamic">
<li></li>
<li>
<ol></ol>
</li>
</ul>
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
function addItem(){
var ul = document.getElementById("dynamic");
var title = document.getElementById("title");
var author = document.getElementById("tuthor");
var li = document.createElement("li");
li.setAttribute('id',title.value);
li.setAttribute('id',author.value);

li.appendChild(document.createTextNode(title.value));'\n'
li.appendChild(document.createTextNode(author.value));
ul.append(li);
}
function removeItem(){
    var ul = document.getElementById("dynamic");
    var title = document.getElementById("title");
   var li = document.createTextNode(title.value);
   ul.removeItem(li);
}