// script.js

window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
};

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = now.toLocaleString();
}
// script.js

const mainContent = document.getElementById('main-content');

function loadContent(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
        });
}

// Load the initial content (e.g., home page)
loadContent('home');

// Handle navigation link clicks
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const page = event.target.getAttribute('href').substring(1);
        loadContent(page);
    });
});
