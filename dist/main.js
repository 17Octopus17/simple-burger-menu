$(document).ready(function() {
  $(document).on('click', '.hide-nav', function() {
    let nav = $('.navigation__list');
  $('.hide-nav').toggleClass('active');
  nav.toggleClass('show');
})
});