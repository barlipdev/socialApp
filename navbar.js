var statusDots = document.getElementsByName("statusDot")
var profileImg = document.getElementsByName("navbarProfileImg")

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