window.addEventListener("load", init); 

function queAnimal(animal) {
    document.getElementById("ultimo").innerHTML = "<h1>" +animal +"</h1>";
}

function manejadora(e) {
    if (e.target.class == "perro") {
        aumentarContador(e.target.class);
        queAnimal(e.target.class);
    } else if (e.target.class == "gato") {
        aumentarContador(e.target.class);
        queAnimal();
    }
}

function aumentarContador(animal){
    if(document.getElementByClassName(animal).nextSibling != "Sin pulsaciones"){
        document.getElementByClassName(animal).nextSibling.innerHTML +=1;
    } 
    else{
        document.getElementById(animal).nextSibling = 0;
    }
}

function init(){
    document.getElementsByClassName("perro").addEventListener("click", manejadora(), false);
    document.getElementsByClassName("gato").addEventListener("click", manejadora(), false);
}
 
