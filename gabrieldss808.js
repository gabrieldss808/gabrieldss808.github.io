$(document).ready(function() {
    ini();
});

var IntervalID

function ini() {

    $(".logo1").show(600);
    $(".logo2").show(600, function() {
        IntervalID = setInterval(function() { afterInitialAnimate() }, 1500);
    });
}

function sleep(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* Do nothing */
    }
}

function afterInitialAnimate() {

    $(".logo1").hide();
    $(".logo2").hide();
    $(".logoFinal").show(100, function() {
        $(".lateralBar").show(200);
    });

    clearInterval(IntervalID)
}