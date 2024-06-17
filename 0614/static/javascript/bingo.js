//전역변수
let endCount = 0; //완성빙고 몇줄?
let playMinute = 0;
let playSecond = 0;
let time = 0; // setInterval의 핸들값;
let bingo = []; // 빙고 배열
let timeText = '';


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
    // if(endCount >= 5){ 
    //     return;
    // }
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
    
    // bingoRow(idx);
    // bingoCol(idx);
    // bingoDiag(idx);

    // if(endCount >= 5){
    //     end();
    // }
    var end=0;
    var row=0;
    var col=0;
    var diag1=0;
    var diag2=0;

    for( var i=0; i<5; i++){
        row=0;
        col=0;
        
        for( var k=0; k<5; k++){
            if(bingo[i*5+k]==0) row++;
            if(bingo[k*5+i]==0) col++;
        }

        if(bingo[i*6]==0) diag1++;
        if(bingo[(i+1)*4]==0) diag2++;
        if(row==5) end++;
        if(col==5) end++;
        if(diag1==5) end++;
        if(diag2==5) end++;
    
    }
    

    endCount = end;

    $("#ok").text(endCount);
    console.log(endCount);

    if(endCount == 5){
        alert("빙고 완성!")
        endGame();
    }else if(endCount > 5){
        alert("게임 오버!");
        endGame();
    }
}

function endGame(){
    $(".num").off(); //모든 이벤트 제거 .off('click');
    clearInterval(time);
}

// function bingoRow(idx){
//     if(idx > 0 && idx < 5){
//         if(bingo[0]==0 && bingo[1]==0 && bingo[2]==0 && bingo[3]==0 && bingo[4]==0){
//             endCount += 1;
//             console.log(endCount);
//             }
//     }
    
//     if(idx > 4 && idx < 10){
//         if(bingo[5]==0 && bingo[6]==0 && bingo[7]==0 && bingo[8]==0 && bingo[9]==0){
//             endCount += 1;
//             console.log(endCount);
//             }
//     }
//     if(idx > 9 && idx < 15){
//         if(bingo[10]==0 && bingo[11]==0 && bingo[12]==0 && bingo[13]==0 && bingo[14]==0){
//             endCount += 1;
//             console.log(endCount);
//             }
//     }
//     if(idx > 16 && idx < 20){
//         if(bingo[15]==0 && bingo[16]==0 && bingo[17]==0 && bingo[18]==0 && bingo[19]==0){
//             endCount += 1;
//             console.log(endCount);
//             }
//     }
//     if(idx > 21 && idx < 25){
//         if(bingo[20]==0 && bingo[21]==0 && bingo[22]==0 && bingo[23]==0 && bingo[24]==0){
//             endCount += 1;
//             console.log(endCount);
//             }
//     }
// }

// function bingoCol(idx){
//     if(idx == 0 || idx % 5 == 0){
//         if(bingo[0]==0 && bingo[5]==0 && bingo[10]==0 && bingo[15]==0 && bingo[20]==0){
//             endCount += 1;
//             console.log(endCount);
//         }
//     }
//     if(idx == 1 || idx % 5 == 1){
//         if(bingo[1]==0 && bingo[6]==0 && bingo[11]==0 && bingo[16]==0 && bingo[21]==0){
//             endCount += 1;
//             console.log(endCount);
//         }
//     }
//     if(idx == 2 || idx % 5 == 2){
//         if(bingo[2]==0 && bingo[7]==0 && bingo[12]==0 && bingo[17]==0 && bingo[22]==0){
//             endCount += 1;
//             console.log(endCount);
//         }
//     }
//     if(idx == 3 || idx % 5 == 3){
//         if(bingo[3]==0 && bingo[8]==0 && bingo[13]==0 && bingo[18]==0 && bingo[23]==0){
//             endCount += 1;
//             console.log(endCount);
//         }
//     }
//     if(idx == 4 || idx % 5 == 4){
//         if(bingo[4]==0 && bingo[9]==0 && bingo[14]==0 && bingo[19]==0 && bingo[24]==0){
//             endCount += 1;
//             console.log(endCount);
//         }
//     }
// }

// function bingoDiag(idx){
//     if(idx != 0 && idx % 4 == 0 && idx != 24){
//         if(bingo[4]==0 && bingo[8]==0 && bingo[12]==0 && bingo[16]==0 && bingo[20]==0){
//             endCount += 1;
//             console.log(endCount);
//             console.log(idx % 4);
//         }
//     }
//     if(idx == 0 || idx % 6 == 0){
//         if(bingo[0]==0 && bingo[6]==0 && bingo[12]==0 && bingo[18]==0 && bingo[24]==0){
//             endCount += 1;
//             console.log(endCount);
//         }
//     }
// }

function start(){
    $(".num").click(bingoCheck); //숫자가 표시된 td 클릭;
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
        timeText = `${minuteText}:${secondText}`;
        $("#playTime").text(timeText);
    }, 1000); // 1000은 1초이다.

    Init(); // 25개 숫자 배열에 저장하기
    draw(); // 화면에 출력하기
    
}

// function end(){
//     clearInterval(time);
//     alert(`빙고 끝! , 플레이타임 - ${timeText}`);
//     $(".boardBox").css("opacity", 0.5);
// }



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
