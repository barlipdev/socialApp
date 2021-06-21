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
            var friendsList = [];
            let res = await axios.post(endpoint + "/register", { "email": email, "password": password, "name": name, "surname": surname, "friendsList": friendsList, "status": "online" }, config);
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

    async getRecentUsers(uid, jwt) {
        var auth = "Bearer " + jwt;
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": auth
                }
            };
            let res = await axios.get(endpoint + "/users/recent/" + uid, config);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async addFriend(uid, jwt, fuid) {
        var auth = "Bearer " + jwt;
        var formData = new FormData();
        formData.append("id", uid);
        formData.append("idAdded", fuid);
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": auth
                }
            };
            let res = await axios.post(endpoint + "/users/friends", formData, config);
            return res.data;
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async getUserFriends(uid, jwt) {
        var auth = "Bearer " + jwt;
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": auth
                }
            };
            let res = await axios.get(endpoint + "/users/friends/" + uid, config);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async setAvailable(status, jwt) {
        var auth = "Bearer " + jwt;
        const config = {
            headers: {
                "content-type": "multipart/form-data",
                "Authorization": auth
            }
        };
        axios.post(endpoint + "/users/status", status, config);
    }

    async getAvailable(uid, jwt) {
        var auth = "Bearer " + jwt;
        //var formData = new FormData();
        //formData.append("id", uid);
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                    "Authorization": auth
                }
            };
            let res = await axios.get(endpoint + "/users/status/" + uid, config);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
}