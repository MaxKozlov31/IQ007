$(document).ready(function() {
    $('.header-nav-item').click(function(){
        
        $('.header-nav-item').removeClass('header-nav-item_active');
        
        $(this).addClass('header-nav-item_active');
    })
})