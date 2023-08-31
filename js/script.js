// Menu dropdown


document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggles = document.querySelectorAll(".has-dropdown");
    let activeDropdown = null;
  
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("mouseover", function(e) {
            if (activeDropdown) {
                activeDropdown.classList.remove("show");
            }
            const dropdownMenu = this.nextElementSibling;
            this.setAttribute("aria-expanded", "true");
            dropdownMenu.classList.add("show");
            activeDropdown = dropdownMenu;
        });

        // Écoute également les événements de survol sur le menu déroulant lui-même
        toggle.nextElementSibling.addEventListener("mouseover", function(e) {
            this.classList.add("show");
            activeDropdown = this;
        });
        
        toggle.nextElementSibling.addEventListener("mouseout", function(e) {
            this.classList.remove("show");
            activeDropdown = null;
        });
    });
});






// document.addEventListener('DOMContentLoaded', () => {
//     const dropdownTriggers = document.querySelectorAll('.has-dropdown');
//     let timer; // Ajout d'un timer

//     dropdownTriggers.forEach(trigger => {
//         trigger.addEventListener('mouseenter', function() {
//             clearTimeout(timer); // Annuler le timer précédent
//             const dropdownClass = 'dropdown-' + this.textContent.toLowerCase();
//             const dropdownElement = document.querySelector(`.${dropdownClass}`);

//             if (dropdownElement) {
//                 dropdownElement.style.display = 'flex';
//                 dropdownElement.style.zIndex = 100;
//                 dropdownElement.style.transition = 'all 0.3s ease-in-out';
//             }

//             // Vérifier si un autre élément est en survol
//             const otherDropdownElement = document.querySelector('.dropdown.flex');
//             if (otherDropdownElement) {
//                 // Annuler le timer et fermer le menu déroulant
//                 clearTimeout(timer);
//                 otherDropdownElement.style.display = 'none';
//             }
//         });

//         trigger.addEventListener('mouseleave', function() {
//             const dropdownClass = 'dropdown-' + this.textContent.toLowerCase();
//             const dropdownElement = document.querySelector(`.${dropdownClass}`);

//             // Annuler le timer
//             clearTimeout(timer);

//             // Fermer le menu déroulant après 0.3 seconde
//             timer = setTimeout(() => {
//                 if (dropdownElement) {
//                     dropdownElement.style.display = 'none';
//                 }
//             }, 300);
//         });
//     });

//     // Annuler la fermeture du menu si la souris est dans la zone du menu déroulant
//     document.querySelectorAll('.dropdown').forEach(dropdown => {
//         dropdown.addEventListener('mouseenter', () => {
//             clearTimeout(timer);
//         });
//         dropdown.addEventListener('mouseleave', function() {
//             dropdown.style.display = 'none';
//             dropdown.style.zIndex = 0;
//         });
//     });
// });

// Menu hamburger

// document.addEventListener('DOMContentLoaded', function() {
//     const hamburger = document.querySelector('.menu-hamburger');
//     const navbarMenus = document.querySelector('.navbar__menus');
//     const navbarContact = document.querySelector('.navbar__contact');
//     const dropdownTriggers = document.querySelectorAll('.has-dropdown');
//     const submenus = document.querySelectorAll('.submenu');
//     const goBackButtons = document.querySelectorAll('.go-back');
//     const navbar__submenu = document.querySelector('.navbar__submenu');

//     // Cache le menu et les sous-menus sur les appareils mobiles
//     if (window.innerWidth <= 1580) {
//         navbarMenus.style.display = 'none';
//         navbarContact.style.display = 'none';
//         navbar__submenu.style.display = 'none'; // Ajout de cette ligne
//     }

//     hamburger.addEventListener('click', function() {
//         const hasActive = navbarMenus.classList.contains('active');
//         navbarMenus.classList.toggle('active', !hasActive);
//         navbarContact.classList.toggle('active', !hasActive);
//         navbar__submenu.classList.toggle('active', !hasActive);  // Ajout de cette ligne
//         hamburger.classList.toggle('open', !hasActive);

//         if (!hasActive) {
//             navbarMenus.style.display = 'block';
//             navbarContact.style.display = 'block';
//             navbar__submenu.style.display = 'block'; // Ajout de cette ligne
//         } else {
//             navbarMenus.style.display = 'none';
//             navbarContact.style.display = 'none';
//             navbar__submenu.style.display = 'none'; // Ajout de cette ligne
//             submenus.forEach(submenu => submenu.style.display = 'none');
//         }
//     });

//     dropdownTriggers.forEach(trigger => {
//         trigger.addEventListener('click', function(event) {
//             if (window.innerWidth <= 1580) {
//                 event.preventDefault();
//                 const targetID = `submenu-${this.textContent.trim().toLowerCase()}`;
//                 const target = document.getElementById(targetID);
//                 if (target) {
//                     target.style.display = 'block';
//                 }
//             }
//         });
//     });

//     goBackButtons.forEach(button => {
//         button.addEventListener('click', function(event) {
//             event.preventDefault();
//             this.closest('.submenu').style.display = 'none';
//         });
//     });

//     window.addEventListener('resize', function() {
//         if (window.innerWidth > 1580) {
//             navbarMenus.classList.remove('active');
//             navbarContact.classList.remove('active');
//             hamburger.classList.remove('open');
//             navbarMenus.style.display = 'block';
//             navbarContact.style.display = 'block';
//             navbar__submenu.style.display = 'none'; // Ajout de cette ligne
//             submenus.forEach(submenu => submenu.style.display = 'none');
//         } else {
//             navbarMenus.style.display = 'none';
//             navbarContact.style.display = 'none';
//             navbar__submenu.style.display = 'none'; // Ajout de cette ligne
//             submenus.forEach(submenu => submenu.style.display = 'none');
//         }
//     });
// });


// Slider 

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const indicator = document.querySelector(".slider-indicator");
    
    let index = 0;
    let maxIndex = slides.length - 1; // nombre total de slides - 1
    let percentage = 100 / slides.length; // 100% divisé par le nombre total de slides

    // Initialisation
    slider.style.width = `${100 * slides.length}%`; // Ajuster la largeur totale du conteneur
    slides.forEach((slide) => {
        slide.style.flex = `0 0 ${percentage}%`; // Ajuster la largeur de chaque slide
    });
    updateButtons();

    prev.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });
  
    next.addEventListener("click", () => {
        if (index < maxIndex) {
            index++;
            updateSlider();
        }
    });
    
    indicator.addEventListener("input", () => {
        index = indicator.value - 1;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${index * percentage}%)`;
        indicator.value = index + 1;
        updateButtons();
    }

    function updateButtons() {
        prev.disabled = index === 0;
        next.disabled = index === maxIndex;
    }
    document.documentElement.style.setProperty('--thumb-width', `${percentage}%`);
});


// Pop in team members

document.addEventListener('DOMContentLoaded', function() {
    // Trouve toutes les cartes avec un popup
    const cardsWithPopup = document.querySelectorAll('.equipe__cards.has-popup');

    cardsWithPopup.forEach(card => {
        // Quand on clique sur la carte
        card.querySelector('a').addEventListener('click', function(e) {
            e.preventDefault();
            // On affiche le popup associé à cette carte
            card.querySelector('.popup').style.display = 'block';
        });

        // Quand on clique sur le bouton de fermeture du popup
        card.querySelector('.close-popup').addEventListener('click', function() {
            // On ferme le popup
            card.querySelector('.popup').style.display = 'none';
        });
    });
});
