$(function(){

        //menu
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(this).find(".sub").stop().slideUp();
    })//


    //fade
    $(".fade li").eq(0).siblings().hide();
    var n = 0;
    setInterval(function(){
        $(".fade li").eq(n).fadeOut();
        if(n == 2){
            n=0;
        }else{
            n++;
        }
        $(".fade li").eq(n).fadeIn();
    },3000)//

    //tab
    $(".content h4").click(function(){
        $(".content h4").removeClass("on");
        $(this).addClass("on");

        $(".content ul").removeClass("on");
        $(this).next().addClass("on");
    })//

    //pop
    $(".p_click").click(function(){
        $(".pop").fadeIn();
    })//
    $(".close").click(function(){
        $(".pop").fadeOut();
    })//


})//jquery  