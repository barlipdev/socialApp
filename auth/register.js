import { Repository } from '../repo/repository.js'

const form = document.querySelector("#form");
var inputs = form.elements;

var repository = new Repository();

form.onsubmit = function(event) {
    repository.register(inputs["email"].value, inputs["password"].value, inputs["name"].value, inputs["surname"].value)
        .then(status => {
            console.log(status);
            window.location.replace("http://127.0.0.1:5500/auth/login.html");
        })
    event.preventDefault();
}