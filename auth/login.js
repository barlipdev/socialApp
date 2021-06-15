import { Repository } from '../repo/repository.js'

const form = document.querySelector("#form");
var inputs = form.elements;

var repository = new Repository();
var storage = window.sessionStorage;
var resp;

form.onsubmit = function(event) {
    repository.login(inputs["email"].value, inputs["password"].value)
        .then(status => {
            try {
                resp = status.split('UID', 2);
                storage.setItem('jwt', resp[0]);
                storage.setItem('uid', resp[1]);
                storage.setItem('status', status);
                window.location.replace("http://127.0.0.1:5500/index.html");

            } catch (error) {
                console.log(error);
            }

        })
    event.preventDefault();
}