window.addEventListener("load",inicio);

function inicio(){

document.querySelector("#calcular").addEventListener("click",calcular )


}

function calcular() {

let lado = parseInt(document.querySelector("#lado").value)

let resultado = lado * lado

document.querySelector("#resultado").textContent = "area de cuadrado: " + resultado
}