/* ========================================
      EVENTO onclick
======================================== */
function saludar() {
  document.getElementById("mensajeOnclick").textContent = 
    "¡Hola! Gracias por visitar star_dropshop 😄";
}

/* ========================================
      EVENTOS DE MOUSEOVER
======================================== */
function cambiarColor() {
  document.getElementById("cuadroColor").style.background = "#ffeeba";
}

function restaurarColor() {
  document.getElementById("cuadroColor").style.background = "#eee";
}

/* ========================================
      EVENTO onchange
======================================== */
function mostrarSeleccionEjemplo() {
  const select = document.getElementById("selectEjemplo");
  const texto = document.getElementById("textoOnchange");

  texto.textContent = `Seleccionaste: ${select.value}`;
}

/* ========================================
      ADDEVENTLISTENER
======================================== */
document.getElementById("btnCambiarCard").addEventListener("click", function() {

  let imagen = document.getElementById("cardImagen");
  let titulo = document.querySelector(".cardTitulo");
  let texto = document.querySelector(".cardTexto");

  imagen.src = "gorra barbas hats.webp";
  titulo.textContent = "Gorra Barbas Hats Premium";
  texto.textContent = "Descubre los nuevos modelos de Barbas Hats con nuevos colores.";
});

/* ========================================
    SERVICIOS – SELECCIONAR / ELIMINAR
======================================== */
const tarjeta1 = document.getElementById("card1");
const detalle1 = document.getElementById("detalle1");

document.querySelector(".btnSelect1").addEventListener("click", () => {
  tarjeta1.style.border = "3px solid green";
  detalle1.style.display = "block";
  alert("Servicio seleccionado correctamente ✔️");
});

document.querySelector(".btnRemove1").addEventListener("click", () => {
  tarjeta1.style.border = "1px solid #ddd";
  detalle1.style.display = "none";
  alert("Servicio eliminado ❌");
});

/* ========================================
       AGREGAR IMÁGENES DINÁMICAS
======================================== */
document.getElementById("btnAgregarImagen").addEventListener("click", () => {
  const url = document.getElementById("inputImagen").value;
  const galeria = document.getElementById("galeria");

  if (url.trim() === "") {
    alert("Ingresa una URL válida.");
    return;
  }

  // Crear elementos
  let col = document.createElement("div");
  col.className = "col-md-4";

  let img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen añadida";

  col.appendChild(img);
  galeria.appendChild(col);

  document.getElementById("inputImagen").value = "";
});

/* ========================================
       BANNER PROMOCIONAL (dinámico)
======================================== */
setTimeout(() => {
  document.getElementById("banner").textContent =
    "🎉 Nueva Promo: 2x1 en gorras por tiempo limitado 🎉";
}, 5000);
// Animación opcional al hacer clic
const botonWhatsapp = document.querySelector(".whatsapp-float");

if (botonWhatsapp) {
    botonWhatsapp.addEventListener("click", () => {
        botonWhatsapp.style.transform = "scale(0.9)";
        setTimeout(() => {
            botonWhatsapp.style.transform = "scale(1)";
        }, 150);
    });
}
