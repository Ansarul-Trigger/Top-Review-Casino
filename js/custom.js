
jQuery(function() {  

    jQuery.fatNav();
    jQuery('.fat-nav ul li.menu-item-has-children').append(" <span class='toggle_button'><small></small></span>");
    jQuery('.fat-nav ul ul').hide();
    jQuery('.fat-nav ul li.menu-item-has-children > .toggle_button').click(function(event) {
        if (jQuery(this).parent().children('ul').hasClass('submenu')) {
            jQuery(this).parent().children('ul').removeClass("submenu").slideUp(400);
            jQuery(this).removeClass('active_item');
        } else {
            jQuery(this).parent().children('ul').addClass("submenu").slideDown(400);
            jQuery(this).addClass('active_item');
        }
    });

});

jQuery(window).resize(function() {
    var win_width = jQuery(window).width();
    if (win_width > 770) {
        jQuery('.fat-nav').removeClass('active').css("display", "none");
        jQuery('.hamburger').removeClass('active');
    }
});

$(document).ready(function() {
    // @See https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator
    var usrAg = navigator.userAgent;
    var browser = 'unknown';
    if (usrAg.indexOf("Firefox") > -1) {
        browser = "Mozilla Firefox";
    } else if (usrAg.indexOf("SamsungBrowser") > -1) {
        browser = "Samsung Internet";
    } else if (usrAg.indexOf("Opera") > -1 || usrAg.indexOf("OPR") > -1) {
        browser = "Opera";
    } else if (usrAg.indexOf("Trident") > -1) {
        browser = "Microsoft Internet Explorer";
    } else if (usrAg.indexOf("Edge") > -1) {
        browser = "Microsoft Edge (Legacy)";
    } else if (usrAg.indexOf("Edg") > -1) {
        browser = "Microsoft Edge (Chromium)";
    } else if (usrAg.indexOf("Chrome") > -1) {
        browser = "Google Chrome or Chromium";
    } else if (usrAg.indexOf("Safari") > -1) {
        browser = "Apple Safari";
    }

    $('.bounce-company-logo').each(function() {
        let src = this.getAttribute('src');
        if (src && src.substring(src.length-3) == 'gif') {
            $(this).removeClass('bounce-company-logo');
        }
    });
});