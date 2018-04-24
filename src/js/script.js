//= vendors/jquery-3.2.1.min.js
//= vendors/libs.min.js
//= vendors/common.js
//= vendors/bootstrap.min.js
//= vendors/slick.min.js






$('.clients__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinity: true,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});



var menu = document.querySelector( "#menu-burger" )

menu.addEventListener( "click", function(){
    this.classList.toggle( "active" );
});


$(document).ready(function () {
    setTimeout(function () {
        $('#loader-wrapper').fadeOut();
    }, 1800);
});


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-header').outerHeight();
var navbarHeight2 = $('.navbar').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('.navbar-header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-header').removeClass('nav-up').addClass('nav-down');
        }
    }

    if (st > lastScrollTop && st > navbarHeight2){
        $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}


$( ".portfolio__nav-link" ).click(function() {
    if ($('.portfolio__rect').hasClass('portfolio__rect--active')) {
        $('.portfolio__item').css({"width" : "300px", "height" : "300px", "margin-left":"10px", "margin-top":"10px"});
        $('.portfolio__list').css({"display" : "flex", "flex-wrap" : "wrap", "margin-left":"0", "justify-content":"center"});
        $('.portfolio__list-wrap').css({"display" : "flex", "justify-content":"center"});
    }

    else {
        $('.portfolio__item').removeAttr('style');
        $('.portfolio__list').removeAttr('style');
		$('.portfolio__list-wrap').removeAttr('style');
    }

});

