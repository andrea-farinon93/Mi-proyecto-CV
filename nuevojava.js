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
  nombre:/^[a-zA-ZÁ]{5,30}$/,
  correo: /^(.+)@(.+){1,5}\.\S+$/,
  telefono: /^([0-9])*$/,
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

      }, 4000);
      setTimeout (() => {
      formulario.style.display='none'},5000);
      document.querySelector('#mensaje p').classList.remove('exito'); 
      document.querySelector('#Error_mensaje p').classList.remove('error_activo'); 
      document.querySelector('#Error_mensaje p').classList.add('error'); 
      document.querySelector('#Error_mensaje i').classList.remove('stop_activo', 'material-symbols-outlined'); 
      document.querySelector('#Error_mensaje i').classList.add('stop'); 
      document.querySelectorAll('div.eliminar').forEach ((icono) => {
      icono.style.display= 'none';
      });
    
} else {

  document.querySelector('#Error_mensaje p').classList.add('error_activo');
  document.querySelector('#Error_mensaje i').classList.add('stop_activo', 'material-symbols-outlined'); 
  setTimeout (() => {
  document.querySelector('#Error_mensaje p').classList.remove('error_activo'); 
  document.querySelector('#Error_mensaje p').classList.add('error'); 
  document.querySelector('#Error_mensaje i').classList.remove('stop_activo', 'material-symbols-outlined'); 
  document.querySelector('#Error_mensaje i').classList.add('stop'); 
}, 5000);

}});



//llamando a Random User Generador API//
const foto= document.querySelector('#perfil');
const correo= document.querySelector('#correo');
const telefono= document.querySelector('#tel');
const nombre=document.querySelector('#nombre');
const apellido=document.querySelector('#apellido');
const edad=document.querySelector('#edad');
const ciudad=document.querySelector('#ciudad');
const estado=document.querySelector('#estado');
const pais=document.querySelector('#pais');


const generarusuario= async() => {
  const url= 'https://randomuser.me/api/?nat=es&gender=female'
  const respuesta= await fetch (url);
  const {results} = await respuesta.json();
  const datos= results [0];
  foto.src=datos.picture.medium
  correo.textContent = datos.email
  nombre.textContent = datos.name.first
  apellido.textContent = datos.name.last
  telefono.textContent= datos.phone
  edad.textContent = datos.dob.age
  ciudad.textContent = datos.location ['city']
  estado.textContent = datos.location ['state']
  pais.textContent = datos.location ['country']
  
}

document.addEventListener('DOMContentLoaded', generarusuario)


        
        
   
