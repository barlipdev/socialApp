class User {
    constructor(id, name, surname, email, login, password, img, isActive, friendsArray) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.img = img;
        this.isActive = isActive;
        this.friendsArray = friendsArray;
        this.email = email;
        this.login = login;
        this.password = password;
    }

    addFriend(user) {
        this.friendsArray.push(user);
    }
    getAllFriends() {
        return this.friendsArray;
    }
}