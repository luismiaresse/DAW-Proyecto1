
// ---------------------------------------------------------------
// INICIO SESION/REGISTRO

let loginButton = $('.boton-iniciar-sesion');
let loginContainer = $('#login-container');
let loginForm = $('#login-form');
let loginVisible = false;

let registerButton = $('.boton-registrarse');
let registerVisible = false;

let logoutButton = $('.boton-cerrar-sesion');

let errorText = "";
let errorId = 0;
let errorStyle = {
  "color": "red",
  "display": "block",
}



function showLoginError() {
  $("#error-login").text(errorText);
  $("#error-login").css(errorStyle);
}



function testRegexInicioSesion() {
  errorId = 0;
  errorText = "";
  var regex = /\S+@\S+\.\S+/;   // Cadenas con caracter(es)@caracter(es).caracter(es)
  if (!regex.test($("#login-email").val())) {
    errorText = "El correo no es válido."
    errorId = 1;
  }
  regex = /\S+/;                // Cadenas con al menos un caracter
  if (!regex.test($("#login-password").val())) {
    errorText = "La contraseña no es válida."
    errorId = 2;
  }
  
  if (errorId != 0) {
    showLoginError();
    return false;
  } else {
    $("#error-login").css("display", "none");
    return true;
  }
}


function testRegexRegistro() {
  if (testRegexInicioSesion()) {
    var regex = /\S+/;                // Cadenas con al menos un caracter
    if (!regex.test($("#login-password-repeat").val())) {
      errorText = "La contraseña no es válida."
      errorId = 3;
    }
    if ($("#login-password-repeat").val() != $("#login-password").val()) {
      errorText = "Las contraseñas no coinciden."
      errorId = 4;
    }
    if (!regex.test($("#login-name").val())) {
      errorText = "El nombre no es válido."
      errorId = 5;
    }

    if (errorId != 0) {
      showLoginError();
      return false;
    } else {
      $("#error-login").css("display", "none");
      return true;
    }
  }
}


function getUsersXML(callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("XML usuarios cargado");
      let xmlDoc = this.responseXML;
      callback(xmlDoc);
    }
  }
  xhttp.open("GET", "../ajax/users.xml", true);
  xhttp.send();
}


// Función usada cuando se tenga backend
function setUsersXML(xmlDoc) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("XML usuarios guardado");
    }
  }
  xmlString = (new XMLSerializer()).serializeToString(xmlDoc);
  xhttp.open("POST", "actualizarUsuarios.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("xml=" + xmlString);
}


function checkLogin(xmlDoc) {
  let users = xmlDoc.getElementsByTagName("user");
  for (let i = 0; i < users.length; i++) {
    let checkEmail = users[i].getElementsByTagName("email")[0].childNodes[0].nodeValue == $("#login-email").val();
    let checkPassword = users[i].getElementsByTagName("password")[0].childNodes[0].nodeValue == $("#login-password").val();
    if (checkEmail && checkPassword) {
      console.log("Usuario correcto");
      let username = users[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
      userHasLoggedIn(username);
      return true;
    }
  }
  console.log("Usuario incorrecto");
  return false;
}

function createUserNode(xmlDoc, username, email, password) {
  var newUser = xmlDoc.createElement("user");
  var newUserName = xmlDoc.createElement("name");
  var newUserNameText = xmlDoc.createTextNode(username);
  newUserName.appendChild(newUserNameText);
  var newUserEmail = xmlDoc.createElement("email");
  var newUserEmailText = xmlDoc.createTextNode(email);
  newUserEmail.appendChild(newUserEmailText);
  var newUserPassword = xmlDoc.createElement("password");
  var newUserPasswordText = xmlDoc.createTextNode(password);
  newUserPassword.appendChild(newUserPasswordText);

  newUser.appendChild(newUserName);
  newUser.appendChild(newUserEmail);
  newUser.appendChild(newUserPassword);

  xmlDoc.getElementsByTagName("users")[0].appendChild(newUser);
  return xmlDoc;
}

function registerUser(xmlDoc) {
  let users = xmlDoc.getElementsByTagName("user");
  for (let i = 0; i < users.length; i++) {
    let checkEmail = users[i].getElementsByTagName("email")[0].childNodes[0].nodeValue == $("#login-email").val();
    if (checkEmail) {
      errorText = "El correo ya existe.";
      showLoginError();
      return false;
    }
  }
  console.log("Registrando nuevo usuario");
  let username = $("#login-name").val();
  let email = $("#login-email").val();
  let password = $("#login-password").val();
  xmlDoc = createUserNode(xmlDoc, username, email, password);
  console.log(xmlDoc);
  // setUsersXML(xmlDoc);
  return true;
}



function userHasLoggedIn(username) {
  hideLoginRegisterForm();
  loginButton.css('display', 'none');
  registerButton.css('display', 'none');
  logoutButton.css('display', 'inline');
  $("#nav-username").text("Hola, " + username + "!");
  $("#nav-username").css('display', 'inline');
}


function hideLoginRegisterForm() {
  loginContainer.css('display', 'none');
  loginVisible = false;
  registerVisible = false;
}

loginButton.on("click", () => {
  if (loginVisible) {
    // Comprobar que todos los campos están rellenos
    for (elem of loginForm.children()) {
        if (elem.nodeName === 'INPUT' && elem.value === "") {
          hideLoginRegisterForm();
          return;
        }
    }
    // Chequear expresiones regulares
    if (testRegexInicioSesion()) {
        console.log("Comprobando XML usuarios");
        // Comprobar en XML si el usuario coincide
        getUsersXML(checkLogin);
        return;
    } 
  } else {
    $("#campos-registro").css('display', 'none');
    loginContainer.css('display', 'block');
    loginVisible = true;
    registerVisible = false;
  }
});


registerButton.on("click", () => {
  if (registerVisible) {
    // Comprobar que todos los campos están rellenos
    for (elem of loginForm.children()) {
      if (elem.nodeName === 'INPUT' && elem.value === "") {
        hideLoginRegisterForm();
        return;
      }
    }
    // Chequear expresiones regulares
    if (testRegexRegistro()) {
      console.log("Escribiendo nuevo usuario en XML");
      // Escribir en XML el nuevo usuario
      getUsersXML(registerUser);
      return;
    }
  } else {
    $("#campos-registro").css('display', 'flex');
    loginContainer.css('display', 'block');
    registerVisible = true;
    loginVisible = false;
  }
});


logoutButton.on("click", () => {
  logoutButton.css('display', 'none');
  $("#nav-username").css('display', 'none');
  loginButton.css('display', 'inline');
  registerButton.css('display', 'inline');
});