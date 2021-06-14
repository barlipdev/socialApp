import { Repository } from '../repo/repository.js'

const form = document.querySelector("#form");
var inputs = form.elements;

var repository = new Repository();
var storage = window.sessionStorage;

form.onsubmit = function(event) {
    repository.login(inputs["email"].value, inputs["password"].value)
        .then(status => {
            storage.setItem('jwt', status);
        })
    event.preventDefault();
}