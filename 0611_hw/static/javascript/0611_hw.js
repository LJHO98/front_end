window.onload=function(){
    document.getElementById("print").addEventListener('click', function(){
        outPut();
    });
}

function randomOp(){
    var save = "";

    for(var i=1; i <= 5 ; i++){
        for(var j=1; j <= 4; j++){
            save = save + String(Math.floor(Math.random() * 50 + 1));
            if(j < 4){
                save = save + " ";
            }
        }
        save = save + "<br>";
    }
    return save;
}

 function outPut(){
    var number = randomOp();
    document.getElementById("result").innerHTML = number;
}

