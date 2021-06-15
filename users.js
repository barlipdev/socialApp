import { User } from './model/model.js'
import { Repository } from './repo/repository.js';

const endpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users';
var allFriends = document.querySelectorAll(".friend");
var repository = new Repository();

window.onload = getData();

function getData() {
    repository.getUser(window.sessionStorage.getItem('uid'), window.sessionStorage.getItem('status'))
        .then(data => {
            try {
                document.querySelector(".profile-username").textContent = data.name + " " + data.surname;
                document.getElementById('profileImg').src = 'data:image/jpeg;base64,' + data.profileImage.data;
            } catch (error) {
                console.log(error);
            }
        })
    repository.getRecentUsers(window.sessionStorage.getItem('uid'), window.sessionStorage.getItem('status'))
        .then(data => {
            data.forEach((user) => {
                try {
                    var lu = $("#recents");
                    var li = document.createElement("li");
                    var div_photo = document.createElement("div");
                    var img = document.createElement("img");
                    var status_span = document.createElement("span");
                    var name = document.createElement("p");
                    var invite_div = document.createElement("div");
                    var invite_button = document.createElement("button");

                    li.setAttribute("class", "person");
                    //photo div
                    div_photo.setAttribute("class", "user")
                    img.setAttribute("class", "img-recent");
                    img.src = 'data:image/jpeg;base64,' + user.profileImage.data;

                    div_photo.appendChild(img);
                    status_span.setAttribute("class", "status online");
                    div_photo.appendChild(status_span);

                    li.appendChild(div_photo);

                    //name div
                    name.setAttribute("class", "name");
                    name.innerText = user.name + " " + user.surname;
                    li.appendChild(name);

                    //invite button

                    invite_div.setAttribute("class", "invite-div");
                    invite_button.setAttribute("type", "submit");
                    invite_button.setAttribute("class", "recent-users-button");
                    invite_div.appendChild(invite_button);
                    li.appendChild(invite_div);

                    //append all dives
                    lu.append(li);


                } catch (error) {
                    console.log(error);
                }
            })

        })
}

//clicking in user object
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
    //setting user profile photo
$(".img-prof").click(function() {
    $("#imgupload").trigger('click');
})

$("#imgupload").change(function(event) {
    var image = document.getElementById('profileImg');
    var file = event.target.files[0];
    image.src = URL.createObjectURL(event.target.files[0])
    repository.setProfilePhoto(window.sessionStorage.getItem('uid'), file, window.sessionStorage.getItem('status'))
        .then(status => {
            try {
                console.log(status);
            } catch (error) {
                console.log(error);
            }
        })
})