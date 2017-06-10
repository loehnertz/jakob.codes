$(document).ready(function() {
    function getScrollOffset(el) {
        return ($(el).offset().top + $(el).height() - 80);
    }

    var headerScroll = getScrollOffset("header");
    var about_meScroll = getScrollOffset("#about-me");
    var portfolioScroll = getScrollOffset("#portfolio");

    // Making the navigation sticky and underlining the navigation entries
    $(window).on('scroll', function() {
        var stop = Math.round($(window).scrollTop());

        if (stop > headerScroll) {
            $("nav").addClass("nav-fixed");
        }
        if (stop < headerScroll) {
            $("nav").removeClass("nav-fixed");
            $("#about-me__selected").css('border-bottom-color', 'transparent');
        }
        if (stop > headerScroll && stop < about_meScroll) {
            $("#portfolio__selected").css('border-bottom-color', 'transparent');
            $("#about-me__selected").css('border-bottom-color', 'crimson');
        }
        if (stop > about_meScroll && stop < portfolioScroll) {
            $("#about-me__selected").css('border-bottom-color', 'transparent');
            $("#contact__selected").css('border-bottom-color', 'transparent');
            $("#portfolio__selected").css('border-bottom-color', 'olivedrab');
        }
        if (stop > portfolioScroll) {
            $("#portfolio__selected").css('border-bottom-color', 'transparent');
            $("#contact__selected").css('border-bottom-color', 'steelblue');
        }
    });
});
