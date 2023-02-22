
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