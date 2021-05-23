import {Repository} from '../repo/repository.js'

const username = document.querySelector("#username");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

var repository = new Repository();

//console.log(JSON.parse(sessionStorage.user));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    register();
});

function register()
{
    var usernameValue = username.value.trim();
    var surnameValue = surname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();

    repository.register(emailValue, usernameValue, surnameValue, null, passwordValue, null);

}


