$(document).foundation();

$('.off-canvas a').on('click', function() {
    $('.off-canvas').foundation('close');
});

$('.carousel--food').flickity({
cellAlign: 'left',
wrapAround: true,
pageDots: true,
imagesLoaded: true,
percentPosition: false,
arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});

$('.carousel--drinks').flickity({
cellAlign: 'left',
wrapAround: true,
pageDots: true,
imagesLoaded: true,
percentPosition: false,
arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});