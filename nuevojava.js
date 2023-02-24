//ocultar y mostrar formulario//
/*function ocultar (){
    document.getElementById('formulario').style.display= 'none';
}

ocultar()*/

var abrir=document.getElementById('abrir');
abrir.addEventListener("click", function() {
    document.getElementById('formulario').style.display= 'block';
  });


var cancelar=document.getElementById('cancelar');

cancelar.addEventListener("click", function() {
    document.getElementById('formulario').style.display= 'none';
  });

//validación formulario//

