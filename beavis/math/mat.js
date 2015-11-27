var things =("bpa.jpg", "lo.jpg");
var ings=("winn.jpg", "dx.jpg");
var randomThing = things[Math.floor(Math.random()*things.length)]; //2
   
   $("body").append('<div id="buttonDIV"> </div>');



$(".buttonDIV").mouseover(function(){
    $(".thing").css("background-color", "slategray");
        var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
        $(this).css("left",leftPosition);
        var newColor = '#' + Math.floor(Math.random()*6902037595864385).toString(20);
  $(this).css("border-color",newColor);
});


$(window).click(function() {
    $(".link").each(function() {
        var leftPosition = Math.floor(Math.random()*($(window).height()-60)) + "px";
        var topPosition = Math.floor(Math.random()*($(window).width()-50)) + "px";
        var topPosition = Math.floor(Math.random()*($(window).width()-50)) + "px";
        $(this).css("left",leftPosition).css("top",topPosition);
    });
}); 
   
   

$("body").css("background-image", "url(img/winn.jpg)");