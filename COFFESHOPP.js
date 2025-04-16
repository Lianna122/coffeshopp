// Seleccionamos el botón por su ID
const boton = document.getElementById("botonCOFFESHOPP");

// Seleccionamos el párrafo por su clase
const parrafo = document.querySelector(".respuesta");

// Cuando se hace clic en el botón, se cambia el contenido del párrafo
boton.addEventListener("click", function() {
    parrafo.textContent = "🤩¡Tu nueva excusa para hacer una pausa deliciosa! Tu lugar para relajarte, disfrutar y saborear un buen café.😄👏";
});