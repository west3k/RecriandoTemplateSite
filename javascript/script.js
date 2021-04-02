let bt = document.getElementById("buttonMenu")
let menu = document.getElementById("lateralMenu")

let status = true

function showLmenu() {
    if (status == true) {
        menu.classList.add("show")
        status = false
    }

}

function hideLMenu() {
    if (status == false) {
        menu.classList.add("hideLMenu")
        setTimeout(() => {
            menu.classList.remove("show")
            menu.classList.remove("hideLMenu")
        }, 300)
        status = true
    }

}
let ccheck = document.querySelectorAll(".desmBox")

function desmarcarBoxLow() {
    for (var i = 0; i < ccheck.length; i++) {
        ccheck[i].checked = false
    }
    ccheck[0].checked = true
}

function desmarcarBoxNormal() {
    for (var i = 0; i < ccheck.length; i++) {
        ccheck[i].checked = false
    }
    ccheck[1].checked = true
}
function desmarcarBoxHigh() {
    for (var i = 0; i < ccheck.length; i++) {
        ccheck[i].checked = false
    }
    ccheck[2].checked = true
}

