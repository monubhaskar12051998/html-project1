function ClockStart(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    console.log(hours,minutes,seconds);

    
    if(hours>12){
        hours=hours-12;
        let am=document.getElementById("clockperiod");
        clockperiod.innerText="PM";
    }
    else{
        let am=document.getElementById("clockperiod");
        clockperiod.innerText="AM";   
    }

    let clockhours=document.getElementById("clockhours");
clockhours.innerText=hours;

let clockminutes=document.getElementById("clockminutes");
clockminutes.innerText=minutes;

let clockseconds=document.getElementById("clockseconds");
clockseconds.innerText=seconds;




}

setInterval(()=>{
    ClockStart();
},1000)

let btn=document.getElementById("btn");
let setalarm=document.getElementById("setalarm");
let wakeup=document.getElementById("set-wakeup-time");
let lunchtime=document.getElementById("set-lunch-time");
let naptime=document.getElementById("set-nap-time");
let sleeptime=document.getElementById("set-night-time");
let selectmorning =document.getElementById("selectmorning");
let selectafternoon =document.getElementById("selectafternoon");
let selectevening =document.getElementById("selectevening");
let selectnight =document.getElementById("selectnight");

btn.addEventListener("click",function(event){
    btn.innerHTML= "Party Time";
    wakeup.innerText = selectmorning.value ;
    lunchtime.innerText = selectafternoon.value ;
    naptime.innerText = selectevening.value ;
    sleeptime.innerText = selectnight.value ;




})

let dateHello = new Date();
let hours = dateHello.getHours();
let quotes1 = document.getElementById("greetingtext");
let quotes2 = document.getElementById("greeting-message");
let changebackground = document.getElementById("images");

if(8<=hours<=11 )
{
    quotes1.innerText = "GOOD MORNING!! WAKE UP !!";
    quotes2.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    changebackground.innerHTML="<img src='./images/big.jpg'>";

}
if(12<=hours<=15)
{
    quotes1.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    quotes2.innerText = "LET'S HAVE SOME LUNCH !!";
    changebackground.innerHTML="<img src='./images/lunch.jpg'>";

}
if(16<=hours<=17 )
{rsNow==19
    quotes1.innerText = "GOOD EVENING !!";
    quotes2.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    changebackground.innerHTML="<img src='./images/evening.png'>";


}
if(20<=hrsNow<=7)
{
    quotes1.innerText = "GOOD NIGHT !!";
    quotes2.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    changebackground.innerHTML="<img src='./images/goodnight.jpg'>";


}



