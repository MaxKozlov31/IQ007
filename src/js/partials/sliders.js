$(document).ready(function(){
    $('.product-slider').slick({
        dots: false,
        
        // кастомные точки(цифры) customPaging: (slider, i) => `<a>${i + 1}</a>`
        // колонки rows:
        infinite: false,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                    arrows: true
                    
                }
            },

            

            {
                breakpoint: 992,
                settings: {
                    // slidesToShow: 3,
                    // slidesToScroll: 1,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // centerMode: true,
                    variableWidth: true,
                    arrows: false
                }
            }

            // {
            //     breakpoint: 480,
            //     settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1,
            //     arrows: false  
                
            //     }
            // },

            // {
            //     breakpoint: 320,
            //     settings: {
            //       dots: false,
            //       prevArrow: false,
            //       nextArrow: false,
            //       arrows: false        
            //     }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.SOMEcategory-slider').slick({
        rows: 2,
        dots: true,
        customPaging: (slider, i) => `<a>${i + 1}</a>`,
        infinite: false,
        arrows: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3
        
    });
});

  