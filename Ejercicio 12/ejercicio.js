window.addEventListener("load",inicio);

function inicio(){

    document.querySelector("#btncalcular").addEventListener("click",calcular)


}

function calcular(){


    let peso = parseInt (document.querySelector("#peso").value)
    let altura = parseInt (document.querySelector("#altura").value)
    
let  ctmtsamts = altura/100

let imctotal = peso / (ctmtsamts * ctmtsamts)

document.querySelector("#resultado").innerHTML =("resultado") + imctotal


//document.querySelector("#resultado").textContent = "resultado: " + calcular 

}