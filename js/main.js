// executa quando scrolla
window.onscroll = function () { scrollFunction() };

let header = document.getElementById("header");
let logo = document.getElementById("logo");

// Get the offset position of the header
var sticky = header.offsetTop;


function scrollFunction() {
    // fixar navbar ou não
    if (window.pageYOffset >= sticky + 60) {
        header.classList.add("fixed")
        logo.style.height = "40px"
    } else {
        header.classList.remove("fixed");
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