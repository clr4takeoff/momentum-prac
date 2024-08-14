const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); 로 써도 상관 없음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    // const potato = document.createElement("li"); 로 써도 상관 없음
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit)

// parsedToDos.forEach((item)=> console.log("This is the turn of", item)); 과 같은 역할
// function sayHello(item) {
//     console.log("This is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}