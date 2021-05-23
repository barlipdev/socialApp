import {
    User
} from '../model/model.js';

const registerEndpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users/register';
const loginEndpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users/login';

export class Repository {
    getUser(idUser) {
        //TO DO create connection with API
    }

    register(email, name, surname, login, password, img) {

        var user = new User(null, name, surname, email, null, password, null, null, null);

        fetch(registerEndpoint, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            .then(res => {
                if (res.ok) {
                    console.log("User added");
                    console.log(res);
                    window.location = "login.html";
                } else {
                    console.error("Not successful");
                }
            })
    }

    login(email, password) {
        var user;
        fetch(loginEndpoint + "/" + email + "&" + password, {
                method: "GET",
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    alert("Login error");
                }
            }).then(res => {
                user = new User(null, res.name, res.surname, res.email, null, res.password, null, null, null);
                console.log(user);
                sessionStorage.user = JSON.stringify(user); 
                window.location = "index.html";
            })
    }

    getUser(userId) {
        //TO DO fetch user
    }

    getFriendsByUserId(userId) {
        //TO DO fetch users friends
    }
}

function genId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};