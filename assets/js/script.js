document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del footer.html en la sección con id "footer"
    var footerContainer = document.getElementById('footer');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                footerContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el footer: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/footer.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del navbar.html en la sección con id "navbar"
    var navbarContainer = document.getElementById('navbar');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                navbarContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el navbar: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/navbar.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del cta-section.html en la sección con id "cta-section"
    var ctaContainer = document.getElementById('cta-section');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                ctaContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el cta: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/cta-section.html', true);
    xhr.send();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar el contenido del cta-section.html en la sección con id "value"
    var valueContainer = document.getElementById('value');
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                valueContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el value: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'assets/partials/value.html', true);
    xhr.send();
});

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el contenedor de animación dentro de la sección
    var animationContainer = document.getElementById("animation-container");

    // Verifica si el contenedor existe antes de inicializar la animación
    if (animationContainer) {
        // Configura la animación
        var animation = bodymovin.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'img/animation.json' // Reemplaza con la ruta correcta de tu archivo JSON
        });
    } else {
        console.error("No se encontró el contenedor de animación en la sección.");
    }
});




// pasar imagenes
document.addEventListener('DOMContentLoaded', function () {
    var imageContainer = document.querySelector('.image-container');
    var images = document.querySelectorAll('.image-container img');
    var currentIndex = 0;

    setInterval(function () {
        // Establece la clase fadeIn a la imagen actual y fadeOut a las demás
        images.forEach(function (image, index) {
            if (index === currentIndex) {
                image.classList.add('animate__fadeIn');
                image.classList.remove('animate__fadeOut');
            } else {
                image.classList.remove('animate__fadeIn');
                image.classList.add('animate__fadeOut');
            }
        });

        // Incrementa el índice actual y vuelve a 0 si es mayor que el número de imágenes
        currentIndex = (currentIndex + 1) % images.length;
    }, 3000);  // Cambia cada 3 segundos (ajusta el tiempo según tus necesidades)
});

