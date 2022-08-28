window.addEventListener("load",inicio);

function inicio (){


document.querySelector("#btncalcular").addEventListener("click",Calcular)



}

function Calcular (){

    let valor1 = parseInt (document.querySelector("#valor1").value)
    let valor2 = parseInt (document.querySelector("#valor2").value)
    console.log("valores obtenidos");

    let resultadomultiplicacion = valor1 * valor2;
    let resultadosuma = valor1 + valor2;
    console.log("Resultado suma: "+ resultadosuma)
    console.log("Resultado multiplicacion: "+ resultadomultiplicacion)

    document.querySelector("#mostrarsuma").textContent = "Resultado suma: " + resultadosuma

document.querySelector("#mostrarmultiplicacion").textContent = "Resultado multiplicacion: " + resultadomultiplicacion

}
