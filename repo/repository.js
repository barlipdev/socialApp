import { User } from '../model/model.js';

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