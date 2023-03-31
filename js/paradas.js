
// ---------------------------------------------------------------
// DIFUMINAR IMAGEN Y MOSTRAR TEXTO
// JQuery
// ---------------------------------------------------------------

let imagenDifuminada = {
  opacity: 0.5,
}

let imagenOpaca = {
  opacity: 1
}

let textoOculto = {
  visibility: "hidden"
}

$(".sitios-parada p").css(textoOculto);


let textoVisible = {
  visibility: "visible",
  position: 'relative',
  left: '-10%'
}

$(".sitios-parada img").mouseover(function() {

  $(this).css(imagenDifuminada);
  $(this).siblings("p").css(textoVisible);
  var htmlActual = $(this).html();
  $(this).html('<a href="https://www.mercadolagaliciana.es/">' + htmlActual + '</a>');

  console.log(htmlActual)

});


$(".sitios-parada img").mouseout(function() {

  $(this).css(imagenOpaca);
  $(this).siblings("p").css(textoOculto);

});
