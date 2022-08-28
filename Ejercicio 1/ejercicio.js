window.addEventListener("load",inicio);


function inicio () {

    document.querySelector("#btnEnviarbutton").addEventListener("click", mostrarnombre);
    //ej1
   

}
    
function mostrarnombre() {
    
let Nombre = document.querySelector("#nombre").value
let apellido = document.querySelector("#apellido").value
let mostrarnombre = apellido + " " + Nombre
alert (mostrarnombre)

console.log(mostrarnombre)
document.querySelector("presultado").innerHTML = mostrarnombre

}







