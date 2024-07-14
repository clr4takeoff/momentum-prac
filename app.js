const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");

const link=document.querySelector("a");

function onLoginSubmit() {
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

// addEventListener 안에 있는 함수는 직접 실행하지 않는다.
loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);