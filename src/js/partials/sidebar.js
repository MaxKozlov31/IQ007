block_pos = $('.cases_sidebar_list').offset().top;
wrap_pos = $('.cases').offset().top;
block_height = $('.cases_sidebar_list').outerHeight();
wrap_height = $('.cases').outerHeight();
block_width = $('.cases_sidebar_list').outerWidth();
pos_absolute = wrap_pos - block_height;

$(window).scroll(function () {
    if ($(window).scrollTop() > pos_absolute) {
        $('.cases_sidebar_list').css (
            {
                'position':'absolute',
                'top': wrap_height - block_height,
                'width': block_width
            }
        );
    }
    else if($(window).scrollTop() > block_pos) {
        $('.cases_sidebar_list').css (
            {
                'position':'fixed',
                'top': '0px',
                'width': block_width
            }
        );
    }
    else {
        $('.cases_sidebar_list').css (
            {
            'position':'static',
            }
        );
    }
})