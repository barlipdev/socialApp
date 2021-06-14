var statusDots = document.getElementsByName("statusDot")
var profileImg = document.getElementsByName("navbarProfileImg")
const endpoint = 'https://mycorsproxy-social.herokuapp.com/https://barlipdev-social-api.herokuapp.com/users';

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
    formData.append("id", "60a948a51c6f265f2c7ba943");
    if (profileImg[0].classList.contains("online")) {
        formData.append("status", "online");
    } else if (profileImg[0].classList.contains("away")) {
        formData.append("status", "away");
    } else if (profileImg[0].classList.contains("offline")) {
        formData.append("status", "offline");
    }

    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    };
    //axios.post(endpoint + "/status", formData, config);

}, 5000);

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