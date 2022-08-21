function showServices(id) {

    var btn = $("#services-" + id);
    var list = $("#services-data-" + id);
    var btn_other = $(".services-button").not("#services-" + id);
    var list_other = $(".services-data").not("#services-data-" + id);

    btn.classList.add("active");
    btn.classList.remove("inactive");
    list.style.color = "red";

    btn_other.each(function (i, el) {
        el.style.color = "red";
        // el.style.display = "block";
    });
}