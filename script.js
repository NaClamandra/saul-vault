// Obtener el audio y los enlaces del navbar
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");
const links = document.querySelectorAll(".navbar ul li a");
const icons = document.querySelectorAll(".social-icons a");

links.forEach(link => {
  // Sonido al pasar el mouse
  link.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  // Sonido al hacer clic
  link.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
}); // <-- El bucle de links termina aquí

// BUCLE SEPARADO para los íconos
icons.forEach(icon => {
  icon.addEventListener('click', () => {
      clickSound.currentTime = 0; 
      clickSound.play();
      });
  
      icon.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0; 
      hoverSound.play();
      });
  });
// Se eliminó la llave '}' extra que estaba aquí

