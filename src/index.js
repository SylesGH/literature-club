fetch("./settings.json")
    .then((e) => e.json())
    .then((data) => {
        document.title = data.title;
}).catch((e) => console.log(e));

var link = document.querySelector("#links")
var links = link.querySelectorAll("li")

window.location.hash = ""
window.scroll(0, 0)

links.forEach(li => {

    li.addEventListener("click", (selectedItem) => {

        links.forEach(li => {

            refresh(li.querySelector("a"))
            refresh(li)

        })

        if (selectedItem.target.classList.contains("active")) {

        } else {

            selectedItem.target.classList.add("active")
            selectedItem.target.parentElement.classList.add("active")
            
            if (selectedItem.target == document.querySelector("a")) {
                
                window.location.replace(selectedItem.target.href)

            } else {

                window.location.replace(selectedItem.target.querySelector("a").href)

            }
        }

    })

    li
    
})

const slideDownButton = document.querySelector(".slide-down")
const slideUpButton = document.querySelector(".slide-up")
const sidebar = document.querySelector("nav.sidebar")

function refresh(item) {
    
    item.classList.remove("active")

}

function slideUpChange() {
    if (window.location.hash === "") {
        slideUpButton.style.right = "-100%"
    } else {
        slideUpButton.style.right = "-10%"
    }
}

var slideDownCheck = false;

function slideDownChange() {
    if (slideDownCheck === false) {
        slideDownButton.classList.remove("main")
        slideDownButton.classList.add("animate")
        sidebar.appendChild(slideDownButton)
        sidebar.classList.add("animate")
    }

    slideDownCheck = true
}

function slideDown() {

    switch (window.location.hash) {
        case "":
            window.location.replace("#recomended")
            break;
    
        case "#recomended":
            window.location.replace("#features")
            break;

        case "#features":
            window.location.replace("#prefer")
            break;

        case "#prefer":
            window.location.replace("#footer")
            break;
    }

    links.forEach(link => {

        refresh(link.querySelector("a"))
        refresh(link)

    })

    refreshButtons()

}

function slideUp() {

    switch (window.location.hash) {
        case "#recomended":
            window.location.replace("#")
            break;
    
        case "#features":
            window.location.replace("#recomended")
            break;

        case "#prefer":
            window.location.replace("#features")
            break;

        case "#footer":
            window.location.replace("#prefer")
            break;
    }

    links.forEach(link => {

        refresh(link.querySelector("a"))
        refresh(link)

    })

    refreshButtons()
}

function refreshButtons() {

    switch (window.location.hash) {
        case "":
            links[0].classList.add("active")
            slideUpButton.style.top = "10%"
            break;
    
        case "#recomended":
            links[1].classList.add("active")
            slideUpButton.style.top = "5%"
            break;

        case "#features":
            links[2].classList.add("active")
            break;

        case "#prefer":
            links[3].classList.add("active")
            break;

        case "#footer":
            links[4].classList.add("active")
            break;
    }
}