// Sticky navbar
// =========================

$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('#mainNavbar').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 64) {
    $('#mainNavbar').removeClass('navbar-fixed');
  }
});