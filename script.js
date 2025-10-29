
    // Obtener el audio y los enlaces del navbar
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");
const links = document.querySelectorAll(".navbar ul li a");
const icons = document.querySelectorAll(".social-icons");

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
    });