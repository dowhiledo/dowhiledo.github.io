/**
 * Created by d8user on 11/12/2017.
 */




var lista = [];
//lista.push(new frase("I was a student", "Fui/era un estudiante", 0));
lista.push(new frase("I was studying", "Estuve/estaba estudiando", 0));
lista.push(new frase("I will be a student", "Seré un estudiante", 0));
lista.push(new frase("I will be studying", "Estaré estudiando", 0));
lista.push(new frase("I would be a student", "Sería un estudiante", 0));
lista.push(new frase("I would be studying", "Estaría estudiando", 0));
lista.push(new frase("I have been a student", "He sido un estudiante", 0));
lista.push(new frase("I have been studying", "He estado estudiando", 0));
lista.push(new frase("I had been a student", "Había sido un estudiante", 0));
lista.push(new frase("I had been studying", "Había estado estudiando", 0));
lista.push(new frase("I will have been a student", "Habré sido un estudiante", 0));
lista.push(new frase("I will have been studying", "Habré estado estudiando", 0));
lista.push(new frase("I would have been a student", "Habría sido un estudiante", 0));
lista.push(new frase("I would have been studying", "Habría estado estudiando", 0));

function aleatorio(){
    var min = 0;
    var max = 13;
    return Math.floor(Math.random() * (max - min + 1) + min);
}


$("#eng").click(function () {
    reproducir(lista[aleN].eng,0);
});


$("#spa").click(function () {
    reproducir(lista[aleN].spa,1);
});

$("#next").click(function () {
    aleN = aleatorio();
    reproducir(lista[aleN].eng,0);

    $("#mostrarTexto").html("-------------");
    band = true;
});

var band = true;
$("#mostrarTexto").click(function () {

    if(band) {
        var e = lista[aleN].eng;
        var s = lista[aleN].spa;

        var textoMostrar = e + "<br>" + s;
        $("#mostrarTexto").html(textoMostrar);
        band = false;
    }else{
        $("#mostrarTexto").html("-------------");
        band = true;
    }


});




function frase(eng, spa, ndif) {

        this.eng = eng;
        this.spa = spa;
        this.ndif = ndif;
}

var aleN = aleatorio();
