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

    async getUser(uid, jwt) {
        var auth = "Bearer " + jwt;
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": auth
                }
            };
            let res = await axios.get(endpoint + "/users/" + uid, config);
            return res.data;
        } catch (err) {
            console.log(err);
        }

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

    async setProfilePhoto(id, file, jwt) {
        var auth = "Bearer " + jwt;
        var formData = new FormData();
        formData.append("id", id);
        formData.append("profileImage", file);

        const config = {
            headers: {
                "content-type": "multipart/form-data",
                "Authorization": auth
            }
        };
        let res = await axios.post(endpoint + "/users/photo", formData, config);
        return res.data;
    }

    getFriendsByUserId(userId) {
        //TO DO fetch users friends
    }
}