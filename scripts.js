// Incluye la biblioteca de Bootstrap JavaScript (asegúrate de que la ruta sea correcta) -->

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px"; // Oculta el navbar
    }
    
    prevScrollPos = currentScrollPos;
}

