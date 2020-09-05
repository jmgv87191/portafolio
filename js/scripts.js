$(document).ready(function(){

    var acercaDe = $("#cont-acerca-de").offset().top,
        trabajos = $("#cont-trabajos").offset().top,
        contacto = $("#cont-contacto").offset().top

    $("#acerca-de").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: acercaDe -390
        },500);
    });

    $("#trabajos").on("click", function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: trabajos -50
        },500);
    })

    $("#contacto").on("click",function(e){
        e.preventDefault();
        $("html,body").animate({
            scrollTop:contacto
        },500)
    })

})