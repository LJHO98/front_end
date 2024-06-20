$(function(){
    $("#start").click(start);
});

function start(){
    $(".card").click(userSelect);
}

function userSelect(){
    var idx = $(".card").index($(this));
    console.log(idx);
    
    $(".card img").css('display', 'block');
}