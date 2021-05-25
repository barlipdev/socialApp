import { Repository } from './repo/repository.js'

var allFriends = document.querySelectorAll(".person");
var repository = new Repository();

allFriends.forEach((friend) => {
    friend.addEventListener("click", () => {

        //TO DO open chat window
        let friendImg = friend.getElementsByTagName("img")[0].src;
        let friendName = friend.getElementsByTagName("span")[1].textContent;
        setChatFriend(friendImg, friendName);

        //Setting active user
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




