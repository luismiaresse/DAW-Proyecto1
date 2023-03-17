
// Script para mostrar o esconder el menú al pasar el ratón por el botón
function mostrarLinks() {
    var lista = document.getElementById("dropdown");
    if (lista.style.display === "none") {
        lista.style.display = "block";
    }
}

function esconderLinks() {
    var lista = document.getElementById("dropdown");
    if (lista.style.display === "block") {
        lista.style.display = "none";
    }
}

var dropbtn = document.getElementById("dropbtn");
dropbtn.addEventListener("mouseover", mostrarLinks);
dropbtn.addEventListener("mouseout", esconderLinks);
