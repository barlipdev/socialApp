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