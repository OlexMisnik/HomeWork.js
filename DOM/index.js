const rootNode = document.getElementById('root');
let users = [];
const image = document.createElement('IMG');
image.setAttribute("src", "file:///home/aleksandr/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/azov%20sea.jpg");
image.setAttribute("border", "1");
image.setAttribute("width", "700");
image.setAttribute("height", "228");
image.setAttribute("alt", "Azov Sea");


let text = document.createElement("P");
text.innerText = "Loren 50";
text.className ="myText";





// const child2 = document.createElement('input');
// child2.onchange = function (event) {
//     for (let i = 0; i <= event.target.value; i++) {
//         const nextMark = document.createElement('span')
//         nextMark.innerText = " " + i + " "
//         rootNode.appendChild(nextMark)
//     }
// }

const nameInput = document.createElement("input");
nameInput.style.width = "200px";
nameInput.style.height = "30px";
nameInput.style.marginRight = "25px";
nameInput.id = 'Name';
nameInput.classList.add("myName");

const ageInput = document.createElement("input");
ageInput.style.width = "200px";
ageInput.style.height = "30px";
ageInput.style.marginRight = "25px";
ageInput.id = 'Age';
ageInput.classList.add("Age");


const addButton = document.createElement("button");
addButton.style.height = "30px";
addButton.innerText = 'ADD';
addButton.onclick = Add;

const listNode = document.createElement("div");
listNode.style.border = "1px solid";
listNode.style.width = "530px";
listNode.style.height = "600px";
listNode.style.marginTop = "40px"
listNode.style.marginRight = "25px";
listNode.id = 'list';


function createDeleteButton() {
const deleteButton = document.createElement("button");
deleteButton.className = "deletebutton";
deleteButton.style.height = "30px";
deleteButton.style.marginLeft = "455px";
deleteButton.innerText = 'DELETE';
// deleteButton.onclick = Delete;
return deleteButton;
}

function Add() {  
  const name = document.getElementById('Name').value;
  const age = document.getElementById('Age').value;
  if (name !== "" && !isNaN(age)) {
    const newUser = {
      age: age,
      name: name,
    }
    users.push(newUser);
    nameInput.value = "";
    ageInput.value = "";
    renderlist();
  }
}


function renderlist() {
  const list = document.getElementById('list');
  list.id = 'list';
  list.innerHTML = "";
  users.forEach((user) => {    
      const userBlock = document.createElement("div");
      userBlock.className = "userBlock";
      userBlock.style.width = "530px";
      userBlock.style.border = "1px solid";
      userBlock.innerHTML = "Name: " + user.name + " Age: " + user.age;
      userBlock.appendChild(createDeleteButton());
      listNode.appendChild(userBlock);
          }
    )
}


// function Delete() {
  // list.innerHTML = "";
  // users = [];
// }

root.onclick = function(event) {
  if (event.target.className != 'deletebutton') return;
  let userBlockdelete = event.target.closest('.userBlock');
  userBlockdelete.remove();
  users = [];
};


rootNode.appendChild(image);
rootNode.appendChild(text);
rootNode.appendChild(nameInput);
rootNode.appendChild(ageInput);
rootNode.appendChild(addButton);
rootNode.appendChild(listNode);
