const rootNode = document.getElementById('root');
let users = [];
let edituser = null;
const image = document.createElement('IMG');
image.setAttribute("src", "file:///home/aleksandr/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/azov%20sea.jpg");
image.classList.add("image");
image.setAttribute("alt", "Azov Sea");


let text = document.createElement("P");
text.innerText = "Loren 50";
text.classList.add("myText");

const nameInput = document.createElement("input");
nameInput.id = 'Name';
nameInput.classList.add("testClass");

const ageInput = document.createElement("input");
ageInput.id = 'Age';
ageInput.classList.add("Age");

const searchInput = document.createElement("input");
searchInput.id = 'Search';
searchInput.classList.add("search");
searchInput.onkeyup = function() {Search()};

const addButton = document.createElement("button");
addButton.classList.add("addButton");
addButton.innerText = 'SAVE';
addButton.onclick = Add;

const searchButton = document.createElement("button");
searchButton.classList.add("searchButton");
searchButton.innerText = 'SEARCH';
searchButton.onclick = Search;

const listNode = document.createElement("div");
listNode.classList.add("listNode");
listNode.id = 'list';


function createDeleteButton(user) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");  
  deleteButton.id = user.id;
  deleteButton.innerText = 'DELETE';
  deleteButton.onclick = Delete;
  return deleteButton;
}

function createEditButton(user) {
  const editButton = document.createElement("button");
  editButton.classList.add("editButton");  
  editButton.id = user.id;
  editButton.innerText = 'EDIT';
  editButton.onclick = Edit;
  return editButton;
}

function Add() {
  const name = document.getElementById('Name').value;
  const age = document.getElementById('Age').value;
  if (name !== "" && !isNaN(age)) {
    if (edituser == null) {
      const newUser = {
        id: 0, // id предыдушего + 1
        name: name,
        age: age,
      }
      users.push(newUser);
    } else {
      users = users.map((user) => {

        if (edituser.name == user.name) {
          const newUser = {
            name: name,
            age: age,
          }
          return newUser;
        }
          return user      
      })
    }
    nameInput.value = "";
    ageInput.value = "";
    edituser = null;
    renderlist();
  }
  renderlist();
}

function renderlist() {
  const list = document.getElementById('list');
  list.id = 'list';
  list.innerHTML = "";
  users.forEach((user) => {
    const userBlock = document.createElement("div");
    userBlock.classList.add("userBlock");    
    userBlock.innerHTML = "Name: " + user.name + " Age: " + user.age;
    userBlock.appendChild(createDeleteButton(user));
    userBlock.appendChild(createEditButton(user));
    listNode.appendChild(userBlock);
  }
  )
}

function Search() {
  var input, filter, list, name, a, i, txtValue;
    input = document.getElementById("Search");
    filter = input.value.toUpperCase();
    list = document.getElementById("list");
    name = list.getElementsByTagName("Name");
    for (i = 0; i < name.length; i++) {
        a = name[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            name[i].style.display = "";
        } else {
            name[i].style.display = "none";
        }
    }

}



function Edit(event) {
  let user = users.find((user) => user.name == event.target.id)
  nameInput.value = user.name;
  ageInput.value = user.age;
  edituser = user;
}

function Delete(event) {
  console.log(event.target)
  users = users.filter((user) => user.id != event.target.id
  )
  renderlist();
}


rootNode.appendChild(image);
rootNode.appendChild(text);
rootNode.appendChild(nameInput);
rootNode.appendChild(ageInput);
rootNode.appendChild(addButton);
rootNode.appendChild(searchInput);
rootNode.appendChild(searchButton);
rootNode.appendChild(listNode);
// rootNode.appendChild(searchInput);



// 1. создать блок с полем фильтр (строка) и кнопкой поиск
// 2. при нажатии кнопки список юзеров меняется и остаются только те кто по имени подходят к поисковому запросу
// 3. может быть частичное совпадение, то есть имя "Антон" идет по фильтру "то"
// 4. нужно не учитывать заглавные буква, то есть "Антон" идет по фильтру "антон"


// 1. Добвать юзерам id и использовать его везде как уникальный идентификатор