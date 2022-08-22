function showServices(id) {
    var btn = $("#services-" + id);
    var list = $("#services-data-" + id);
    var btn_other = $(".services-button").not("#services-" + id);
    var list_other = $(".services-data").not("#services-data-" + id);

    btn.addClass("active");
    btn.removeClass("inactive");
    list.addClass("active");
    list.removeClass("inactive");

    btn_other.each(function () {
        $(this).addClass("inactive");
        $(this).removeClass("active");
    });

    list_other.each(function () {
        $(this).addClass("inactive");
        $(this).removeClass("active");
    });
}

$(document).ready(function () {
    showServices(1);
});