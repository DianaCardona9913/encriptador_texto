


function encriptar(){

    let textoInput= document.getElementById('textArea');
    let textoEncriptar = textoInput.value.toLowerCase();
    let respuesta= document.getElementById('response').value;

    //crear variables para reemplazar las vocales
    let textoVocal= textoEncriptar.replace(/e/igm,"enter");
    textoVocal= textoVocal.replace(/o/igm,"ober");
    textoVocal= textoVocal.replace(/i/igm,"ines");
    textoVocal= textoVocal.replace(/a/igm,"ai");
    textoVocal= textoVocal.replace(/u/igm,"ufat");

    document.getElementById('icon').style.display= "none";
    document.getElementById('NoText').style.display="none";
    document.getElementById('response').innerHTML=textoVocal;
    document.getElementById('copiar').style.display="inline-block";
}

function desencriptar(){

    let textoInput= document.getElementById('textArea');
    let textoEncriptar = textoInput.value.toLowerCase();
    let respuesta= document.getElementById('response').value;

    let textoVocal= textoEncriptar.replace(/enter/igm,"e");
    textoVocal= textoVocal.replace(/ober/igm,"o");
    textoVocal= textoVocal.replace(/ines/igm,"i");
    textoVocal= textoVocal.replace(/ai/igm,"a");
    textoVocal= textoVocal.replace(/ufat/igm,"u");

    document.getElementById('icon').style.display= "none";
    document.getElementById('NoText').style.display="none";
    document.getElementById('response').innerHTML=textoVocal;
    document.getElementById('copiar').style.display="inline-block";

}

function copiar(){
    let textResponse = document.getElementById('response');

    let range = document.createRange();
    range.selectNodeContents(textResponse);

    let seleccionText= window.getSelection();
    seleccionText.removeAllRanges();
    seleccionText.addRange(range);

    document.execCommand("copy");
}