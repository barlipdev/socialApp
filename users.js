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

$(".img-prof").click(function() {
    $("#imgupload").trigger('click');
})

$("#imgupload").change(function(event) {
    var image = document.getElementById('profileImg');
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append("id", "60a948a51c6f265f2c7ba943");
    formData.append("profileImage", file);
    image.src = URL.createObjectURL(event.target.files[0])
    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    };
    axios.post(endpoint + "/photo", formData, config);
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
        var image = document.getElementById('profileImg');
        json = JSON.parse(JSON.stringify(response));
        user.id = json.id;
        user.email = json.email;
        user.name = json.name;
        user.surname = json.surname;
        user.img = json.profileImage;
        image.src = 'data:image/jpeg;base64,' + user.img.data;
        console.log(user);
        document.querySelector(".profile-username").textContent = user.name + " " + user.surname;
    });

}