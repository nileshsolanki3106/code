$(document).ready(function() {
    $(".tab__btn li a").click(function() {
        $(".tab__btn li a").removeClass("active");
        $(this).addClass("active")
        var tabid = $(this).attr("href");
        $(".tab_content").hide()
        $(tabid).show();
        return false;
    });
    $(".tab-nav li a").click(function() {

        $(".tab-nav li a").removeClass("active");
        $(this).addClass("active");

        var targetId = $(this).data("targets");
        if (targetId) {
            $(".de__tab .tab__content").removeClass("active");
            $(targetId).addClass("active");
        }
    });

    $(".tab-nav li a").click(function() {
        $(".tab-nav li a").removeClass("active");
        $(this).addClass("active")
        var tabid = $(this).attr("href");
        $(".responsive__tab .tab__content").removeClass("active")
        $(tabid).addClass("active");
        return false;
    });





});