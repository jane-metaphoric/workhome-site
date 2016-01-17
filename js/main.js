//анимация для блока скиллс
  $(document).ready(function(){
        $('.skills').viewportChecker({
        classToAdd: 'line_yellow1 line_yellow2 line_yellow3 line_yellow4'  

});
        $( function() {
            // настройки для слайдера1
            $( '#cbp-fwslider' ).cbpFWSlider(); 
            // настройки для слайдера2
            $( '#slide-fwslider' ).cbpFWSlider(); 
            // настройки для портфолио
            $(".fancybox").fancybox({
            transitionIn: 'fade'
            }); 
            // настройки для слайдера3
            $('.third').flexslider({
            animation: "slide"               
         });

        // настройки для карусели
        $('.clients-items').flexslider({  
            animation: "slide",
            minItems: 1,
            maxItems: 4

            });

        });

        $(document).ready(function(){
        var show = true;
        var countbox1 = "#diagram";
        $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox1).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа

        var e_height = $(countbox1).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        $("#cell1").spincrement({
        thousandSeparator: "",
        duration: 2000,
        from:0,
        to:86
        });
        $("#cell2").spincrement({
        thousandSeparator: "",
        duration: 2000,
        from:0,
        to:76
        });
        $("#cell3").spincrement({
        thousandSeparator: "",
        duration: 2000,
        from:0,
        to:83
        });
        $("#cell4").spincrement({
        thousandSeparator: "",
        duration: 2000,
        from:0,
        to:73
        });

        show = false;
         }
            });
        });
});
        $(document).ready(function(){
        var show = true;
        var countbox2 = "#fact_wrapper";
        $(window).on("scroll load resize", function(){

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена

        var w_top2 = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница    // Расстояние от блока со счетчиками до верха всего документа
        var e_top2 = $(countbox2).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height2 = $(window).height();        // Высота окна браузера
        var d_height2 = $(document).height();      // Высота всего документа

        var e_height2 = $(countbox2).outerHeight(); // Полная высота блока со счетчиками

        if(w_top2 + 200 >= e_top2 || w_height2 + w_top2 == d_height2 || e_height2 + e_top2 < w_height2){
        $("#fact_text1").spincrement({
        thousandSeparator: "",
        duration: 4000,
        from:0,
        to:6
        });
        $("#fact_text2").spincrement({
        thousandSeparator: "",
        duration: 4000,
        from:0,
        to:743
        });
        $("#fact_text3").spincrement({
        thousandSeparator: "",
        duration: 4000,
        from:0,
        to:435
        });
        $("#fact_text4").spincrement({
        thousandSeparator: "",
        duration: 4000,
        from:0,
        to:225
        });

        show = false;
         }
            });
        });



        $(document).ready(function(){
            $('.mobile').click(function(){
            $('.cat-list').slideToggle();
            });
              $(".works-sub_1").click(function () {
                $(".submenu-1").slideToggle();
            });
        });

        // настройки для счетчика
        $(function () {
          var austDay = new Date();
          //(austDay = new Date(austDay.getFullYear() + 1,)  0 - 1-й месяц по счету() , 26 - число, 2 - часов, 0 - минутб 0 - секунд);
          austDay = new Date(austDay.getFullYear() + 1, 0, 26, 2, 0, 0);
          $('#defaultCountdown').countdown({until: austDay});
          $('#year').text(austDay.getFullYear());
        });

        // валидация полей
        function isVal(){
        var email=document.getElementById('email-area').value;
        var status_email=document.getElementById('status_email');
        var re=/^\w+@\w+\.\w{2,4}$/i;
        if (re.test(email)) status_email.innerHTML="";
        else status_email.innerHTML="Адрес указан не верно";
        if (email.length==0 || email==null) status_email.innerHTML="Поле не заполнено"; 

        var name = document.getElementById('name-area').value;
        var status_name=document.getElementById('status_name');
        var er=/^[a-zA-Z]{3,}$/;
        if (er.test(name)) status_name.innerHTML="";
        else status_name.innerHTML="Имя должно быть не менее трех символов";
        if (name.length === 0 || name == null) status_name.innerHTML="Поле не заполнено";
        }
$(window).load(function() {
    $(".text-demo").circulate({
        loop: true,
        width: 10.2,
        height: 10.2,
        speed: 1000
    });

    }); 



    
