
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



  

  validarcampo (expresiones.nombre, e.target, 'nombre');
  break;
case "email":
  validarcampo (expresiones.correo, e.target, 'email');
  break;
case "tel":
  validarcampo (expresiones.telefono, e.target, 'tel');
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
} else {
document.getElementById(`grupo_${campo}`).classList.add('grupo_incorrecto');
document.getElementById(`grupo_${campo}`).classList.remove('grupo_correcto');
document.querySelector(`#grupo_${campo} .advertencia`).classList.add('advertencia_activo');
document.querySelector(`#grupo_${campo} i`).classList.remove('validacion_activo', 'material-symbols-outlined');
document.querySelector(`#grupo_${campo} i`).classList.add('validacion');
} }





if (expresiones.nombre.test(e.target.value)) {
  document.getElementById('grupo_nombre').classList.remove('grupo_incorrecto');
  document.getElementById('grupo_nombre').classList.add('grupo_correcto');
  document.querySelector('#grupo_nombre .advertencia').classList.remove('advertencia_activo');
  document.querySelector('#grupo_nombre i').classList.add('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_nombre i').classList.remove('validacion');
  document.querySelector('#grupo_nombre .advertencia').classList.remove('.advertencia_activado');

} else {
  document.getElementById('grupo_nombre').classList.add('grupo_incorrecto');
  document.getElementById('grupo_nombre').classList.remove('grupo_correcto');
  document.querySelector('#grupo_nombre .advertencia').classList.add('advertencia_activo');
  document.querySelector('#grupo_nombre i').classList.remove('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_nombre i').classList.add('validacion');
  document.querySelector('#grupo_nombre .advertencia').classList.add('.advertencia_activado');
}
break;

case "email":
if (expresiones.correo.test(e.target.value)) {
  document.getElementById('grupo_email').classList.remove('grupo_incorrecto');
  document.getElementById('grupo_email').classList.add('grupo_correcto');
  document.querySelector('#grupo_email .advertencia').classList.remove('advertencia_activo');
  document.querySelector('#grupo_email i').classList.add('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_email i').classList.remove('validacion');
  document.querySelector('#grupo_email .advertencia').classList.remove('.advertencia_activado');

} else {
  document.getElementById('grupo_email').classList.add('grupo_incorrecto');
  document.getElementById('grupo_email').classList.remove('grupo_correcto');
  document.querySelector('#grupo_email .advertencia').classList.add('advertencia_activo');
  document.querySelector('#grupo_email i').classList.remove('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_email i').classList.add('validacion');
  document.querySelector('#grupo_email .advertencia').classList.add('.advertencia_activado');
}
break;
case "mensaje":
if (expresiones.mensaje.test(e.target.value)) {
  document.getElementById('grupo_mensaje').classList.remove('grupo_incorrecto');
  document.getElementById('grupo_mensaje').classList.add('grupo_correcto');
  document.querySelector('#grupo_mensaje .advertencia').classList.remove('advertencia_activo');
  document.querySelector('#grupo_mensaje i').classList.add('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_mensaje i').classList.remove('validacion');
  document.querySelector('#grupo_mensaje .advertencia').classList.remove('.advertencia_activado');

} else {
  document.getElementById('grupo_mensaje').classList.add('grupo_incorrecto');
  document.getElementById('grupo_mensaje').classList.remove('grupo_correcto');
  document.querySelector('#grupo_mensaje .advertencia').classList.add('advertencia_activo');
  document.querySelector('#grupo_mensaje i').classList.remove('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_mensaje i').classList.add('validacion');
  document.querySelector('#grupo_mensaje .advertencia').classList.add('.advertencia_activado');
}
break;
case "telefono":
if (expresiones.telefono.test(e.target.value)) {
  document.getElementById('grupo_telefono').classList.remove('grupo_incorrecto');
  document.getElementById('grupo_telefono').classList.add('grupo_correcto');
  document.querySelector('#grupo_telefono .advertencia').classList.remove('advertencia_activo');
  document.querySelector('#grupo_telefono i').classList.add('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_telefono i').classList.remove('validacion');
  document.querySelector('#grupo_telefono .advertencia').classList.remove('.advertencia_activado');

} else {
  document.getElementById('grupo_telefono').classList.add('grupo_incorrecto');
  document.getElementById('grupo_telefono').classList.remove('grupo_correcto');
  document.querySelector('#grupo_telefono .advertencia').classList.add('advertencia_activo');
  document.querySelector('#grupo_telefono i').classList.remove('validacion_activo', 'material-symbols-outlined');
  document.querySelector('#grupo_telefono i').classList.add('validacion');
  document.querySelector('#grupo_telefono .advertencia').classList.add('.advertencia_activado');
}
break;






}
}