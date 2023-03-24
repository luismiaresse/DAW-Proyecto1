
// ---------------------------------------------------------------
// MOSTRAR MENÚ
// Evento: mouseover
// DOM: getElementById(), addEventListener(), element.style
// ---------------------------------------------------------------


function mostrarLinks() {
    var lista = document.getElementById("dropdown");
    if (lista.style.display === "none") {
        lista.style.display = "block";
    }
}

var dropbtn = document.getElementById("dropbtn");
dropbtn.addEventListener("mouseover", mostrarLinks);


// ---------------------------------------------------------------
// OCULTAR MENÚ
// Evento: mouseout
// DOM: getElementById(), addEventListener(), element.style
// ---------------------------------------------------------------

function esconderLinks() {
    var lista = document.getElementById("dropdown");
    if (lista.style.display === "block") {
        lista.style.display = "none";
    }
}

dropbtn.addEventListener("mouseout", esconderLinks);


// ---------------------------------------------------------------
// BOTON MODO OSCURO
// Evento: click
// DOM: getElementsByClassName(), element.innerText
// ---------------------------------------------------------------

var boton = document.getElementsByClassName("boton")[0];

//document.getElementsByClassName("boton")[0].addEventListener("click", function(){
boton.addEventListener("click", function(){
  console.log("click")

  if (this.innerText == "Modo oscuro"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
    this.innerText = "Modo claro";
  }
  else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    this.innerText = "Modo oscuro";
  }
});
