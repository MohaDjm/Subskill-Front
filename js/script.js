// Menu dropdown


document.querySelectorAll('.has-dropdown').forEach(function (item) {
    item.addEventListener('mouseover', function () {
        document.querySelector('.dropdown').style.display = 'flex';
    });
});

document.querySelector('.navbar__menus').addEventListener('mouseleave', function () {
    document.querySelector('.dropdown').style.display = 'none';
});

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
