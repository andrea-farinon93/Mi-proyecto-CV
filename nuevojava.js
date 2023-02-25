//ocultar y mostrar formulario//
function ocultar (){
    document.getElementById('formulario').style.display= 'none';
}

ocultar()

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
  correo: /^[^]{1,100}$/,
  telefono: /^[a-zA-ZÁ-ÿ\s]{1,15}$/,
  mensaje: /^[^]{1,100}$/,
}


const campos ={
  nombre: false,
  email: false,
  telefono: false,
  mensaje: false
}

const validarformulario=(e) => {
 switch (e.target.name) {
    case "nombre":
      validarcampo (expresiones.nombre, e.target, 'nombre');
      break;
    case "email":
      validarcampo (expresiones.correo, e.target, 'email');
      break;
    case "telefono":
      validarcampo (expresiones.telefono, e.target, 'telefono');
      break;
    case "mensaje":
      validarcampo (expresiones.mensaje, e.target, 'mensaje');
      break;
    }
  }
    
    const validarcampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
    document.getElementById(`grupo_${campo}`).classList.remove('grupo_incorrecto');
    document.getElementById(`grupo_${campo}`).classList.add('grupo_correcto');
    document.querySelector(`#grupo_${campo} .advertencia`).classList.remove('advertencia_activo');
    document.querySelector(`#grupo_${campo} i`).classList.add('validacion_activo','material-symbols-outlined');
    document.querySelector(`#grupo_${campo} i`).classList.remove('validacion');
    campos[campo] = true;
    } else {
    document.getElementById(`grupo_${campo}`).classList.add('grupo_incorrecto');
    document.getElementById(`grupo_${campo}`).classList.remove('grupo_correcto');
    document.querySelector(`#grupo_${campo} .advertencia`).classList.add('advertencia_activo');
    document.querySelector(`#grupo_${campo} i`).classList.remove('validacion_activo', 'material-symbols-outlined');
    document.querySelector(`#grupo_${campo} i`).classList.add('validacion');
    campos[campo] = false;
    } }

inputs.forEach((input) => {
  input.addEventListener('keyup', validarformulario);
  input.addEventListener('blur', validarformulario);
});



formulario.addEventListener('submit', (e) => {
  e.preventDefault(); 
      if (campos.nombre && campos.email && campos.telefono && campos.mensaje) {
formulario.reset (); 
      document.querySelector('#mensaje p').classList.add('exito_activo'); 
      setTimeout (() => {
        document.querySelector('#mensaje p').classList.remove('exito_activo');
        document.querySelector('#mensaje p').classList.add('exito');

      }, 5000);
      document.querySelector('#mensaje p').classList.remove('exito'); 
      document.querySelector('#Error_mensaje p').classList.remove('error_activo'); 
      document.querySelector('#Error_mensaje p').classList.add('error'); 
      document.querySelector('#Error_mensaje i').classList.remove('stop_activo', 'material-symbols-outlined'); 
      document.querySelector('#Error_mensaje i').classList.add('stop'); 
      /*document.querySelectorAll('.grupo').forEach ((icono) => {
      icono.style.display= 'none';
      });*/
    
} else {
  document.querySelector('#Error_mensaje p').classList.add('error_activo');
  document.querySelector('#Error_mensaje i').classList.add('stop_activo', 'material-symbols-outlined'); 
  setTimeout (() => {
  document.querySelector('#Error_mensaje p').classList.remove('error_activo'); 
  document.querySelector('#Error_mensaje p').classList.add('error'); 
  document.querySelector('#Error_mensaje i').classList.remove('stop_activo', 'material-symbols-outlined'); 
  document.querySelector('#Error_mensaje i').classList.add('stop'); 
}, 5000);
document.querySelectorAll('.grupo i').classList.remove('validacion_activo', 'material-symbols-outlined'); 
document.querySelectorAll('.grupo i').classList.add('validacion');
}});
