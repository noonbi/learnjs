const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingSpan = document.querySelector("#greeting span");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
    greeting.addEventListener("submit", onLogoutSubmit);
    console.log("username: ", username);
}

function onLogoutSubmit(event) {
    event.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
    loginInput.value = "";
    greetingSpan.innerText = "";
    loginForm.addEventListener("submit", onLoginSubmit);
}
function paintGreetings(username) {
    greetingSpan.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log("savedUsername: ", savedUsername);
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
    greeting.addEventListener("submit", onLogoutSubmit);
}