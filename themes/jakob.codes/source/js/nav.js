$(document).ready(function() {
    function getScrollOffset(el, nav) {
        if (nav) {
            return $(el).offset().top + $(el).height() + 80;
        } else {
            return $(el).offset().top + $(el).height();
        }
    }

    var headerScroll = getScrollOffset("header", false);
    // From here on we have to subtract the navigation bar itself
    var about_meScroll = getScrollOffset("#about-me", true);
    var portfolioScroll = getScrollOffset("#portfolio", true);

    // Making the navigation sticky and underlining the navigation entries
    $(window).on('scroll', function() {
        var stop = Math.round($(window).scrollTop());

        if (stop > headerScroll) {
            $("nav").addClass("nav-fixed");
        }
        if (stop < headerScroll) {
            $("nav").removeClass("nav-fixed");
            $("#about-me__selected").css('border-bottom', 'none');
        }
        if (stop > headerScroll && stop < about_meScroll) {
            $("#portfolio__selected").css('border-bottom', 'none');
            $("#about-me__selected").css('border-bottom', '.125em solid crimson');
        }
        if (stop > about_meScroll && stop < portfolioScroll) {
            $("#about-me__selected").css('border-bottom', 'none');
            $("#contact__selected").css('border-bottom', 'none');
            $("#portfolio__selected").css('border-bottom', '.125em solid olivedrab');
        }
        if (stop > portfolioScroll) {
            $("#portfolio__selected").css('border-bottom', 'none');
            $("#contact__selected").css('border-bottom', '.125em solid steelblue');
        }
    });
});
