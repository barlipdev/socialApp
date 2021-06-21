import { Repository } from './repo/repository.js';

const endpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users';
var allFriends = document.querySelectorAll(".friend");
var repository = new Repository();
var arrayChangeHandler = {
    get: function(target, property) {
        console.log('getting ' + property + ' for ' + target);
        // property is index in this case
        return target[property];
    },
    set: function(target, property, value, receiver) {
        //console.log('setting ' + property + ' for ' + target + ' with value ' + value);
        target[property] = value;
        repository.getUser(value, window.sessionStorage.getItem('status'))
            .then(user => {
                createFriends(user);
            }).then(openChat(document.querySelectorAll(".friend")));
        return true;
    }
};

var userFriends = [];
var proxyToArray = new Proxy(userFriends, arrayChangeHandler);

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
    repository.getUserFriends(window.sessionStorage.getItem('uid'), window.sessionStorage.getItem('status'))
        .then(data => {
            data.forEach((friend) => {
                createFriends(friend);
            })
            openChat(document.querySelectorAll(".friend"));
        })
    repository.getRecentUsers(window.sessionStorage.getItem('uid'), window.sessionStorage.getItem('status'))
        .then(data => {
            var lu = $("#recents");
            lu.html("");
            data.forEach((user) => {
                try {
                    createRecentUsers(user);
                } catch (error) {
                    console.log(error);
                }
            })

            $(".recent-users-button").each(function(index) {
                $(this).click(function() {
                    console.log($(this).parent('.invite-div').parent('.person').attr('id'));

                    //removing added user to friends
                    $(this).parent('.invite-div').parent('.person').remove();

                    repository.addFriend(window.sessionStorage.getItem('uid'),
                        window.sessionStorage.getItem('status'),
                        $(this).parent('.invite-div').parent('.person').attr('id')).then(data => {
                        proxyToArray.push($(this).parent('.invite-div').parent('.person').attr('id'));
                    })
                    repository.getUserFriends(window.sessionStorage.getItem('uid'), window.sessionStorage.getItem('status')).then(data => {
                        data.forEach(friend => {

                        })
                    })

                })
            })
        })
}

function openChat(friends) {
    friends.forEach((friend) => {
        friend.addEventListener("click", () => {
            //TO DO open chat window
            friend.classList.add("active-user");
            friends.forEach((closedFriend) => {
                if (closedFriend != friend) {
                    closedFriend.classList.remove("active-user");
                }
            })
        })
    })
}
//clicking in user object

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

function createRecentUsers(user) {
    var lu = $("#recents");
    var li = document.createElement("li");
    var div_photo = document.createElement("div");
    var img = document.createElement("img");
    var status_span = document.createElement("span");
    var name = document.createElement("p");
    var invite_div = document.createElement("div");
    var invite_button = document.createElement("button");

    li.setAttribute("class", "person");
    li.setAttribute("id", user.id);
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
    invite_button.setAttribute("id", "invite-button");
    invite_div.appendChild(invite_button);
    li.appendChild(invite_div);

    //append all dives
    lu.append(li);
}

function createFriends(user) {
    var lu = $("#users");
    var li = document.createElement("li");
    var div_photo = document.createElement("div");
    var img = document.createElement("img");
    var status_span = document.createElement("span");
    var name = document.createElement("p");

    li.setAttribute("class", "friend");
    li.setAttribute("id", user.id);
    //photo div
    div_photo.setAttribute("class", "user")
    img.src = 'data:image/jpeg;base64,' + user.profileImage.data;

    div_photo.appendChild(img);
    status_span.setAttribute("class", "status online");
    div_photo.appendChild(status_span);

    li.appendChild(div_photo);

    //name div
    name.setAttribute("class", "name");
    name.innerText = user.name + " " + user.surname;
    li.appendChild(name);

    //append all dives
    lu.append(li);

}