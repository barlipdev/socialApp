import { User } from './model/model.js'

const endpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users';
var allFriends = document.querySelectorAll(".friend");

allFriends.forEach((friend) => {
    friend.addEventListener("click", () => {
        //TO DO open chat window
        friend.classList.add("active-user");
        allFriends.forEach((closedFriend) => {
            if (closedFriend != friend) {
                closedFriend.classList.remove("active-user");
            }
        })
    })
})

getUser("60a948a51c6f265f2c7ba943");

function loadAllFriends(userid) {
    return repository.getFriendsByUserId(userid);
}

function getUser(idUser) {
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
        document.querySelector(".profile-username").textContent = user.name + " " + user.surname;
    });

}