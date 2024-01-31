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


