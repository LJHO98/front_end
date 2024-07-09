
const com = ["scissors.png", "rock.png", "paper.png"];
let record=[]; //전적 저장
let comHd = 0; //컴퓨터 이미지 보이기 위한 setInterval값
let comSelect=0; //컴퓨터 가위바위보 값

$(function(){
    //전적 배열 초기화 세팅
    record=[new Array(), new Array(), new Array()];
    let storageData = JSON.parse(localStorage.getItem("record"));
    if(storageData){ // 값 유무
        record=storageData;
        // 유저 , 컴 , 결과
    }else{
        console.log("storage저장 데이터 없음");
    }
    
    $("#comImg").attr('src', './image/'+ com[0]);
    $("#game").click(startAndStop);
    $("#record").click(gameRecord);
});

function gameRecord(){
    $("#modal").show();

    $("#data").empty();

    for(var i =0; i < record[0].length; i++){
        $("#data").append(`
            <tr>
                <td class="user"><img src="./image/${record[0][i]}"> </td>
                <td class="com"><img src="./image/${record[1][i]}"> </td>
                <td class="outcome">${record[2][i]} </td>
            </tr>
            `);
        
    }
    

    $("#modalBackground").click(function(){
        $("#modal").hide();
    });
}

function startAndStop(){
    //$(this) === $("#game")
    if($(this).text() === '종료'){ // 가위바위보 진행중
        $(this).text("시작");
        clearInterval(comHd);
        $(".userImg").off('click');
    }else{ //가위바위보 시작 전
        $(this).text("종료");
        comStart();
        $(".userImg").click(userSelect); //유저 가위바위보 클릭 이벤트
    }
}

function userSelect(){

    var idx = $(".userImg").index($(this)); // 내가 클릭한 가위바위보 찾기
    // userImg 클래스들을 배열로 가져오고 그 중에서 몇번째 인덱스 클릭?

    $(this).css('border', '1px solid white');// 내가 클릭한 가위바위보 이미지 표시

    clearInterval(comHd);// 컴퓨터의 가위바위보 이미지변경 하는거 멈추기(clearInterval)

    // alert("user :" +idx + "com: "+ comSelect);
    outcom(idx, comSelect);// 결과 띄우기(승, 패, 무)
    $(".userImg").off('click');
    setTimeout(function(){
        comStart();// 다시 컴퓨터 가위바위보 이미지변경되게(setInterval)

        $(".userImg").eq(idx).css('border','');// 내가 클릭한 가위바위보 이미지 표시 해제
        // $(this).removeAttr('style');
        $(".result").remove();
        $(".userImg").click(userSelect);
    }, 3000); //지정된 시간 이후에 한번 실행
    
    
}

function outcom(u, c){ //u는 유저, c는 컴퓨터
    // 0 - 가위, 1 - 바위, 2 - 보
    var result = "승";
    var minus = u - c;// -2, 1 유저승 0 비김 -1, 2 유저패
    switch(minus){
        case 0: result = "무"; break;
        case -1: result = "패"; break;
        case 2: result = "패"; break;
    }
    //유저와 컴퓨터 가위바위보 비교하여 승 패 무 출력되게 하세요.
    record[0].push(com[u]); // 유저 가위바위보 저장
    record[1].push(com[c]); // 컴퓨터 가위바위보 저장
    record[2].push(result); // 가위바위보 결과 저장
    console.log(record);

    localSave(); //컴퓨터에 저장하기(브라우저에 저장)


    $("body").append(`<div class="result"> ${result} </div>`);
}

function comStart(){
    comHd = setInterval( function(){
        if(comSelect==2){
            comSelect=-1;
        }
        $("#comImg").attr('src', './image/' + com[++comSelect]);
    }, 100);
    // 지정된 시간에 한번씩 실행, 시간단위는 밀리세컨드 1000이 1초
}

function localSave(){
    // JSON.stringify() 문자열로 변환 시켜준다.

    let recordJSON = JSON.stringify(record);
    localStorage.setItem("record", recordJSON);

    //localStorage.setItem("like", "banana"); //localStorage - 문자열 데이터 저장
}