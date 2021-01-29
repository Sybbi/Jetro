$(function(){

    $('.slider__inner').slick({
      arrows: false,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: '.slider__inner',
      focusOnSelect: true
    });

      $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
      });


  });