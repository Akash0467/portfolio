$(document).ready(function () {
    // Pretty Photo Popup
    $("a[rel^='prettyPhoto']").prettyPhoto();

    // preloder 
    $('#status').delay(500).fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(500).css({
        'overflow': 'visible'
    });
    // back to top 
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn()
        } else(
            $('#back-to-top').fadeOut()
        )
    })
    $('#back-to-top').click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 800)
    });

    
    $('nav ul').on('click', 'li', function () {
        $('nav ul li.active').removeClass("active");
        $(this).addClass('active')
    });

    $('nav ul').on('click', 'li', function () {
        $('.menu-area').removeClass('show');
        $('.hide-icon').hide();
        $('.menu-icon').addClass("me");
    });

    $('.menu-icon').click(function () {
        $('.menu-icon').fadeOut(500);
        $('.hide-icon').fadeIn(1000);
    })

    $('.hide-icon').click(function () {
        $('.menu-icon').fadeIn(1000);
        $('.hide-icon').fadeOut(500);
    })
    $('.menu-icon').click(function () {
        $('.menu-area').addClass('show')
    })
    $('.hide-icon').click(function () {
        $('.menu-area').removeClass('show')
    })

    // click event Start 
    $('.about').click(function () {
        $(".about-area").fadeIn(1000)
        $('.banner-area').fadeOut();
        $('.services-area').fadeOut();
        $(".portfolio-area").fadeOut()
        $(".price-area").fadeOut(1000)
        $('.about-area').addClass('add-animation');
        $('.banner-area').removeClass('add-animation');
        $('.services-area').removeClass('add-animation');
        $('.portfolio-area').removeClass('add-animation');
        $('.price-area').removeClass('add-animation');
        $('.contact-area').removeClass('add-animation');
    });
    $('.home').click(function () {
        $('.banner-area').fadeIn(1000);
        $(".about-area").fadeOut();
        $('.services-area').fadeOut()
        $(".portfolio-area").fadeOut()
        $(".price-area").fadeOut(1000)
        $(".contact-area").fadeOut()
        $('.banner-area').addClass('add-animation');
        $('.about-area').removeClass('add-animation');
        $('.services-area').removeClass('add-animation');
        $('.portfolio-area').removeClass('add-animation');
        $('.price-area').removeClass('add-animation');
        $('.contact-area').removeClass('add-animation');
    });
    $('.services').click(function () {
        $(".services-area").fadeIn(1000)
        $('.banner-area').fadeOut();
        $(".about-area").fadeOut();
        $(".portfolio-area").fadeOut()
        $(".price-area").fadeOut()
        $(".contact-area").fadeOut()
        $('.services-area').addClass('add-animation');
        $('.banner-area').removeClass('add-animation');
        $('.about-area').removeClass('add-animation');
        $('.portfolio-area').removeClass('add-animation');
        $('.price-area').removeClass('add-animation');
        $('.contact-area').removeClass('add-animation');
    });
    $('.portfolio').click(function () {
        $(".portfolio-area").fadeIn(1000)
        $('.banner-area').fadeOut();
        $(".about-area").fadeOut();
        $(".services-area").fadeOut()
        $(".price-area").fadeOut()
        $(".contact-area").fadeOut()
        $('.portfolio-area').addClass('add-animation');
        $('.banner-area').removeClass('add-animation');
        $('.about-area').removeClass('add-animation');
        $('.services-area').removeClass('add-animation');
        $('.price-area').removeClass('add-animation');
        $('.contact-area').removeClass('add-animation');
    });
    $('.price').click(function () {
        $(".price-area").fadeIn(1000)
        $('.banner-area').fadeOut();
        $(".about-area").fadeOut();
        $(".services-area").fadeOut()
        $(".portfolio-area").fadeOut()
        $(".contact-area").fadeOut()
        $('.price-area').addClass('add-animation');
        $('.portfolio-area').removeClass('add-animation');
        $('.banner-area').removeClass('add-animation');
        $('.about-area').removeClass('add-animation');
        $('.services-area').removeClass('add-animation');
        $('.contact-area').removeClass('add-animation');
    });
    $('.contact').click(function () {
        $(".contact-area").fadeIn(1000)
        $(".price-area").fadeOut()
        $('.banner-area').fadeOut();
        $(".about-area").fadeOut();
        $(".services-area").fadeOut()
        $(".portfolio-area").fadeOut()
        $('.contact-area').addClass('add-animation');
        $('.price-area').removeClassClass('add-animation');
        $('.portfolio-area').removeClass('add-animation');
        $('.banner-area').removeClass('add-animation');
        $('.about-area').removeClass('add-animation');
        $('.services-area').removeClass('add-animation');
    });

    // click event end 


    // type js 
    var typed5 = new Typed('.change', {
        strings: ['Designer.', 'Developer.', 'Freelancer.'],
        typeSpeed: 100,
        backSpeed: 100,
        cursorChar: '_',
        shuffle: true,
        smartBackspace: false,
        loop: true,
    });

    var filter_container = ".mix-items";
    var mixer = mixitup(filter_container, {

    });



})