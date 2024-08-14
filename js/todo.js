const toDoForm = document.getElementById("todo-form");
// 아래는 이것과 같음
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
}

toDoForm.addEventListener("submit", handleToDoSubmit)