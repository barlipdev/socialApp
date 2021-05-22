import {Repository} from './repo/repository.js'

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#passwordCheck");

var repository = new Repository();

form.addEventListener("submit", (e) => {
    e.preventDefault();
});


