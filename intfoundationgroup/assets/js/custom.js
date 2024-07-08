(function () {
  window.onload = function () {
    var preloader = document.querySelector('.page-loading');
    preloader.classList.remove('active');
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();



// $(document).ready(function () {
// const slider = new Swiper('.swiper-testimonial', {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next-test',
//     prevEl: '.swiper-button-prev-test',
//   },
//   breakpoints: {
//     991: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 50,
//     }
//   },
// });
// });



/*partners js*/
$(document).ready(function () {
  $(".SlickCarousel").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 4, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    appendArrows: $(".partners-slider .Head .Arrows"), // Class For Arrows Buttons
    prevArrow: '<span class="Slick-Prev"></span>',
    nextArrow: '<span class="Slick-Next"></span>',
    easing: "linear",
    responsive: [
      {
        breakpoint: 801, settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 641, settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 481, settings: {
          slidesToShow: 2,
        }
      },
    ],
  })
})

$(document).ready(function () {
  $('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    speed: 500,
    variableWidth: true,
  });
  $('.center').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange', currentSlide, nextSlide);
  });
  $('.center').on('afterChange', function (event, slick, currentSlide) {
    console.log('afterChange', currentSlide);
  });
})


/*partners say about us */
$(document).ready(function () {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    loop: true,
    dots: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    effect: 'slide',
    breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
  });

});

$(document).ready(function () {
  const swiper = new Swiper('.swiper-container-1', {
    slidesPerView: 1,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    dots: true,
    arrows: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    effect: 'slide',
  });

});

$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    prevArrow: $('.prev4'),
    nextArrow: $('.next4'),
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
  });
});

$(document).ready(function () {

  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: true,
    margin: 0,
    nav: true
  });
});


//ifg advantage slider
$(document).ready(function () {
$('.testimonial-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  arrows:false,
  infinite: true,
  cssEase: 'linear',
  speed:1000,
  vertical:true,
  autoplay:true,
  autoplaySpeed:2000,
  rows:1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:false,
        rows:1
      }
    }
    
  ]
});

});


$(document).ready(function(){
  $(".testimonial-slider button").empty();
});