var allFriends = document.querySelectorAll(".person");

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