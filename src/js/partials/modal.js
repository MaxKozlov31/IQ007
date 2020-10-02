const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll')

    setTimeout(function() {
        $(modalId).find(".personal-data").css({
            opacity: "1"
        });
    }, 150);
});


modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".personal-data").css({
        opacity: "0"
    });

    setTimeout(function() {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 150);
});

// $(".modal").on("click", function(event) {
//     let $this = $(this);

//     $this.find(".personal-data").css({
//         transform: "scale(0)"
//     });

//     setTimeout(function() {
//         $this.removeClass('show');
//         $("body").removeClass('no-scroll');
//     }, 200);
 
// });

$(".personal-data").on("click", function(event) {
    event.stopPropagation();
});



modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal-close');

    modalParent.find(".personal-data-close").css({
        opacity: "0"
    });

    setTimeout(function() {
        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 150);
});

$(".personal-data-close").on("click", function(event) {
    event.stopPropagation();
});




//BTN

$('.btn-call').on('click',function() {

    $('.modal').removeClass('show');
    $('.modal-close').toggleClass('show');

    $('.modal').find(".personal-data").css({
        opacity: "0"
    });

    setTimeout(function() {
        $('.modal-close').find(".personal-data-close").css({
            opacity: "1"
        });
    }, 50);
    
});