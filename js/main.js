document.addEventListener('DOMContentLoaded', function() {
    console.log('Dakar Shein site loaded');
    // Ajoutez ici vos fonctionnalités JavaScript, si nécessaire
});

// Sélectionner le header
const header = document.querySelector('header');

// Variable pour suivre la position du dernier scroll
let lastScrollTop = 0;

// Événement de défilement
window.addEventListener('scroll', () => {
    // Déterminer la direction du défilement
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Descendre le header quand on scrolle vers le bas
        header.classList.add('header-scrolled');
    } else {
        // Remonter le header quand on scrolle vers le haut
        header.classList.remove('header-scrolled');
    }

    // Mettre à jour la position du dernier scroll
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// pour détecter le clic sur le bouton et ouvrir l'application Shein
document.addEventListener('DOMContentLoaded', function() {
    const sheinButton = document.getElementById('sheinBtn');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    sheinButton.addEventListener('click', function() {
        if (isMobile) {
            window.location.href = 'shein://'; // URL pour ouvrir l'application Shein sur mobile
        } else {
            window.location.href = 'https://www.shein.com'; // Redirection vers le site web Shein pour les autres appareils
        }
    });
});
