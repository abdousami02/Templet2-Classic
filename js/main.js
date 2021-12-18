$(function(){

    // Fix container
    $('.container').parent().css('min-width',"1200px")

    // adjest header height
    $('.header').height($(window).height())
    $(window).resize(function(){
        $('.header').height($(window).height())
    })

    // add active calss in links
    $('.links li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    // trigger the bxslider
    $('.bxslider').bxSlider({
        pager:false
    });
    
    //trigger nice scroll
    $('html, body').niceScroll()

    //smouth scroll
    $('.links li a').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        },1000)
    });

    // spesial scroll 
    (function autoslid() {
        
        $('.slid .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(700, function() {
                    $(this).removeClass('active').next().fadeIn(700, function(){$(this).addClass('active')}).addClass('active')
                    autoslid()
                })
            }else{
                $(this).delay(3000).fadeOut(700, function(){
                    console.log($(this).parent().children())
                    $(this).removeClass('active').parent().children(':first-child').fadeIn(700, function(){$(this).addClass('active')}).addClass('active')
                    autoslid()
                })
            }
        })
    })();
    
    // trigger MixItUp
    $('#Container').mixItUp();

    // adjust shuffle
    $('.shuffle li').click(function(){
        $(this).addClass('select').siblings().removeClass('select');
    })

    // tigger niceScrolle 
    // $(function() {  
    //     $("body").niceScroll({
    //         cursorborder: "none"
    //     });
    // });

})