$(function(){
    $("#enroll").click(function(){
        let todo = $("#work").val();
        let time = $("#time").val();
        let state = $("#state").val();
        addList(todo, time, state);
    });

    $("#work").keyup(check);
    $("#time").change(check); //값이 변할때 : change
    $("#state").keyup(check);

    $("#state").keyup(function(){
        if($("#state").val() === "완료" || $("#state").val() === "진행중"){
            $("#enroll").removeAttr('disabled');
            console.log($("#state").val());
        }else{
            $("#enroll").attr('disabled', 'disabled');
            console.log($("#state").val());
        }

    });

});

function check(){
    var work = $("#work").val();
    var time = $("#time").val();
    var state = $("#state").val();

    if(work != '' && time!= '' && state !=''){
        $("#enroll").removeAttr('disabled');
    }else{
        $("#enroll").attr('disabled', 'disabled');
    }
}

function addList(todo, time, state){
    $(".todo").append('<li>' + todo + '</li>');
    $(".todoTime").append('<li>' + time + '</li>');
    $(".todoState").append('<li>' + state + '</li>');
}