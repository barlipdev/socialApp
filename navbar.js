import { Repository } from './repo/repository.js';

var statusDots = document.getElementsByName("statusDot")
var profileImg = document.getElementsByName("navbarProfileImg")
var repository = new Repository();

statusDots.forEach((dot) => {
    dot.addEventListener("click", () => {
        dot.classList.add("clicked");
        statusDots.forEach((other) => {
            if (other != dot) {
                other.classList.remove("clicked");
            }

        })
        if (dot.classList.contains("online")) {
            profileImg[0].classList.remove("away", "hidden")
            profileImg[0].classList.add('online')
        } else if (dot.classList.contains("away")) {
            profileImg[0].classList.remove("online", "hidden")
            profileImg[0].classList.add('away')
        } else if (dot.classList.contains("hidden")) {
            profileImg[0].classList.remove("online", "away")
            profileImg[0].classList.add('hidden')
        }
    })
})

//update user status every 5 sec
setInterval(function() {
    var formData = new FormData();
    //setting user status
    formData.append("id", window.sessionStorage.getItem('uid'));
    if (profileImg[0].classList.contains("online")) {
        formData.append("status", "online");
    } else if (profileImg[0].classList.contains("away")) {
        formData.append("status", "away");
    } else if (profileImg[0].classList.contains("offline")) {
        formData.append("status", "offline");
    }
    repository.setAvailable(formData, window.sessionStorage.getItem('status'));
}, 10000);

setInterval(function() {
    //getting freinds status
    $('.friend').each(function() {
        console.log($(this).attr('id'));
        repository.getAvailable($(this).attr('id'), window.sessionStorage.getItem('status'))
            .then(status => {
                $(this).children('.user').children('.status').attr("class", "status " + status);
                console.log(status);
            })
    })
}, 15000)

//changing profile description
$('.description-change-button').click(function() {
    $('.description-edit').css("display", "block")
});

$('#save-description').click(function() {
    if ($('#descInput').val() != "") {
        $('.profile-description').text($('#descInput').val());
    } else {
        $('.profile-description').text("Update your status ! :)");
    }
    $('.description-edit').css("display", "none");
})