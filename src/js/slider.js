var slideIndex = 1;
showDivs(slideIndex);
autoSlide();

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

function autoSlide(){
    plusDivs(1);
    setTimeout(autoSlide,3200);
}



// --------------  PARA SERVICIOS

var rojo= document.getElementById("servicio-electrificaciones");
var ama= document.getElementById("servicio-proyectosciviles");
var azul= document.getElementById("servicio-clima");

rojo.style.display = "none";
ama.style.display = "none";
azul.style.display = "block";



function verAzul(){

    var rojo= document.getElementById("servicio-electrificaciones");
    var ama= document.getElementById("servicio-proyectosciviles");
    var azul= document.getElementById("servicio-clima");

    rojo.style.display = "none";
    rojo.style.visibility = "hidden";
    ama.style.display = "none";
    ama.style.visibility = "hidden";
    // azul.style.display = "block";


}

