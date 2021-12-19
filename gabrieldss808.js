$(document).ready(function() {
    //ini();
});

function ini() {

    $(".logo2").show(200, function() {
        $(".logo2").animate({
            "left": "27%"
        }, 1000, function() {

        });
        $(".logo3").animate({
            "left": "73%"
        }, 1000, function() {
            $(".logo1").show()
            $(".logo1").animate({
                "width": "490px",
                "left": "35.2%"
            }, 1900, function() {
                $(".logo3").show(200, function() {
                    sleep(1000);
                    $(".logo1").animate({
                        "width": "0px",
                        "left": "32%"
                    }, 1900, function() {
                        $(".logo4").show();
                        $(".logo2").animate({
                            "left": "27%"
                        }, 1900, function() {

                        });
                        $(".logo3").animate({
                            "left": "65%"
                        }, 1900, function() {

                        });
                        $(".logo4").animate({
                            "width": "363px",
                            "left": "36%"
                        }, 1900, function() {
                            sleep(1000);
                            $(".logo1").hide(700);
                            $(".logo2").hide(700);
                            $(".logo3").hide(700);
                            $(".logo4").hide(700);
                        });
                    });
                });
            });
        });
    });
}

function sleep(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* Do nothing */
    }
}