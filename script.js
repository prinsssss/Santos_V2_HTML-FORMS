document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('#curtain-menu').classList.toggle('show');
});

document.querySelectorAll('.submenu-toggle').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    el.closest('li').querySelector('.submenu').classList.toggle('show');
  });
});