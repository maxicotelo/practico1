window.addEventListener("load",inicio);

function inicio(){


document.querySelector("#btncalcular").addEventListener("click",calcular)
}

function calcular(){

    let valor1 = parseInt (document.querySelector("#valor1").value)
    let valor2 = parseInt (document.querySelector("#valor2").value)
    
let calcular = valor1  %  valor2 

document.querySelector("#resto").textContent = "calcular: " + calcular

}