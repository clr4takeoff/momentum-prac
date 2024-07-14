const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting= document.querySelector("#greeting");
const  HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username=loginInput.value;
    // 밑에 따옴표같은거 ' 이게 아니고 option+₩ 눌러야함... (backtick 기호)
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",onLoginSubmit);