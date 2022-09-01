window.addEventListener("load", inicio);

let cantidad = 0;


function inicio(){

document.querySelector("#BtnMostrar").addEventListener("click", mostrar)
}
function mostrar(){

    cantidad = cantidad +3

   
document.querySelector("#resultado").innerHTML = "resultado:" + cantidad


}