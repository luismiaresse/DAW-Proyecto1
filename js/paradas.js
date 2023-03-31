

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
  left: '-20%'
}

$(".sitios-parada p").css(textoOculto);


// ---------------------------------------------------------------
// DIFUMINAR IMAGEN Y MOSTRAR TEXTO
// JQuery: parents(), find(), text(), css()
// ---------------------------------------------------------------

$(".sitios-parada img").mouseover(function() {

  console.log($(this).parents("figure").find("p").text())

  $(this).css(imagenDifuminada);
  $(this).parents("figure").find("p").css(textoVisible);
});


// ---------------------------------------------------------------
// OPACAR IMAGEN Y OCULTAR TEXTO
// JQuery: parents(), find(), text(), css()
// ---------------------------------------------------------------

$(".sitios-parada img").mouseout(function() {

  $(this).css(imagenOpaca);
  $(this).parents("figure").find("p").css(textoOculto);
});
