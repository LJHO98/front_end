//전역변수
let endCount = 0; //완성빙고 몇줄?
let playMinute = 0;
let playSecond = 0;
let time = 0; // setInterval의 핸들값;
let bingo = []; // 빙고 배열


$(function(){
    $("#start").click(start);

    //javscript 이용
    // var tdClick = document.getElementsByClassName("num");
    // // for(var i = 0; i < tdClick.length; i++){
    // for(var i in tdClick){ //배열일때 마지막 인덱스까지 반복
    //     tdClick[i].addEventListener('click', function(){ alert("클릭"); });
    // }

    //jQuery 이용
    // $(".num").click(bingoCheck);

});

function bingoCheck(){
    // jQuery에서 css 넣는 방법 - .css('속성','값');
    $(this).css('background', 'black');
    $(this).css('color', 'white');
    
    //클릭한 td에 표시된 숫자를 배열에서 0으로 변경
    //배열에 0이 저장된곳은 클릭한 숫자이다.
    var idx = $(".num").index(this); // 클릭한 td가 몇번째 인덱스인가
    bingo[idx] = 0; // 해당 td위치와 같은 bingo배열에 0으로 변경
    // 4번째 td 클릭하면 idx는 3이고 bingo[3] = 0 으로 변경하겠다는 내용
    /*
        빙고 몇줄??
        가로 세로 대각선 빙고인지 확인하는 내용과
        빙고가 5개 완성되면 게임 끝나게 하기
    */
}

function start(){
    //빙고시작 버튼 감추기
    $(this).hide(); //this 는 현재 함수를 실행한 객체 - div#start
    //빙고 진행 상황 보이기
    $("#screen").show();
    $("#ok").text(endCount);
    //플레이타임
    $("#playTime").text(' 00:00'  );
    time = setInterval(function(){
        playSecond++;
        if(playSecond == 60){
            playSecond = 0;
            playMinute++;
        }
        var secondText = playSecond <=9 ? '0' + playSecond : playSecond;
        var minuteText = playMinute <=9 ? '0' + playMinute : playMinute;
        var timeText = `${minuteText}:${secondText}`;
        $("#playTime").text(timeText);
    }, 1000); // 1000은 1초이다.

    Init(); // 25개 숫자 배열에 저장하기
    draw(); // 화면에 출력하기
    $(".num").click(bingoCheck);
}

function Init(){
    while(bingo.length != 25){
        var tmp = Math.floor(Math.random() * 50) + 1;
        if(bingo.indexOf(tmp) == -1)
            bingo.push(tmp);
    }
}
function draw(){
    var td = $(".num");
    console.log(td.length);
    for(var i = 0; i < td.length; i++){
        //jquery일떄는 .eq() 사용
        //javascript는 .eq()와 td[] 둘 중 조건에 맞는것을 사용
        td.eq(i).text(bingo[i]);
    }
    
 }
