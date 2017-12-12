$( document ).ready(function() {

    // document.getElementById("texto-entrada").focus();
    // var numAle = getNumNumAle();
    // reproducir(numAle);

    $("#btn-enviar").click(function () {

        texto = $("#texto-entrada").val();
        texto = parseInt(texto);

        if(texto===numAle) {
            $("#label").text("bien");
            $("#texto-entrada").val("");

            numAle = getNumNumAle();
            reproducir(numAle);
        }
        else{
            $("#label").text("mal");
            reproducir("Try again. " +numAle);
            // reproducir("Inténtalo de nuevo. " +numAle);
            // responsiveVoice.speak("Incorrect answer. Enter the number: "+numAle);
        }

        document.getElementById("texto-entrada").focus();
    });
});
var texto;


function reproducir(param) {
    // var voz = "Spanish Latin American Female";
    var voz = "US English Female";
    responsiveVoice.speak(""+param,voz);
    // responsiveVoice.speak(param,"UK English Female");
}


function reproducir(param,idioma) {
    var voz;
    if(idioma===0){
        voz = "US English Female";
        responsiveVoice.speak(""+param,voz);
    }else{
        voz = "Spanish Latin American Female";
        responsiveVoice.speak(""+param,voz);
    }
    // responsiveVoice.speak(param,"UK English Female");
}


function getNumNumAle(){
    return Math.floor(Math.random() * (200 - 1)) + 1;
}// el 80 el hombre lo dice como  eici.

$("#texto-entrada").keydown(function (e) {

    if (e.keyCode === 13) {
        $("#btn-enviar").click();
    }

});


