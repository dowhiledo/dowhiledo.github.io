/**
 * Created by d8user on 11/12/2017.
 */




var lista = [];
//lista.push(new frase("I was a student", "Fui/era un estudiante", 0));
// lista.push(new frase("I was studying", "Estuve/estaba estudiando", 0));
// lista.push(new frase("I will be a student", "Seré un estudiante", 0));
// lista.push(new frase("I will be studying", "Estaré estudiando", 0));
// lista.push(new frase("I would be a student", "Sería un estudiante", 0));
// lista.push(new frase("I would be studying", "Estaría estudiando", 0));
// lista.push(new frase("I have been a student", "He sido un estudiante", 0));
// lista.push(new frase("I have been studying", "He estado estudiando", 0));
// lista.push(new frase("I had been a student", "Había sido un estudiante", 0));
// lista.push(new frase("I had been studying", "Había estado estudiando", 0));
// lista.push(new frase("I will have been a student", "Habré sido un estudiante", 0));
// lista.push(new frase("I will have been studying", "Habré estado estudiando", 0));
// lista.push(new frase("I would have been a student", "Habría sido un estudiante", 0));
// lista.push(new frase("I would have been studying", "Habría estado estudiando", 0));


//lista.push(new frase("I was a student", "Fui/era un estudiante", 0));
lista.push(new frase("I have lost my purse", "Estuve/estaba estudiando", 0));
lista.push(new frase("We have seen this movie already", "Seré un estudiante", 0));
lista.push(new frase("He has broken his leg", "Estaré estudiando", 0));
lista.push(new frase("There has been an accident", "Sería un estudiante", 0));
lista.push(new frase("We haven't seen her today", "Estaría estudiando", 0));
lista.push(new frase("They have been to the mall twice this month", "He sido un estudiante", 0));
lista.push(new frase("She has watched that show three times this week", "He estado estudiando", 0));
lista.push(new frase("The children have made a mess in the kitchen", "Había sido un estudiante", 0));
lista.push(new frase("He has started a new job", "Había estado estudiando", 0));
lista.push(new frase("She has finished her chores", "Habré sido un estudiante", 0));
lista.push(new frase("Where have I left my sandals?", "Habré estado estudiando", 0));
lista.push(new frase("Have you visited England?", "Habría sido un estudiante", 0));
lista.push(new frase("Has she met John?", "Habría estado estudiando", 0));



function aleatorio() {
    var min = 0;
    var max = 13;
    return Math.floor(Math.random() * (max - min + 1) + min);
}


$("#eng").click(function () {
    reproducir(lista[aleN].eng, 0);
});


$("#spa").click(function () {
    reproducir(lista[aleN].spa, 1);
});

$("#next").click(function () {
    aleN = aleatorio();
    reproducir(lista[aleN].eng, 0);

    $("#mostrarTexto").html("-------------");
    band = true;
});

var band = true;
$("#mostrarTexto").click(function () {

    if (band) {
        var e = lista[aleN].eng;
        var s = lista[aleN].spa;

        var textoMostrar = e + "<br>" + s;
        $("#mostrarTexto").html(textoMostrar);
        band = false;
    } else {
        $("#mostrarTexto").html("-------------");
        band = true;
    }


});

/* - - - - - - - - - - - - - - - - - - - - - - */
function frase(eng, spa, ndif) {

    this.eng = eng;
    this.spa = spa;
    this.ndif = ndif;
}

function sentencia(person, hh) {

}
/* - - - - - - - - - - - - - - - - - - - - - - */
var aleN = aleatorio();

//
// var texton;
// texton = "Danc in ";

// jQuery.get('/fichero.txt', function (result) {
//     if (result == 'ON') {
//         alert('ON');
//     } else if (result == 'OFF') {
//         alert('OFF');
//     } else {
//         alert(result);
//     }
// });