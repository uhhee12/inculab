 $(function () {
     var gnbA = $('.main_menu>li>a'); //주메뉴
     var ul = $('.main_menu>li>ul'); //서브메뉴

     gnbA.on("mouseenter focus", function () {

         //$(this).next().show();        //서브 메뉴 보이기
         if (gnbA.target) {
             $(gnbA.target).next().hide(); //이전 서브메뉴 비활성화
             $(this).next().show(); //현재 선택한 주메뉴 활성화
         } else {
             $(this).next().show();
         }
         gnbA.target = this; //현재 선택한 메뉴
     });

     gnbA.on("mouseleave blur", function () {
         $(this).next().hide(); //서브 메뉴 감추기
     });

     //    서브메뉴에 마우스 커서를 올리면, 주메뉴에서 마우스가 빠지게 됨 -> 서브메뉴가 보여야 함.
     ul.hover(function () {
         $(this).show(); //this는 현재 선택한 서브메뉴 보이기                            
     }, function () {
         $(this).hide(); //this는 현재 선택한 서브 메뉴 감추기
     });
     
     
 });


 $(document).ready(function() {
            $(".border_btn2, #menu1_2box2_pop1Btn").on("click", function() {
                $(".pop").css({
                    visibility: "visible",
                    opacity: 1
                });
            });

            $(".popClose").on("click", function() {
                $(".pop").css({
                    visibility: "hidden",
                    opacity: 0
                });
            });
            $(document).on("click", function(e) {
                if ($(".pop").is(e.target)) {
                    $(".pop").css({
                        visibility: "hidden",
                        opacity: 0
                    });
                }
            });
     
     $("#menu1_2box2_pop1Btn2").on("click", function() {
                $(".pop2").css({
                    visibility: "visible",
                    opacity: 1
                });
            });

            $(".popClose").on("click", function() {
                $(".pop2").css({
                    visibility: "hidden",
                    opacity: 0
                });
            });
            $(document).on("click", function(e) {
                if ($(".pop2").is(e.target)) {
                    $(".pop2").css({
                        visibility: "hidden",
                        opacity: 0
                    });
                }
            });
     
      $("#main_pop").click(function(){
                $(".main_pop").fadeIn();
                                            });
            $(".close").click(function(){
                $(".main_pop").fadeOut();
            });
            
           

            $('ul.tabs li').click(function() {
                var tab_id = $(this).attr('data-tab');

                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            });
     
     
        });











