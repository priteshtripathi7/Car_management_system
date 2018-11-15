$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".Navbar").addClass("active");
        } else {
           $(".Navbar").removeClass("active");
        }
    });
});

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items');
  const back = document.querySelector('.Navbar');
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

function contactButton(){
  alert("Thanks for messeging.. We will shortly get in touch with you.");
}