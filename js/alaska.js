$(document).ready(function(){

    $(".intro").hide();
    $(".menu-toggle").click(function(){

       $(".site-nav").toggleClass("site-nav--open", 900);
       $(this).toggleClass("open");
       $(".intro").toggle();
       $("section .bread").toggleClass("bread-hide");

   });

    $(".list-one").click(function(){
        $(this).next(".sub-menu").toggle();
    });

    $(".list-two").click(function(){
        $(this).next(".sub-sub-menu").toggle();
    });


    $(".list-two").click(function () {
        $(this).find($(".fa")).toggleClass('fa-chevron-up fa-chevron-down');
    });

    $(".site-nav .menu-item.close").click(function () {
       $(".sub-menu").hide();
   });


});

