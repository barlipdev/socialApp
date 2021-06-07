import { User } from '../model/model.js';

const endpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users';

export class Repository {
    getUser(idUser) {
        var json;
        var user = new User();
        fetch(endpoint + "/" + idUser, {
            method: 'GET',
        }).then((resp) => resp.json()).then(response => {
            json = JSON.parse(JSON.stringify(response));
            user.id = json.id;
            user.email = json.email;
            user.name = json.name;
            user.surname = json.surname;
            console.log(user);
            return user;
        });

    }

    register(email, name, surname, login, password, img) {
        //TO DO send request to API (adding user to database)
        return new User();
    }

    login(email, password) {
        //TO DO find user in databse and return
    }

    getFriendsByUserId(userId) {
        //TO DO fetch users friends
    }
}

function genId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};