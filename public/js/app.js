$(document).ready(function() {

    $("#section_2_pic").attr("src", sectionPic("img/1m.jpg", "img/1.jpg"));
    $("#section_3_pic").attr("src", sectionPic("img/app_screen_mobile.png", "img/app_screen_desktop.png"));
    $("#section_3_pic2").attr("src", sectionPic("img/app_screen_2_mobile.png", "img/app_screen_2_desktop.png"));
    fixedBtnCtrl();
    }
);

function sectionPic(mobile, desk) {
    const windowSize = $(window).width();
    let section2Src = mobile;
    if (windowSize > 800) {
        section2Src = desk;
    }
    return section2Src;
}


function fixedBtnCtrl() {
    setInterval(function () {
        let visible = $("#preOrder").visible();
        if (visible) {
            // $("#fixed-btn").attr("style", "display: none;");
            $(".top-fixed").attr("style", "display: none;");
            // $("#fixed-logo").attr("style", "display: none;");
        } else {
            // $("#fixed-btn").attr("style", "display: true;");
            $(".top-fixed").attr("style", "display: true;");
            // $("#fixed-logo").attr("style", "display: true;");
        }
    }, 500);
}
