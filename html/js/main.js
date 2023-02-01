/* intro */
setTimeout(() => $(".intro_flash").fadeOut(), 1000);
let introStep = 0;

$(document).ready(function () {
    /* 메인 다시 수정했어요. [2020-05-05] */
    $(".notice_box1").click(function () {

        var noticeTitle = $(this)
            .children()
            .eq(0); // 제목 태그 선택자
        var noticeText = $(this)
            .children()
            .eq(1); // 내용 태그 선택자

        // 내용 태그 CSS 조건문
        if (noticeText.css('display') == 'block') {
            if (noticeTitle.children('svg').hasClass('open')) { // 만약 open 클래스가 있을 경우 open 제거
                noticeTitle
                    .children('svg')
                    .removeClass("open");
            }
            noticeText.slideUp(300);
        } else {
            noticeTitle
                .children('svg')
                .addClass("open");
            noticeText.slideDown(300);
        }
    });

    $(".close_btn").on("click", function () {
        $(".main_pop")
            .removeClass("on")
            .fadeOut();
    });

    $(".main2_box .fee_btn").click(function () {
        $(".main2_box .more").slideToggle();
    });
    $("header .menu").on("click", function () {
        $(".menu_in")
            .fadeIn()
            .delay(200)
            .addClass("on");
    });
    $(".close").on("click", function () {
        $(".menu_in")
            .removeClass("on")
            .fadeOut();
    });

});
