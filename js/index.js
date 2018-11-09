function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items');
  const back = document.querySelector('.Navbar');
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);