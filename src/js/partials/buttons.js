// Лайк

$('.btn-like').on('click',function(e) {
    e.preventDefault;
    $('.fa-heart').toggleClass('fas');
});

// Категории
$('.header-mobile__btn').on('click',function(e) {
    e.preventDefault;
    $(this).toggleClass('header-mobile__btn__active');
});


// Аккордеонб сайдбар-фильтр
$(document).ready(function () {

    $('.header-mobile__btn').click(function () {
        $(this).toggleClass('collapse-btn__active').next().slideToggle();
        // $('.tab-header').not(this).removeClass('collapse-btn__active').next().slideUp();
    });

});

$(document).ready(function () {

    // $('.filter__more').click(function () {
    //     $('.custom-checkbox').toggleClass('custom-checkbox__active');
    //     // $('.tab-header').not(this).removeClass('collapse-btn__active').next().slideUp();
    // });


    $('.btn__more').click(function () {
        $(this).prev().toggleClass('filter__active');
        // $('.tab-header').not(this).removeClass('collapse-btn__active').next().slideUp();
    });

});


// button quantity

$('.add').click(function () {
    if ($(this).prev().val() < 10) {
    $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});


// Сменяющаяся

$('.btn_change').click(function() {
    $(this).text(function(i, text) {
      return text === "Показать еще" ? "Скрыть" : "Показать еще";
    })
});


$('.btn_basket').click(function() {
    $(this).text(function(i, text) {
      return text === "В корзину" ? "Удалить из корзины" : "В корзину";
    })
});


