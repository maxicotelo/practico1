window.addEventListener("load",inicio);


function inicio () {

    

    document.querySelector("#btncalcular").addEventListener("click", resultado);

}
    


function resultado (){

    let valor3 = parseInt (document.querySelector("#valor3").value)
    let valor4 = parseInt (document.querySelector("#valor4").value)
    let valor5 = parseInt (document.querySelector("#valor5").value)
    let resultado = valor3 + valor4 + valor5
alert (resultado)

}



