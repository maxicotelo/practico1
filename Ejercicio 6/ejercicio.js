window.addEventListener("load",inicio);

function inicio(){

document.querySelector("#btnconversion").addEventListener("click",conversion)



}

function conversion(){

    let valorenpesos = parseInt (document.querySelector("#valorenpesos").value)
    let tipodecambio = parseInt (document.querySelector("#tipodecambio").value)
    
    
    let conversion = valorenpesos / tipodecambio



document.querySelector("#resultado").textContent = "conversion: " + conversion

console.log("algo")

}