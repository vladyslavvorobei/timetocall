function scrollHeader() {
  const $header = $('.header');
  const addClass = 'header--scroll';
  const scrollHeight = 70;

  if($(this).scrollTop() > scrollHeight ) {
    $header.addClass(addClass);
  }
  else {
    $header.removeClass(addClass);
  }

  if (window.pageYOffset > scrollHeight) {
    $header.addClass(addClass);
  }
  else {
    $header.removeClass(addClass);
  }

}



module.exports = scrollHeader;

