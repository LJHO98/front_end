const cardImage = ["cat.png", "dog.png", "cat.png", "dog.png"];
let timeHd = 0;
let playMinute = 0;
let playSecond = 0;
let timeText = '';
let selectedCards = [];
let matchedCards = 0;

$(function() {
    $("#start").click(start);
    $("#restart").attr("disabled", true);
    $("#restart").click(restart);
    randomImg();
});

function time(){
    $("#playTime").text('00:00');
    timeHd = setInterval(function(){
        playSecond++;
        if(playSecond == 60){
            playSecond = 0;
            playMinute++;
        }
        var secondText = playSecond <=9 ? '0' + playSecond : playSecond;
        var minuteText = playMinute <=9 ? '0' + playMinute : playMinute;
        timeText = `${minuteText}:${secondText}`;
        $("#playTime").text(timeText);
    }, 1000); // 1000은 1초이다.
}

function start() {
    time();
    $(".card").click(userSelect);
    $("#start").attr("disabled", true);
    $("#restart").attr("disabled", false);

}

function restart() {
    clearInterval(timeHd);
    $(".card img").remove();
    $(".card").removeClass("click");
    selectedCards = [];
    matchedCards = 0;
    playMinute = 0;
    playSecond = 0;
    $("#start").attr("disabled", true);
    $("#restart").attr("disabled", false);
    randomImg();
    time();
    console.log(timeText);
}

function userSelect() {
    if ($(this).hasClass("click") || selectedCards.length >= 2) {
        return;
    }

    $(this).addClass("click");
    $(this).find("img").css('display', 'block');
    selectedCards.push($(this));

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const img1 = selectedCards[0].find("img").attr("src");
    const img2 = selectedCards[1].find("img").attr("src");

    if (img1 === img2) {
        matchedCards += 2;
        selectedCards = [];
        if (matchedCards === cardImage.length) {
            alert("모든 카드를 맞췄습니다!");
            clearInterval(timeHd);
        }
    } else {
        selectedCards[0].removeClass("click");
        selectedCards[1].removeClass("click");
        selectedCards[0].find("img").css('display', 'none');
        selectedCards[1].find("img").css('display', 'none');
        selectedCards = [];
    }
}

function randomImg() {
    const images = cardImage.sort(() => 0.5 - Math.random());
    $(".card").each(function(index) {
        $(this).append('<img src="./image/' + images[index] + '" alt="card image" style="display:none;">');
    });
}