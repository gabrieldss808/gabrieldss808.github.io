function showWindow(classText) {

    $("." + classText).show()

    $("html, body").animate({
        scrollTop: ($("." + classText).first().offset().top)
    }, 1000);
}

function closeWindows(classText) {

    $("." + classText).hide(1000);
}