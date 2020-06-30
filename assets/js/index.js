var arrowLeft=$("#arrow-left");
var arrowRight=$("#arrow-right");
var card=$(".card");

arrowLeft.click(function(e){
    card.removeClass("slide-right");
    card.addClass("slide-left");
});

arrowRight.click(function(e){
    card.removeClass("slide-left");
    card.addClass("slide-right");
});