document.addEventListener("DOMContentLoaded", function() {
  // Carrusel
  const carousel = document.getElementById("carousel");
  let currentImageIndex = 0;
  const images = carousel.getElementsByTagName("img");
  const totalImages = images.length;

  function showNextImage() {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].style.display = "block";
  }

  // Ocultar todas las imágenes excepto la primera
  for (let i = 1; i < totalImages; i++) {
    images[i].style.display = "none";
  }

  // Cambiar de imagen cada 3 segundos
  setInterval(showNextImage, 3000);

  // Formulario
  const form = document.getElementById("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email);
    console.log("Contraseña:", password);
    // Aquí puedes agregar la lógica para procesar el formulario
  });
});