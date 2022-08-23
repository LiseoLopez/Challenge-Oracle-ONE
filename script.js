function encriptar(){
    var texto=document.getElementById("inputTexto").value.toLowerCase(); //mayusculas y minusculas
    var tcifrado = texto.replace(/e/igm,"enter");
    var tcifrado = tcifrado.replace(/o/igm,"ober");
    var tcifrado = tcifrado.replace(/i/igm,"imes");
    var tcifrado = tcifrado.replace(/a/igm,"ai");
    var tcifrado = tcifrado.replace(/u/igm,"ufat");
document.getElementById("imgDerecha").style.display="none";
document.getElementById("texto").style.display="none";
document.getElementById("texto2").innerHTML= tcifrado;
document.getElementById("copiar").style.display="show";
document.getElementById("copiar").style.display="inherit";
}
function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var tcifrado = texto.replace(/enter/igm,"e");
    var tcifrado = tcifrado.replace(/ober/igm,"o");
    var tcifrado = tcifrado.replace(/imes/igm,"i");
    var tcifrado = tcifrado.replace(/ai/igm,"a");
    var tcifrado = tcifrado.replace(/ufat/igm,"u");

document.getElementById("imgDerecha").style.display="none";
document.getElementById("texto").style.display="none";
document.getElementById("texto2").innerHTML= tcifrado;
document.getElementById("copiar").style.display="show";
document.getElementById("copiar").style.display="inherit";
}

function copiar(){
    var contenido= document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("copiado");
}