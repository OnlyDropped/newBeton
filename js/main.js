$(function () {

  $(".star").rateYo({
    rating: 5,
    starWidth: "15px",
    normalFill: "#FF352B",
    ratedFill: "#FF352B"
  });
  //  $('.header__select').styler();
  //  $('.footer__content-select').styler();

  //  $('.center').slick({
  //    centerMode: true,
  //    slidesToShow: 1,
  //    autoplay: true,
  //    autoplaySpeed: 6000,
  //    dots: true,
  //    arrows: true,
  //    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.//svg" alt=""></button>',
  //    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.//svg" alt=""></button>',
  //    //infinite: true,
  //    //speed: 300,
  //    centerPadding: '100px',
  //    responsive: [
  //      {
  //        breakpoint: 375,
  //        settings: {
  //          arrows: false,
  //          dots: false,
  //        }
  //      }
  //    ]
  //  });
  $('.slider-inner').slick({
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev slick-prev__left"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(".footer__contact-btn").html('Заказать');


});