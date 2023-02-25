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
const formulario=document.getElementById('formulario');
const inputs=document.querySelectorAll('#formulario input')
const expresiones= {
  nombre:/^[a-zA-ZÁ-ÿ\s]{1,15}$/,
  correo: /^ ( [ A - Za - z0 - 9 _\ - \. ] ) + \@ ( [ A - Za - z0 - 9 _\ - \. ] ) + \. ([ A - Za - z ] { 2 , 4 } ) $ /,
  telefono: /^\d{7,14}$/,
  mensaje: /^[a-zA-ZÁ-ÿ\s]{1,100}$/,
}


const validarformulario=(e) => {
 switch (e.target.name) {
    case "nombre":
      if (expresiones.nombre.test(e.target.value)) {
        document.getElementById('grupo_nombre').classList.remove('grupo_incorrecto');
        document.getElementById('grupo_nombre').classList.add('grupo_correcto');
        document.querySelector('#grupo_nombre .advertencia').classList.remove('advertencia_activo');
        document.querySelector('#grupo_nombre i').classList.add('validacion_activo');
        document.querySelector('#grupo_nombre i').classList.remove('validacion');



      } else {
        document.getElementById('grupo_nombre').classList.add('grupo_incorrecto');
        document.getElementById('grupo_nombre').classList.remove('grupo_correcto');
        document.querySelector('#grupo_nombre .advertencia').classList.add('advertencia_activo');
        document.querySelector('#grupo_nombre i').classList.remove('validacion_activo');
        document.querySelector('#grupo_nombre i').classList.add('validacion');

      }

      break;
    case "email":
      

      break;
    case "tel":
      

      break;
    case "mensaje":
      

      break;
 }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarformulario);
  input.addEventListener('blur', validarformulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); 
});