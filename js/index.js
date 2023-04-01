


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




