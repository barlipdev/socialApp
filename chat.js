/*var messenger = document.getElementsByClassName("mess-button");

for(let i = 0; i < messenger.length; i++) {

    messenger[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
*/

function sendMessage() {

    let userText = $("#text-input").val();
    let userHTML = '<p class="user-message"><span>' + userText + '</span></p>';

    $("#text-input").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function buttonSendText(text) {
    let userHTML = '<p class="user-message"><span>' + text + '</span></p>';
    
    $("#text-input").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function setChatFriend(friendImg, friendName) {
    let asd = $("#chat-name").text(friendName);
}

function heart() {
    buttonSendText("Heart clicked!");
}

$("#text-input").keypress(function (e) {
    if (e.which == 13) {
        sendMessage();
    }
});