function showWindow(classText) {

    $("." + classText).show(500)

    $("html, body").animate({
        scrollTop: ($("." + classText).first().offset().top)
    }, 2000);
}

function closeWindows(classText) {

    $("." + classText).hide(1000);
}