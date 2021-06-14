import { User } from '../model/model.js';

const endpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com';

export class Repository {

    constructor() {
        if (!!Repository.instance) {
            return Repository.instance;
        }
        Repository.instance = this;
        return this;
    }

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

    async register(email, password, name, surname) {
        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            };
            let res = await axios.post(endpoint + "/register", { "email": email, "password": password, "name": name, "surname": surname }, config);
            return res.data;
        } catch (err) {
            console.log(err);
        }

    }

    async login(email, password) {
        try {
            const config = {
                headers: {
                    "content-type": "application/json"
                }
            };
            let res = await axios.post(endpoint + "/login", { "email": email, "password": password }, config);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    getFriendsByUserId(userId) {
        //TO DO fetch users friends
    }
}