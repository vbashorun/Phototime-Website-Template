$(document).ready(function(){
    var showMenu = true;

    // mobile menu transitions
    $("#menuButton").click(function(){

        if(showMenu)
            $("#mobileMenu").css("transform", "translateX(0px)");

        else
            $("#mobileMenu").css("transform", "translateX(-400px)");

        showMenu = !showMenu;
    });

    // social media logo animatins
    $(".mini-logo").hover(function(){
        $(this).addClass("animated shake");
    });

    $(".mini-logo").mouseleave(function(){
        $(this).removeClass("animated shake");
    });

    // green button transitions
    $(".green-button").mousedown(function(){
        $(this).css("background-color", "#5C5C5C");
        $(this).css("color", "#fff");
    });

    $(".green-button").mouseup(function(){
        $(this).css("background-color", "#fff");
        $(this).css("color", "#16a085");
    });

    $(".green-button").mouseenter(function(){
        $(this).css("background-color", "#fff");
        $(this).css("color", "#16a085");
    });

    $(".green-button").mouseleave(function(){
        $(this).css("background-color", "#16a085");
        $(this).css("color", "#fff");
    });

    // store button transistions
    $(".label-div").mousedown(function(){
        $(this).css("background-color", "#5C5C5C");
        $(this).find("label").css("color", "#fff");
    });

    $(".label-div").mouseup(function(){
        $(this).css("background-color", "#fff");
        $(this).find("label").css("color", "#16a085");
    });

    $(".label-div").mouseenter(function(){
        $(this).css("background-color", "#fff");
        $(this).find("label").css("color", "#16a085");
    });

    $(".label-div").mouseleave(function(){
        $(this).css("background-color", "#1abc9c");
        $(this).find("label").css("color", "#fff");                    
    });
});