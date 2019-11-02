function scrollBtnDown() {
  const $page = $('html, body');
  const height = 75;

  $("a[href*='#']").click(function() {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - height
    }, 700);
    return false;
  });

}

module.exports = scrollBtnDown;
