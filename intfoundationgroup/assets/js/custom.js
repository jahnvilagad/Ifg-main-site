(function () {
  window.onload = function () {
    var preloader = document.querySelector('.page-loading');
    preloader.classList.remove('active');
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();




var swiper = new Swiper('.swiper-partners-slider.swiper-testimonial', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-test',
    prevEl: '.swiper-button-prev-test',
  },
  breakpoints: {
    991: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    }
  },
});



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
$(document).ready(function() {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
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