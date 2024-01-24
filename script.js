$(document).ready(function () {
    $(document).click(function () {
        $('.navbar-collapse').collapse('hide');
    });
});

var elem = document.querySelector('.projects');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.project-container',
//   columnWidth: 100
percentPosition: true
});