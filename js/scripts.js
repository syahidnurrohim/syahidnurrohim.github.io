(function($) {
    'use strict';
	const form_url = "https://script.google.com/macros/s/AKfycbyc23tpeLRuYjkIzm0ltiw6xIkeGQJhShpFsBMu/exec"
	const social_url = {
		stackoverflow: "https://stackoverflow.com/users/9423091/syahid-nurrohim",
		facebook: "https://www.facebook.com/s.nurrohim/",
		twitter: "https://twitter.com/reallyneedhim",
		linkedin: "#",
		github: "https://github.com/syahidnurrohim"
	}
    var navbar = $('.js-navbar:not(.navbar-fixed)');
	
	$(".social-list").each(function(id, e) {
		for (let i = 0; i < e.children.length; i++) {
			const social = e.children[i]
			social.setAttribute("href", social_url[social.className])
		}
	})

    $(window).on('load', function() {
        $('.loader').fadeOut(1000);
    });
    navbar.affix({
        offset: {
            top: 50
        }
    });
    navbar.on('affix.bs.affix', function() {
        if (!navbar.hasClass('affix')) {
            navbar.addClass('animated slideInDown');
        }
    });
    navbar.on('affixed-top.bs.affix', function() {
        navbar.removeClass('animated slideInDown');
    });
    $('.nav-mobile-list li a[href="#"]').on('click', function() {
        $(this).closest('li').toggleClass('current');
        $(this).closest('li').children('ul').slideToggle(200);
        return false;
    });
    $('.navbar-toggle').on('click', function() {
        $('body').removeClass('menu-is-closed').addClass('menu-is-opened');
    });
    $('.close-menu, .click-capture').on('click', function() {
        $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
        $('.menu-list ul').slideUp(300);
    });
    if ($('.owl-carousel').length > 0) {
        $(".review-carousel").owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                720: {
                    items: 1,
                },
                1280: {
                    items: 1
                }
            },
            responsiveRefreshRate: 0,
            nav: true,
            navText: [],
            animateIn: 'fadeIn',
            dots: false
        });
    }
    if ($('.pagepiling').length > 0) {
        $('.pagepiling').pagepiling({
            scrollingSpeed: 280,
            loopBottom: true,
            anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
            afterLoad: function(anchorLink, index) {
                if ($('.pp-section.active').scrollTop() > 0) {
                    $('.navbar').removeClass('navbar-white');
                } else {
                    $('.navbar').addClass('navbar-white');
                }
            }
        });
        $('.pp-scrollable').on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop > 0) {
                $('.navbar-2').removeClass('navbar-white');
            } else {
                $('.navbar-2').addClass('navbar-white');
            }
        });
        $('#pp-nav').remove().appendTo('body').addClass('white right-boxed hidden-xs');
        $('.pp-nav-up').on('click', function() {
            $.fn.pagepiling.moveSectionUp();
        });
        $('.pp-nav-down').on('click', function() {
            $.fn.pagepiling.moveSectionDown();
        });
    }
    $('.project-box').on('mouseover', function() {
        var index = $('.project-box').index(this);
        $('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });
    if ($('.js-form').length) {
        $('.js-form').each(function() {
            $(this).validate({
                errorClass: 'error wobble-error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: form_url,
                        data: $(form).serialize(),
                        success: function() {
                            $('#error').modal('hide');
                            $('#success').modal('show');
                        },
                        error: function() {
                            $('#success').modal('hide');
                            $('#error').modal('show');
                        },

                    });
                }
            });
        });
    }
})(jQuery);
