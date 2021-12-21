$(document).ready(function() {

    $('.ToplateralBar').hide();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    $(window).scroll(function() {

        var height = $(window).height();
        var scroll_position = $(window).scrollTop();
        var object_position_top = scroll_position + 253

        console.log(object_position_top)

        if (object_position_top >= (height / 2)) {
            object_position_top = height / 2;

            $('.lateralBar').css({
                'top': '51%',
                'height': '49%'
            });

        } else {
            $('.lateralBar').css({
                'top': '39%',
                'height': '61%'
            });
        }

        if (object_position_top == 253) {
            $('.ToplateralBar').hide();
        }

        if (object_position_top >= 253) {
            $('.ToplateralBar').show();

            $('.ToplateralBar').css({
                'top': '24%'
            });
        }

        if (object_position_top >= 317) {

            $('.ToplateralBar').css({
                'top': '7%'
            });
        }

        $('.initialPoint').css({
            'top': object_position_top
        });
    });

    ini();
});

var IntervalID

function ini() {

    $(".logoFinal").show(1000, function() {
        IntervalID = setInterval(function() { afterInitialAnimate() }, 500);
    });

    // $(".logo1").show(600);
    // $(".logo2").show(600, function() {
    //     
    // });
}

function sleep(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* Do nothing */
    }
}

function afterInitialAnimate() {

    // $(".logo1").hide();
    // $(".logo2").hide();
    // $(".logoFinal").show(100, function() {
    //     $(".lateralBar").show(200);
    //     $(".initialPoint").show(200);
    // });

    $(".lateralBar").show(1200);
    $(".initialPoint").show(500);

    clearInterval(IntervalID)
}