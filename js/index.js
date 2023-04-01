


// ---------------------------------------------------------------
// BOTON MOSTRAR MÁS SITIOS
// Evento: click
// DOM: createElement(), classList, innerHTML, appendChild(), style, getElementById(), addEventListener()
// ---------------------------------------------------------------

let botonCargarSitios = document.getElementById("boton-cargar-sitios");

function cargarMasSitios() {
  let lista = document.getElementsByClassName("sitios-ocultos")[0];
  let primero = document.createElement("div");
  primero.classList.add("col-sm");
  primero.innerHTML = "<figure><h3>La Galiciana</h3><p></p><img src='../img/santiago/la-galiciana.jpg' alt='La Galiciana' id='imagen-sitio'></figure>";
  let segundo = document.createElement("div");
  segundo.classList.add("col-sm");
  segundo.innerHTML = "<figure><h3>Pepa a Loba (Santiago)</h3><p>Este céntrico restaurante en la zona vieja de Santiago te embaucará con sus sabores</p><img src='../img/santiago/pepa_a_loba.jpg' alt='Pepa a Loba (Santiago)'></figure>";
  let tercero = document.createElement("div");
  tercero.classList.add("col-sm");
  tercero.innerHTML = "<figure><h3>La Galiciana</h3><img src='../img/santiago/la-galiciana.jpg' alt='La Galiciana' id='imagen-sitio'></figure>";
  lista.appendChild(primero);
  lista.appendChild(segundo);
  lista.appendChild(tercero);
  lista.style.visibility = "visible";
  botonCargarSitios.style.visibility = "hidden";
}

if (botonCargarSitios != null) {
  botonCargarSitios.addEventListener("click", cargarMasSitios);
}


// ---------------------------------------------------------------
// FORMULARIO DE COMENTARIOS
// Función flecha, sintaxis de JES6, expresiones regulares

let comentariosNombre = $("#comentario-nombre");
let comentariosCorreo = $("#comentario-email");
let comentariosComentario = $("#comentario-comentario");

$("#boton-enviar-comentario").click(() => {
  let errorText = "";
  let errorId = 0;
  let errorStyle = {
    "color": "red",
    "display": "block",
    "margin-top": "16px"
  }

  var regex = /\S+@\S+\.\S+/;   // Cadenas con caracter(es)@caracter(es).caracter(es)
  if (!regex.test(comentariosCorreo.val())) {
    errorText = "El correo electrónico no es válido."
    errorId = 2;
  }
  regex = /\S+/;                // Cadenas con al menos un caracter
  if (!regex.test(comentariosComentario.val())) {
    errorText = "El comentario no es válido."
    errorId = 3;
  }
  if (!regex.test(comentariosNombre.val())) {
    errorText = "El nombre no es válido."
    errorId = 1;
  }
  
  if (errorId != 0) {
    $("#error-comentarios").text(errorText);
    $("#error-comentarios").css(errorStyle);
  } else {
    $("#error-comentarios").css("display", "none");
  }
});


