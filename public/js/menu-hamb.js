// Toggle menu mobile
const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const menu = document.getElementById('navbar-sticky');
    
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
});
