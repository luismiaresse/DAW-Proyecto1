

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
  primero.innerHTML = "<figure><h5>La Galiciana (Santiago)</h5><a><img src='../img/santiago/la-galiciana.jpg' alt='La Galiciana'></a><p>Disfruta de los mejores sabores santiagueses.</p></figure>";
  let segundo = document.createElement("div");
  segundo.classList.add("col-sm");
  segundo.innerHTML = "<figure><h5>Bar Gaucho (Pamplona)</h5><a><img src='../img/pamplona/bar-gaucho.JPG' alt='Bar Gaucho'></a><p>Uno de los máximos exponentes de la cocina en miniatura navarra.</p></figure>";
  let tercero = document.createElement("div");
  tercero.classList.add("col-sm");
  tercero.innerHTML = "<figure><h5>Casa Mando (León)</h5><a><img src='../img/leon/casa-mando.jpg' alt='Casa Mando'></a><p>Productos de la tierra de alta calidad.</p></figure>";
  lista.appendChild(primero);
  lista.appendChild(segundo);
  lista.appendChild(tercero);
  lista.style.visibility = "visible";
  botonCargarSitios.style.visibility = "hidden";
  // Se debe volver a asignar el evento a los nuevos elementos
  $(".sitios-parada img, .sitio-destacado img").mouseover(difuminarImagen);
  $(".sitios-parada img, .sitio-destacado img").mouseout(restaurarImagen);
  $(".sitios-parada img").mouseover(setImageLinks);
  $(".sitios-parada figure p").css(textoOculto);
}

if (botonCargarSitios != null) {
  botonCargarSitios.addEventListener("click", cargarMasSitios);
}



let imagenDifuminada = {
  opacity: 0.5,
}

let imagenOpaca = {
  opacity: 1
}

let textoOculto = {
  visibility: "hidden"
}

let textoVisible = {
  visibility: "visible",
  position: 'relative',
  left: '0%'
}

$(".sitios-parada figure p").css(textoOculto);


// ---------------------------------------------------------------
// DIFUMINAR IMAGEN Y MOSTRAR TEXTO
// JQuery: parents(), find(), text(), css()
// ---------------------------------------------------------------

function difuminarImagen() {
  $(this).css(imagenDifuminada);
  $(this).parents("figure").find("p").css(textoVisible);
}

$(".sitios-parada img, .sitio-destacado img").mouseover(difuminarImagen);


// ---------------------------------------------------------------
// OPACAR IMAGEN Y OCULTAR TEXTO
// JQuery: parents(), find(), text(), css()
// ---------------------------------------------------------------

function restaurarImagen() {
  $(this).css(imagenOpaca);
  $(this).parents("figure").find("p").css(textoOculto);
}

$(".sitios-parada img, .sitio-destacado img").mouseout(restaurarImagen);


// ---------------------------------------------------------------
// ASIGNAR LINK A LA IMAGEN DEL SITIO
// JES6: bucle for, variables let
// JSON: links.json (links de los restaurantes)
// JQuery: mouseover(), parent(), find(), html(), attr()
// API Fetch: fetch(), then()
// ---------------------------------------------------------------

let obtenerLink = function (json, nombreLocal){
  for (let key in json) {
    if (key == nombreLocal){
      return json[key];
    }
  }
  return -1;
}


function setImageLinks() {

  let nombreLocal = $(this).parent().parent().find("h4,h5").html()

  console.log(nombreLocal)

  fetch('../ajax/links.json')
  .then(response => response.json())
  .then(data => $(this).parent().attr('href', obtenerLink(data, nombreLocal)))
}

$(".sitios-parada img").mouseover(setImageLinks);
