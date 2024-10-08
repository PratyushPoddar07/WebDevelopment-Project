let gameSeq=[];
let userSeq=[];
let btns =["yellow","red","green","purple"];

let started = false;
let level  =0;
let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){

    if(started == false){
        console.log("Game is started");
        started =true;

        leveUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function leveUp(){
    level++;
    h2.innerText = `Level ${level}`;
    //random btn choose
    let ranIdx =Math.floor(Math.random() * 3);
    console.log(ranIdx);
    let ranColor = btns[ranIdx];
    console.log(ranColor);
    let ranBtn = document.querySelector(`.${ranColor}`);
    console.log(ranBtn);
    btnFlash(ranBtn);
}