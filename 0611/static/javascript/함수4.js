window.onload=function(){
    document.getElementById("calc").addEventListener('click', function(){
        출력();
    });
}

function 총점계산(a, b, c, d){ // 총점 계산만 하는 함수
    var total = a + b + c + d;
    return total;

}

function 평균계산(totalScore){ // 평균 계산만 하는 함수
    var div = totalScore / 4;
    return div;
}

function 출력(){ //총점과 평균을 화면에 출력하는 함수
    var a=Number(document.getElementById("kor").value);
    var b=Number(document.getElementById("mat").value);
    var c=Number(document.getElementById("eng").value);
    var d=Number(document.getElementById("his").value);

    let totalScore = 총점계산(a,b,c,d);
    let avgScore = 평균계산(totalScore);
    document.getElementById("total").innerText = `총점 : ${totalScore}`;
    document.getElementById("avg").innerText = `평균 : ${avgScore}`;

}

//1~50까지 숫자를 랜덤하게
//1줄에 4개씩 5줄로 표시하기
//버튼을 클릭하면 화면에 숫자들 표시
//함수 두개 사용(함수의 기능은 알아서 정하기)

