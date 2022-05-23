let books = [{title: "Title", Author: "Author"}];

const collection = document.getElementById("bookss");

books.forEach((books) => {
const div = document.createElement('div');
div.className = 'main-container';
div.innerHTML = `<div>
<h1>
    Book Keeping Website
</h1>
</div>
<div>
<div id = "dynamic">
</div>
</div>
<div>
  <form>
    <input type="text" name = "title" id="title" required placeholder="Title"><br><br>
    <input type="text" name = "author" id="tuthor" required placeholder="Author"><br><br>
    <button onclick="addItem()" type= "button">add</button>
  </form>
</div>
`;
collection.appendChild(div);
});

function addItem(){
var div = document.getElementById("dynamic");
var title = document.getElementById("title");
var author = document.getElementById("tuthor");
var para = document.createElement("p");
var para2 = document.createElement("p");
var button1 = document.createElement("button");
var buttonText = button1.innerHTML = "Remove";
var hrTeg = document.createElement("hr");
para.setAttribute('id',title.value);
para2.setAttribute('id',author.value);

para.appendChild(document.createTextNode(title.value));'\n'
para2.appendChild(document.createTextNode(author.value));
div.append(para);
div.append(para2);
div.append(button1);
div.append(hrTeg);
}


const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('change', (event) => {
    let formData = JSON.parse(localStorage.getItem('formData'));
    if (!formData) {
      formData = { title: '', author: ''};
    }
    formData[event.target.name] = event.target.value;
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});
