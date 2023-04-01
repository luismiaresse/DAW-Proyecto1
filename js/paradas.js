

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

$(".sitios-parada img, .sitio-destacado img").mouseover(function() {

  //console.log($(this).parents("figure").find("p").text())

  $(this).css(imagenDifuminada);
  $(this).parents("figure").find("p").css(textoVisible);
});


// ---------------------------------------------------------------
// OPACAR IMAGEN Y OCULTAR TEXTO
// JQuery: parents(), find(), text(), css()
// ---------------------------------------------------------------

$(".sitios-parada img, .sitio-destacado img").mouseout(function() {

  $(this).css(imagenOpaca);
  $(this).parents("figure").find("p").css(textoOculto);
});


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

$(".sitios-parada img").mouseover(function() {

  let nombreLocal = $(this).parent().parent().find("h4,h5").html()

  console.log(nombreLocal)

  fetch('../ajax/links.json')
  .then(response => response.json())
  .then(data => $(this).parent().attr('href', obtenerLink(data, nombreLocal)))
});
