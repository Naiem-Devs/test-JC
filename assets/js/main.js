$('.menu-area .side_nav_btn ,  .siteBar-btn').click(function(event) {
    event.preventDefault()
        $('.mobile-menu').toggleClass('siteBar')
        $('body').toggleClass('overflow-hidden')
    })

    $(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.header-area').css('position','sticky');
        $('.header_btm').css('display','none');
    } else{
        $('.header-area').css('position','sticky');
        $('.header_btm').css('display','block');
    }
});