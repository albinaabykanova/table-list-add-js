const form = document.getElementById("form");
const ul = document.getElementById("ul");
const button = document.getElementById("button");
const input = document.getElementById("input");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach((item) => {
  liMaker(item);
});

button.addEventListener("click", function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});

// Path: index.html
var myList = document.getElementsByTagName("myList");

var listItem = document.createElement("li");
listItem.textContent = "new";

myList.appendChild(listItem);

for (var i = 0; i < itemsArray.lenght; i++) {
  var listItem = document.createElement("li");
  listItem.textContent = itemsArray[i];
  myList.appendChild(listItem);
}
