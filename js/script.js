// document.addEventListener('DOMContentLoaded', function () {
//     const menuHamburger = document.querySelector('.menu-hamburger');
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const body = document.querySelector('body');

//     menuHamburger.addEventListener('click', function () {
//         const isOpen = body.classList.toggle('menu-open');

//         if (isOpen) {
//             mobileMenu.style.left = '0';
//             body.style.backgroundColor = '#2F2E41';
//         } else {
//             mobileMenu.style.left = '-100%';
//             body.style.backgroundColor = '';
//         }
//     });
// });

// document.querySelectorAll('.has-dropdown').forEach(function(item) {
//     item.addEventListener('mouseover', function() {
//         var dropdown = document.querySelector('.dropdown');
//         dropdown.style.left = this.offsetLeft + 'px';
//         dropdown.style.top = this.offsetTop + this.offsetHeight + 'px';
//         dropdown.style.display = 'flex';
//     });
//     item.addEventListener('mouseout', function() {
//         document.querySelector('.dropdown').style.display = 'none';
//     });
// });
// // Pour garder le menu déroulant visible lorsqu'il est survolé
// dropdown.addEventListener('mouseover', function() {
//     this.style.display = 'flex';
// });
// dropdown.addEventListener('mouseout', function() {
//     this.style.display = 'none';
// });


document.querySelectorAll('.has-dropdown').forEach(function (item) {
    item.addEventListener('mouseover', function () {
        document.querySelector('.dropdown').style.display = 'flex';
    });
});

document.querySelector('.navbar__menus').addEventListener('mouseleave', function () {
    document.querySelector('.dropdown').style.display = 'none';
});
