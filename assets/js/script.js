// scripts.js

// Expande la barra lateral al pasar el mouse por encima
document.querySelector('.sidebar').addEventListener('mouseenter', function() {
    document.querySelector('.container').classList.add('sidebar-expanded');
});

// Contrae la barra lateral al quitar el mouse de encima
document.querySelector('.sidebar').addEventListener('mouseleave', function() {
    document.querySelector('.container').classList.remove('sidebar-expanded');
});

// Mostrar el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior del documento
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"; // Muestra el botón
    } else {
        scrollToTopBtn.style.display = "none"; // Oculta el botón
    }
};

// Desplazar hacia arriba cuando el usuario hace clic en el botón
document.getElementById("scrollToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza suavemente hacia la parte superior de la página
});
