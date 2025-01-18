$(document).ready(function() {

    const header = $("#header");
    const imagen0 = $("#img-logo-0");
    const imagen1 = $("#img-logo-1");

    $(window).on("scroll", function () {
        if (header.hasClass("fade_down_effect")) {
            imagen1.show();
            imagen0.hide();
          } else {
            imagen0.show();
            imagen1.hide();
          }
    })
})