const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); 로 써도 상관 없음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    // const potato = document.createElement("li"); 로 써도 상관 없음
    const li=document.createElement("li");
    const span=document.createElement("span");
    li.appendChild(span);
    span.innerText=newTodo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit)