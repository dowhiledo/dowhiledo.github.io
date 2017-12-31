var slideIndex = 1;
showDivs(slideIndex);
autoSlide();
/*
window.location.href = "https://electromecanicosperu.mybluemix.net/"
*/
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

// var rojo= document.getElementById("servicio-electrificaciones");
// var ama= document.getElementById("servicio-proyectosciviles");
// var azul= document.getElementById("servicio-clima");
// rojo

// rojo.style.display = "block";
// ama.style.display = "none";
// azul.style.display = "block";



function verRojo(){
    var rojo= document.getElementById("servicio-electrificaciones");
    var ama= document.getElementById("servicio-proyectosciviles");
    var azul= document.getElementById("servicio-clima");
    //
    rojo.style.display = "block";
    ama.style.display = "none";
    azul.style.display = "none";
}
function verAmarillo(){
    var rojo= document.getElementById("servicio-electrificaciones");
    var ama= document.getElementById("servicio-proyectosciviles");
    var azul= document.getElementById("servicio-clima");
    //
    rojo.style.display = "none";
    ama.style.display = "block";
    azul.style.display = "none";
}
function verAzul(){
    var rojo= document.getElementById("servicio-electrificaciones");
    var ama= document.getElementById("servicio-proyectosciviles");
    var azul= document.getElementById("servicio-clima");
    //
    rojo.style.display = "none";
    ama.style.display = "none";
    azul.style.display = "block";
}

// ---------------------------------------------------------------

function iverRojo(){
    var rojo= document.getElementById("servicio-electrificaciones");
    var ama= document.getElementById("servicio-proyectosciviles");
    var azul= document.getElementById("servicio-clima");
    //
    rojo.style.display = "block";
    ama.style.display = "none";
    azul.style.display = "none";
}
function iverAmarillo(){
    var rojo= document.getElementById("servicio-electrificaciones");
    var ama= document.getElementById("servicio-proyectosciviles");
    var azul= document.getElementById("servicio-clima");
    //
    rojo.style.display = "none";
    ama.style.display = "block";
    azul.style.display = "none";
}
function iverAzul(){
    alert("sfds");
    var rojo= document.getElementById("servicio-electrificaciones");
    var ama= document.getElementById("servicio-proyectosciviles");
    var azul= document.getElementById("servicio-clima");
    //
    rojo.style.display = "none";
    ama.style.display = "none";
    azul.style.display = "block";
    // window.location="servicios.html";
}


function facebook(){
    // alert("fsad");
    window.location="https://www.facebook.com/Electromecanicos-del-Per%C3%BA-718878174985728/";
}
