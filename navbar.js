import { Repository } from './repo/repository.js';

var statusDots = $('[name=statusDot]');
var profileImg = $('[name=navbarProfileImg');
var repository = new Repository();

console.log(statusDots);
statusDots.each(function(dot) {
    $(this).click(function() {
        $(this).addClass('clicked');
        statusDots.each(function(index) {
            if (index != dot) {
                $(this).removeClass('clicked');
            }

        })
        if ($(this).hasClass('online')) {
            profileImg.attr('class', 'navbar-profile-img online')
        } else if ($(this).hasClass('away')) {
            profileImg.attr('class', 'navbar-profile-img away')
        } else if ($(this).hasClass('hidden')) {
            profileImg.attr('class', 'navbar-profile-img hidden')
        }
    })
})

//update user status every 5 sec
setInterval(function() {
    var formData = new FormData();
    //setting user status
    formData.append("id", window.sessionStorage.getItem('uid'));
    if (profileImg.hasClass('online')) {
        formData.append("status", "online");
    } else if (profileImg.hasClass('away')) {
        formData.append("status", "away");
    } else if (profileImg.hasClass('hidden')) {
        formData.append("status", "hidden");
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