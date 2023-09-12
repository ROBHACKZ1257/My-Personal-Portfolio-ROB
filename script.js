
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const headerLinks = document.getElementById('header-links');

    menuToggle.addEventListener('click', function () {
        headerLinks.classList.toggle('active');
    });
});
