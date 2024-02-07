let list = [];

var button = document.getElementById('btn');
var rList = document.getElementById('list');

button.addEventListener('click', function (event) {
    var input = document.getElementById('input');
    list.push(input.value);
    input.value = '';
    var li = document.createElement('li');
    li.innerHTML = list.slice(-1);
    rList.appendChild(li)
});

const input = document.getElementById("input");
const keyboardOutput = document.getElementById("keyboard");
const addButton = document.getElementById("btn");

// Adaugăm evenimentul de click pe buton
addButton.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;
    document.getElementById("list").appendChild(listItem);
    input.value = "";
  }
});

// Adăugăm evenimentul de tastare în input
input.addEventListener("input", () => {
  keyboardOutput.textContent = input.value;
});

