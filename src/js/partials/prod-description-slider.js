$('.prod-description-picture__img-max').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  fade: true,
  asNavFor: '.prod-description-picture__img-min'
});

$('.prod-description-picture__img-min').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  asNavFor: '.prod-description-picture__img-max',
  // arrows: true,
  prevArrow: '<button class="prev_up arrow arrow_product"></button>',
  nextArrow: '<button class="next_down arrow arrow_product"></button>',
  dots: false,
  vertical: true,
  verticalSwiping: true,
  // centerMode: true,
  focusOnSelect: true
});

