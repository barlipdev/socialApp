import { User } from './model/model.js';

function genId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function getUser(idUser) {
    //TO DO create connection with API
}

function register(email, name, surname, login, password, img) {
    //TO DO send request to API (adding user to database)
    return user;
}

function login(email, password) {
    //TO DO find user in databse and return
}