window.addEventListener("load", inicio);

let cantidad = 0;

function inicio(){

    
    
document.querySelector("#btnMostrar"),addEventListener("click", mostrarNombre)
   
document.querySelector("#btnDoyclick"),addEventListener("click", contarClicks)

   
    
}

function contarClicks(){

    cantidad = cantidad +1

    document.querySelector("#resclick").innerHTML = "resultado :" +  cantidad

}

function mostrarNombre(){

    let nombre = document.querySelector("#nombre").value;
    document.querySelector("#texto ").innerHTML = "texto " + nombre

}
