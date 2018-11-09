window.onscroll = function() {myFunction()};
var header = document.getElementById("Nav");
var sticky = header.backgroundColor;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items');
  const back = document.querySelector('.Navbar');
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

