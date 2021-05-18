class User {
    constructor(id, name, surname, img, isActive, friendsArray) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.img = img;
        this.isActive = isActive;
        this.friendsArray = friendsArray;
    }

    addFriend(user) {
        this.friendsArray.push(user);
    }
    getAllFriends() {
        return this.friendsArray;
    }
}

function getUser(idUser) {
    //TO DO create connection with API
}