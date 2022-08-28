window.addEventListener("load",inicio);


function inicio () {

   
    document.querySelector("#btncalcularsuma").addEventListener("click", resultadocuenta);

    

}
    


function resultadocuenta (){

    let valor1 = parseInt (document.querySelector("#valor1").value)
    let valor2 = parseInt (document.querySelector("#valor2").value)
    let resultadocuenta = valor1 + valor2
alert (resultadocuenta)

}




