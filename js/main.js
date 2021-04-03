// executa quando scrolla
window.onscroll = function () { scrollFunction() };

let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");

// Get the offset position of the header
var sticky = navbar.offsetTop;


function scrollFunction() {
    // fixar navbar ou não
    if (window.pageYOffset >= sticky + 20) {
        navbar.classList.add("fix")
        logo.style.height = "40px"
    } else {
        navbar.classList.remove("fix");
        logo.style.height = "55px"
    }

    // mostrar botão btn_top ou não
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("btn_top").style.display = "block";
    } else {
        document.getElementById("btn_top").style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}