//Para agregar el clic en el div entero que contiene el perro/gato y el párrafo
function cargaManejadores() {
    let animales = document.querySelectorAll(".animal");
    for (let i of animales) 
            i.addEventListener('click', hasclicadoundiv);
}

function hasclicadoundiv(evento) {
    let elem = evento.currentTarget;
    if (elem.className=="animal"){
    let pulsaciones=elem.querySelector(".mensaje");

    if (pulsaciones.innerText == "Sin pulsaciones")
        pulsaciones.innerText = 1;
    else
        pulsaciones.innerText = parseInt(pulsaciones.innerText) + 1;
    
    let texto = elem.querySelector(".perro, .gato").className;
   //otra forma: let texto = elem.childNodes.item(1).className;
    
    if (texto != "")
        document.getElementById("ultimo").innerText = texto;
    }
}

window.addEventListener("load", cargaManejadores);