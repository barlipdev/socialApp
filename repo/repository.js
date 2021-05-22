import { User } from '../model/model.js';

const endpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users';

fetch(endpoint, {
    method: 'GET',
}).then((resp) => resp.json()).then(function (response) {
    console.info(response);
    showConsole(response);
    return response;
});

function showConsole(data) {
    data.forEach((user) => {
        console.log(user.name);
    })
}

export class Repository {
    getUser(idUser) {
        //TO DO create connection with API
    }

    register(email, name, surname, login, password, img) {
        //TO DO send request to API (adding user to database)
        return user;
    }

    login(email, password) {
        //TO DO find user in databse and return
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