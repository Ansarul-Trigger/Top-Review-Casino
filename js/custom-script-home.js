$(document).ready(function () {
    //Show page
    setTimeout(function () {
        $('body').addClass('show-page');
    }, 400);

    $('.csvone').click(function (e) {
        e.stopPropagation();

    });

    $('.candt').click(function (e) {
        e.stopPropagation();

    });

    $('.company-rate').click(function (e) {
        e.stopPropagation();

    });

    $('.company-score-value').click(function (e) {
        e.stopPropagation();

    });
    $('.tncs').click(function (e) {
        e.stopPropagation();

    });

    // Bubble
    if ($(window).width() >= 540) {
        const timeoutShow = Math.floor(Math.random() * (2000 - 1000)) + 1000;
        const timeoutHide = Math.floor(Math.random() * (10000 - 5000)) + 5000;
        setTimeout(function () {
            $('.info-window').fadeIn(600);
            setTimeout(function () {
                $('.info-window').fadeOut(600);
            }, timeoutHide);
        }, timeoutShow);
    }

    $('.js-open-adv').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.offer-footer-adv').find('.offer-footer-popup').show();
    });

    $('.js-close-adv').on('click', function () {
        $(this).closest('.offer-footer-popup').hide();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });


    $('.js-close-bubble').on('click', function () {
        $(this).closest('.social-bubble').fadeOut(600);
    });

    /* Main menu section*/

    // Add class to slide mobile menu options
    if ($(window).width() < 1025) {
        $('.nav-link.dropdown-toggle').each(function () {
            $(this).on('click', function () {
                $(this).siblings('.dropdown-menu').toggleClass('show').closest('li').toggleClass('show');
            });
        });
    }


    $('.js-main-menu-toggle').on('click', function () {
        $(this).toggleClass('is-active');
        $('#navbarSupportedContent').toggleClass('show');
    });

    // Calculation main menu position
    const headerHeight = $('.view-header').height();
    $('.view-main').css({
        'paddingTop': headerHeight
    });

    $('#navbarSupportedContent').css({
        'top': headerHeight
    });

    // Above fuctions on resize event
    $(window).resize(function () {
        if ($(window).width() < 1025) {
            $('.nav-link.dropdown-toggle').each(function () {
                $(this).on('click', function () {
                    $(this).siblings('.dropdown-menu').toggleClass('show').closest(
                        'li').toggleClass('show');
                });
            });
        }

        const headerHeight = $('.view-header').height();

        $('.view-main').css({
            'paddingTop': headerHeight
        })

        $('#navbarSupportedContent').css({
            'top': headerHeight
        })
    });
});

// camelize function - for extracting the Plan name from button inner html
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

jQuery(document).ready(function () {
    // Add click events on tabs


    // Get the element with id="defaultOpen" and click on it
    jQuery("#defaultOpen").click();


    var nInitialCount = 65; //Intial characters to display
    var moretext = "More";
    var lesstext = "Less";
    $('.longtext').each(function () {
        var paraText = $(this).html();
        if (paraText.length > nInitialCount) {
            var sText = paraText.substr(0, nInitialCount);
            var eText = paraText.substr(nInitialCount, paraText.length - nInitialCount);
            var newHtml = sText + '<span>...</span><span class="moretext"><span>' + eText +
                '</span><a href="" class="links">' + moretext + '</a></span>';
            $(this).html(newHtml);
        }
    });

    $(".links").on('click', function (e) {
        event.stopPropagation();
        var lnkHTML = $(this).html();
        if (lnkHTML == lesstext) {
            $(this).html(moretext);
        } else {
            $(this).html(lesstext);
        }
        $(this).prev().toggle();
        $(this).parent().prev().toggle();
        e.preventDefault();
    });

});
/********* Down Footer Script Cutom*************/