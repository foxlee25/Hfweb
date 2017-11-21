$(document).ready(function() {
    $("#section_2_pic").attr("src", sectionPic("img/1m.jpg", "img/1.jpg"));
    $("#section_3_pic").attr("src", sectionPic("img/app_screen_mobile.png", "img/app_screen_desktop.png"));
    $("#section_3_pic2").attr("src", sectionPic("img/app_screen_2_mobile.png", "img/app_screen_2_desktop.png"));

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

// $(window).on("load",function() {
//     $(window).scroll(function() {
//         var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//         $(".fade").each(function() {
//             /* Check the location of each desired element */
//             var objectBottom = $(this).offset().top + $(this).outerHeight();
//
//             /* If the element is completely within bounds of the window, fade it in */
//             if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//                 if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//             } else { //object goes out of view (scrolling up)
//                 if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//             }
//         });
//         $(".fade_big").each(function() {
//             /* Check the location of each desired element */
//             var objectBottom = $(this).offset().top + $(this).outerHeight() - 300;
//
//             /* If the element is completely within bounds of the window, fade it in */
//             if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//                 if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//             } else { //object goes out of view (scrolling up)
//                 if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//             }
//         });
//     }).scroll(); //invoke scroll-handler on page-load
// });