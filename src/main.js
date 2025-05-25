// Presentacion de imagenes de presentacion
document.addEventListener("DOMContentLoaded", function () {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  setTimeout(() => {
    img2.classList.remove("oculto");
    setTimeout(() => {
      img2.classList.add("oculto");
    }, 2000);
  }, 3000);
});
