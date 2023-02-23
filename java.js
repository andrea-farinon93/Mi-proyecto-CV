
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

  function validarform() {
    let x = document.forms["formulario"]["input"].value;
    if (x == "") {
      alert("*Completar todos los campos");
      return false;
    }
  }


 document.getElementsByTagName("input").oninput = function() {myFunction()};

  function myFunction() {
    document.getElementsByTagName("label").innerHTML = "The value of the input field was changed.";
  }

  /*

const v = document.querySelectorAll(".forminput");
for (let i = 0; i < v.length; i++) {
    v[i].addEventListener('input', modificar);
}

function modificar() {
    document.querySelectorAll(".formlabel").style.display='none';
}





/*{modificar()};

  function modificar() {
    x.getElementsByTagName("formlabel").innerHTML = "The value of the input field was changed.";
  }


/*
function fijar () {
    var value = document.getElementsByClassName('forminput').value;
    if (value.length>=3) {
       return false;
    }
    else {
        return true;
    }
}
    fijar( )
            
    
    
    
    /*
    
    labels.style.setProperty ("margin-top", "-110px");
        } else {
            labels.style.setProperty ("margin-top", "0px");
        }
    })



/*

fijarlabel ()




ul.style.setProperty("background-color", "#6ab+*/