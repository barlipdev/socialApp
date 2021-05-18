import { Repository } from './repo/repository.js'

var allFriends = document.querySelectorAll(".person");
var repository = new Repository();

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

function loadAllFriends(userid) {
    return repository.getFriendsByUserId(userid);
}