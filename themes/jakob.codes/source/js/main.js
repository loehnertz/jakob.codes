$(document).ready(function() {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 1234, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    }
                });
            }
        }
    });

    $('#slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        pauseOnHover: true,
        autoplay: true,
        speed: 1234
    });

    $("#email, #nachricht").blur(function() {
        if (!$("#email, #nachricht").val()) {
            $("#email, #nachricht").css("border", "3px solid steelblue");
            $(".alert-box").fadeTo("slow", 1);
            $("#submit").attr("disabled", "true");
        } else {
            $("#email, #nachricht").css("border", "0px solid steelblue");
            $(".alert-box").fadeTo("fast", 0);
            $("#submit").removeAttr("disabled");
        }
    });
});