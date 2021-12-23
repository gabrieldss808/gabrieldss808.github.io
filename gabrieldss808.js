$(document).ready(function() {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    $(window).scroll(function() {

        var height = $(window).height();
        var scroll_position = $(window).scrollTop();

        scroollAnimations(height, scroll_position)
    });

    $(window).resize(function() {
        var height = $(window).height();
        var scroll_position = $(window).scrollTop();

        scroollAnimations(height, scroll_position)
    });

    ini();
});

var IntervalID

function ini() {

    $(".logoFinal").show(1000, function() {
        IntervalID = setInterval(function() { afterInitialAnimate() }, 100);
    });
}

function sleep(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* Do nothing */
    }
}

function afterInitialAnimate() {

    $(".lateralBar").show(1200, function() {
        $(".initialInformations").show(600)
        $(".ToplateralBar").show(600)
    });
    $(".initialPoint").show(500);

    clearInterval(IntervalID)
}

function scroollAnimations(ScreenHeight, ScrollTop) {

    animateLateralPoint(ScreenHeight, ScrollTop)

    animateLateralBar(ScreenHeight, ScrollTop)

}

function animateLateralPoint(ScreenHeight, ScrollTop) {

    var PercentScreen = ScreenHeight * 0.38
    var object_position_top = ScrollTop + PercentScreen


    if (object_position_top >= (ScreenHeight / 2)) {
        object_position_top = ScreenHeight / 2;
    }

    $('.initialPoint').css({
        'top': object_position_top
    });
}

function animateLateralBar(ScreenHeight, ScrollTop) {

    var PercentScreen = ScreenHeight * 0.39
    var PercentHeightLtB = ScreenHeight * 0.61
    var PercentHeightLtBT = ScreenHeight * 0.34
    var object_position_top = ScrollTop + PercentScreen
    var heightLateralBar = PercentHeightLtB - ScrollTop
    var heightLateralBarTop = PercentHeightLtBT - ScrollTop

    console.log(ScrollTop)

    if (object_position_top >= (ScreenHeight / 2)) {
        object_position_top = ScreenHeight / 2;

        $('.lateralBar').css({
            'top': '51%',
            'height': '49%'
        });

        if (ScrollTop <= 174) {

            heightLateralBarTop = heightLateralBarTop + 5

            $('.ToplateralBar').css({
                'top': heightLateralBarTop + "px"
            });

        } else {
            $('.ToplateralBar').css({
                'top': "7%"
            });
        }



    } else {
        $('.lateralBar').css({
            'top': object_position_top + 'px',
            'height': heightLateralBar + 'px'
        });

        $('.ToplateralBar').css({
            'top': heightLateralBarTop + "px"
        });
    }

    // if (object_position_top == 253) {
    //     $('.ToplateralBar').hide();
    // }

    // if (object_position_top >= 253) {

    // }

    // if (object_position_top >= 317) {

    //     $('.ToplateralBar').css({
    //         'top': '7%'
    //     });
    // }

}