
function ocultar (){
    document.getElementById('formulario').style.display= 'none';
}

ocultar()

var abrir=document.getElementById('abrir');
var cancelar=document.getElementsByClassName('cancelar');

abrir.addEventListener("click", function() {
    document.getElementById('formulario').style.display= 'block';
  });



  
cancelar.addEventListener ("click", function() {
    document.getElementById('formulario').style.display= 'none';
  });



 
 



  function validar() {
    let x = document.forms["formulario"]["input"].value;
    if (x == "") {
      alert("*Completar todos los campos");
      return false;
    }
  }

  validar()
  























  var mio = document.getElementById("mio");



  