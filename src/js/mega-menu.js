$(function () {

  function mainNav() {
    // main menu
    $('.toggler').click( function(event) {
      event.preventDefault();
      // animate hamburger
      $(this).toggleClass('change');
      // toggle main menu
      $('.main-menu').slideToggle('fast');
    });

    // render sub menu content && add back arrow to active link ( mobile )
    $('.main-menu a').click( function() {
      // render sub menu title
      $('.sub-menu-title').html( $(this).text() );
      // add back arrow on mobile
      if ( $(window).width() <= 768 ) {
        $(this).toggleClass('active-arrow');
      }
    });

    // active link opacity func
    $('.main-menu li').click( function() {
       $(this).toggleClass('active-item').siblings().removeClass('active-item');
      if ( $(this).hasClass('active-item') ) {
        $(this).css('opacity', 1.0);
        $(this).siblings().css('opacity', 0.5);
        $('.sub-menu-container').slideDown();
      } else {
        $('.sub-menu-container').hide();
      }
      if ( $(window).width() <= 768 ) {
        $(this).siblings().toggle();
      }

    });

  }

  mainNav();

});
