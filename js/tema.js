

// ---------------------------------------------------------------
// BOTON MODO OSCURO
// Evento: click
// DOM: getElementsByClassName(), element.innerText
// ---------------------------------------------------------------

let textoClaro = "\u{2600} Modo claro";
let textoOscuro = "\u{263D} Modo oscuro";
let botonTema = document.getElementsByClassName("boton-tema")[0];

botonTema.addEventListener("click", function() {
  console.log("Cambio de tema");
  if (this.innerText == textoOscuro) {
    document.body.style.backgroundColor = "#151819";
    document.body.style.color = "white"
    for (elem of document.querySelectorAll("input:not(.btn),textarea")) {
      elem.style.backgroundColor = "#151819";
      elem.style.color = "white";
    }
    this.innerText = textoClaro;
  }
  else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#151819";
    for (elem of document.querySelectorAll("input:not(.btn),textarea")) {
      elem.style.backgroundColor = "white";
      elem.style.color = "#151819";
    }
    this.innerText = textoOscuro;
  }
});