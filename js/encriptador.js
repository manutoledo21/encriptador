// e - enter
// o - ober
// i - imes
// a - ai
// u - ufat

function encriptar() {
    var text = document.getElementById("inputText").value.toLowerCase();
    //para que afecte tanto a mayus como minus -- e o E
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var textCifrado = text.replace(/e/igm, "enter"); 
    var textCifrado = textCifrado.replace(/o/igm, "ober"); 
    var textCifrado = textCifrado.replace(/i/igm, "imes"); 
    var textCifrado = textCifrado.replace(/a/igm, "ai"); 
    var textCifrado = textCifrado.replace(/u/igm, "ufat");
    

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-1").style.display = "none";
    document.getElementById("text-2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    
}

function desencriptar() {
    var text = document.getElementById("inputText").value.toLowerCase();
    //para que afecte tanto a mayus como minus -- e o E
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafos
    var textCifrado = text.replace(/enter/igm, "e"); 
    var textCifrado = textCifrado.replace(/ober/igm, "o"); 
    var textCifrado = textCifrado.replace(/imes/igm, "i"); 
    var textCifrado = textCifrado.replace(/ai/igm, "a"); 
    var textCifrado = textCifrado.replace(/ufat/igm, "u");
    

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-1").style.display = "none";
    document.getElementById("text-2").innerHTML = textCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    
}

function copy() {
    var contenido = document.querySelector("#text-2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}
