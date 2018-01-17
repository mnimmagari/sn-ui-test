/**
 * Created by bhupal.lambodhar on 11/5/17.
 */

var App = function () {

    function handleIEFixes() {
        //fix html5 placeholder attribute for ie7 & ie8
        if (jQuery.browser.msie && jQuery.browser.version.substr(0, 1) < 9) { // ie7&ie8
            jQuery('input[placeholder], textarea[placeholder]').each(function () {
                var input = jQuery(this);

                jQuery(input).val(input.attr('placeholder'));

                jQuery(input).focus(function () {
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });

                jQuery(input).blur(function () {
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.val(input.attr('placeholder'));
                    }
                });
            });
        }
    }

    function handleBootstrap() {
        /*Bootstrap Carousel*/
        jQuery('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });

        /*Tooltips*/
        jQuery('.tooltips').tooltip();
        jQuery('.tooltips-show').tooltip('show');
        jQuery('.tooltips-hide').tooltip('hide');
        jQuery('.tooltips-toggle').tooltip('toggle');
        jQuery('.tooltips-destroy').tooltip('destroy');

        /*Popovers*/
        jQuery('.popovers').popover();
        jQuery('.popovers-show').popover('show');
        jQuery('.popovers-hide').popover('hide');
        jQuery('.popovers-toggle').popover('toggle');
        jQuery('.popovers-destroy').popover('destroy');
    }

    function handleSearch() {
        jQuery('.search').click(function () {
            if(jQuery('.search-btn').hasClass('fa-search')){
                jQuery('.search-open').fadeIn(500);
                jQuery('.search-btn').removeClass('fa-search');
                jQuery('.search-btn').addClass('fa-times');
            } else {
                jQuery('.search-open').fadeOut(500);
                jQuery('.search-btn').addClass('fa-search');
                jQuery('.search-btn').removeClass('fa-times');
            }
        });
    }

    function handleToggle() {
        jQuery('.list-toggle').on('click', function() {
            jQuery(this).toggleClass('active');
        });
    }

    function handleHeader() {
        jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop()>100){
                jQuery(".header-fixed .header").addClass("header-fixed-shrink");
            }
            else {
                jQuery(".header-fixed .header").removeClass("header-fixed-shrink");
            }
        });
    }

    function scrollToTop() {
        jQuery.scrollUp({
            scrollName: 'scroll-up',        // Element ID
            topDistance: '300',            // Distance from top before showing element (px)
            topSpeed: 300,                 // Speed back to top (ms)
            animation: 'fade',             // Fade, slide, none
            animationInSpeed: 200,         // Animation in speed (ms)
            animationOutSpeed: 200,        // Animation out speed (ms)
            scrollText: '<i class="rounded-x icon-arrow-up"></i>',   // Text for element
            activeOverlay: false           // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    }

    return {
        init: function () {
            handleBootstrap();
            handleIEFixes();
            handleSearch();
            handleToggle();
            handleHeader();
            scrollToTop();
        },

        initParallaxBg: function () {
            jQuery('.parallaxBg').parallax("50%", 0.2);
            jQuery('.parallaxBg1').parallax("50%", 0.4);
        }

    };

}();
