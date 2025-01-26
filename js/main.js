// ------------------ JavaScript code for Esteban Quiñones ------------------

// ---------------- Header ------------------

// Variables

const iconBar = document.getElementById('menu-bar');
const navBar = document.getElementById('navbar');
const closeMbMenu = document.getElementById('close-mb-menu');

// ↓↓↓ Close mobile menu action ↓↓↓
if (iconBar) {
    iconBar.addEventListener('click', () => {
        navBar.classList.add('active')
    });
};

if (closeMbMenu) {
    closeMbMenu.addEventListener('click', () => {
        navBar.classList.remove('active')
    });
};

// ------------------------------------------