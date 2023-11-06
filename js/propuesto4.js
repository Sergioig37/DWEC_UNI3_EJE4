window.addEventListener("load", cargaManejadores);

function cargaManejadores() {
   /* 
   //Podemos añadir los escuchadores primero a los perros y luego a los gatos, o bien seleccionarlos a la vez
    
   var perros = document.getElementsByClassName("perro");
    for (let e of perros) {
            e.addEventListener('click', hasclicadoundiv);
    }
    var gatos = document.getElementsByClassName("gato");
    for (let e of gatos) {
            e.addEventListener('click', hasclicadoundiv);
    }*/

    let animales = document.querySelectorAll(".gato,.perro");
    Array.from(animales).forEach(a=>a.addEventListener('click', hasclicadoundiv))
}

function hasclicadoundiv(evento) {
    var elem = evento.target;

    //primero modificamos la parte verde
    document.getElementById("ultimo").innerText = 
                                     elem.className;   


       //m es la caja rosa con las pulsaciones
      let m=elem.parentNode.querySelector(".mensaje"); //otra forma: let m=elem.parentNode.getElementsByClassName("mensaje")[0];
    
      if (m.innerText == "Sin pulsaciones")
            m.innerText = 1;
        else
            m.innerText = parseInt(m.innerText) + 1;
}