window.addEventListener("load",inicio);

function inicio(){

    document.querySelector("#btncalcular").addEventListener("click",calcular)


}

function calcular(){


    let importe = parseInt (document.querySelector("#importe").value)
    let porcentaje = parseInt (document.querySelector("#porcentaje").value)
    

let resultadoporcentaje = importe*(porcentaje/100) 

let calcular = importe + resultadoporcentaje

document.querySelector("#resultado").textContent = "resultado: " + calcular 

}