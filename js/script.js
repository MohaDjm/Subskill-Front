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
    slider.style.width = `${100 * slides.length}%`; 
    slides.forEach((slide) => {
        slide.style.flex = `0 0 ${percentage}%`; 
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
