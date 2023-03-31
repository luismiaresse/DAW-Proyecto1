



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
    // Bucle parte de JES6
    for (elem of document.getElementById("formulario-comentarios").children) {
      elem.style.backgroundColor = "#151819";
      elem.style.color = "white";
    }
    this.innerText = textoClaro;
  }
  else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#151819";
    // Bucle parte de JES6
    for (elem of document.getElementById("formulario-comentarios").children) {
      elem.style.backgroundColor = "white";
      elem.style.color = "#151819";
    }
    this.innerText = textoOscuro;
  }
});


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

let nombre = $("#nombre");
let correo = $("#email");
let comentario = $("#comentario");

$("#boton-enviar-comentario").click(() => {
  let errorText = "";
  let errorId = 0;
  let errorStyle = {
    "color": "red",
    "display": "block",
    "margin-top": "16px"
  }

  var regex = /\S+@\S+\.\S+/;   // Cadenas con caracter(es)@caracter(es).caracter(es)
  if (!regex.test(correo.val())) {
    errorText = "El correo electrónico no es válido."
    errorId = 2;
  }
  regex = /\S+/;                // Cadenas con al menos un caracter
  if (!regex.test(comentario.val())) {
    errorText = "El comentario no es válido."
    errorId = 3;
  }
  if (!regex.test(nombre.val())) {
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


// ---------------------------------------------------------------
// FORMULARIO DE INICIO SESION/REGISTRO

let loginButton = $('.boton-iniciar-sesion');
let loginContainer = $('#login-container');
let loginForm = $('#login-form');
let loginVisible = false;

function testRegexInicioSesion() {
  let errorText = "";
  let errorId = 0;
  let errorStyle = {
    "color": "red",
    "display": "block",
  }

  var regex = /\S+@\S+\.\S+/;   // Cadenas con caracter(es)@caracter(es).caracter(es)
  if (!regex.test($("#email-login").val())) {
    errorText = "El correo no es válido."
    errorId = 1;
  }
  regex = /\S+/;                // Cadenas con al menos un caracter
  if (!regex.test($("#password-login").val())) {
    errorText = "La contraseña no es válida."
    errorId = 2;
  }
  
  if (errorId != 0) {
    $("#error-login").text(errorText);
    $("#error-login").css(errorStyle);
    return false;
  } else {
    $("#error-login").css("display", "none");
    return true;
  }
}

loginButton.on("click", () => {
  if (loginVisible) {
    loginContainer.css('visibility', 'hidden');
    loginVisible = false;
    registerVisible = false;
  } else {
    var comprobarJSON = true;
    for (elem of loginForm.children()) {
      if (elem.nodeName === 'input' && elem.innerText === "") {
        comprobarJSON = false;
        break;
      }
      if (testRegexInicioSesion()) {
        console.log("Comprobando JSON");
        // Comprobar en JSON si el usuario existe
        return;
      } 
    }
    if (!comprobarJSON) {     
      $("#campos-registro").css('display', 'none');
      loginContainer.css('visibility', 'visible');
      loginVisible = true;
      registerVisible = false;
    }
  }
});

let registerButton = $('.boton-registrarse');
let registerVisible = false;

registerButton.on("click", () => {
  if (registerVisible) {
    loginContainer.css('visibility', 'hidden');
    registerVisible = false;
    loginVisible = false;
  } else {
    $("#campos-registro").css('display', 'inline');
    loginContainer.css('visibility', 'visible');
    registerVisible = true;
    loginVisible = false;
  }
});