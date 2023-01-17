
function encriptar(){
 var texto = document.getElementById("cifrar-texto").value.toLowerCase();
 
 var textEncrytp = texto.replace(/e/gi,"enter");
 var textEncrytp = textEncrytp.replace(/i/gi,"ines");
 var textEncrytp = textEncrytp.replace(/o/gi,"ober");
 var textEncrytp = textEncrytp.replace(/a/gi,"ai");
 var textEncrytp = textEncrytp.replace(/u/gi,"ufat");
 
 document.getElementById("textResultado").style.display = "inherit";
 document.getElementById("freepik_stories-search-engines").style.display = "none";
 document.getElementById("textError1").style.display = "none";
 document.getElementById("textError01").style.display = "none";
 document.getElementById("textResultado").innerHTML = textEncrytp;
 document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar(){
 var texto = document.getElementById("cifrar-texto").value.toLowerCase();
 
 var textEncrytp = texto.replace(/enter/gi,"e");
 var textEncrytp = textEncrytp.replace(/ober/gi,"o");
 var textEncrytp = textEncrytp.replace(/ines/gi,"i");
 var textEncrytp = textEncrytp.replace(/ai/gi,"a");
 var textEncrytp = textEncrytp.replace(/ufat/gi,"u");
 
 document.getElementById("textResultado").style.display = "inherit";
 document.getElementById("freepik_stories-search-engines").style.display = "none";
 document.getElementById("textError1").style.display = "none";
 document.getElementById("textError01").style.display = "none";
 document.getElementById("textResultado").innerHTML = textEncrytp;
 document.getElementById("btn-copiar").style.display = "inherit";
}

function copiar(){
  document.getElementById("textResultado").select();
  document.execCommand("copy");
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Se ha copiado el Mensaje',
    showConfirmButton: false,
    timer: 1500
  })
}
