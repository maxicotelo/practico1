window.addEventListener("load",inicio);

function inicio(){

    document.querySelector("#btncalcular").addEventListener("click",calcular)


}

function calcular(){


    let subtotal = parseInt (document.querySelector("#subtotal").value)
    let porcentaje = 22
    

let resultadoporcentaje = subtotal*(porcentaje/100) 

let calcular = subtotal + resultadoporcentaje

document.querySelector("#resultado").textContent = "resultado: " + calcular 

}