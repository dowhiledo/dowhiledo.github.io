$( document ).ready(function() {


    document.getElementById("texto-entrada").focus();
    var numAle = getNumNumAle();
    reproducir(numAle);

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

    //responsiveVoice.speak(""); //default functionality

    // responsiveVoice.speak("1"); //default functionality
    // responsiveVoice.speak("hello world"); //default functionality
    // responsiveVoice.speak("hello world", "UK English Male");//default functionality with UK English Male voice
    // responsiveVoice.speak("hello world", "UK English Male", {pitch: 2});//default functionality with UK English Male voice with a pitch of 2
    // responsiveVoice.speak("hello world", "UK English Male", {rate: 1.5});//default functionality with UK English Male voice with a sample rate of 1.5
    // responsiveVoice.speak("hello world", "", {volume: 1});//default functionality with UK English Male voice with volume 1
    // responsiveVoice.speak("hello world", "UK English Male", {onstart: StartCallback, onend: EndCallback});
});
var texto;
function reproducir(param) {
    // var voz = "Spanish Latin American Female";
    var voz = "US English Female";
    responsiveVoice.speak(""+param,voz);
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


