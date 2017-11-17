$(document).ready(function() {
    $("#section_2_pic").attr("src", section2Pic())
    }
);


function section2Pic() {
    const windowSize = $(window).width();
    let section2Src = "img/1m.jpg";
    if (windowSize > 1000) {
        section2Src = "img/1.jpg";
    }
    return section2Src;
}
