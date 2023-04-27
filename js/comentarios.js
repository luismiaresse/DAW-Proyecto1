
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
  let successText = "Comentario enviado correctamente.";
  let successStyle = {
    "color": "green",
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
    $("#mensaje-comentarios").text(errorText);
    $("#mensaje-comentarios").css(errorStyle);
  } else {
    $("#mensaje-comentarios").text(successText);
    $("#mensaje-comentarios").css(successStyle);
    // Limpiar campos
    comentariosNombre.val("");
    comentariosCorreo.val("");
    comentariosComentario.val("");
  }
});
