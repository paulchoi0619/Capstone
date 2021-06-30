/*
let score = document.getElementById("scoreCanvas");
let ctx = score.getContext("2d");
let totalScore =0;
let question =0;
*/
let scoreTick;
let scoreTrack=100;
let totalscore=0;
let current=1;
let timeTick
let timeOver;
let question=5;
let clicked = false;
let object = {};
let randomNumber;
let name;
let file;
let answer;
let audio;
let source;
let randomOption;
let artist;
let btnName;
let songs = [{fileName:"living.mp3", song:"Living on a Prayer", artist: "Bon Jovi"},
{fileName: "take.mp3", song:"Take on Me", artist: "Aha"},
{fileName:"wake.mp3", song:"Wake Me Up Before You Go-Go", artist:"Wham!"},
{fileName:"called.mp3", song:"Crazy Little Thing Called Love", artist:"Queen"},
{fileName:"sweet.mp3", song:"Sweet Dreams", artist:"Eurythmics"}
];
let btn=[];
let start = document.querySelector(".start");

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function optionGenerator(){
  randomOption = Math.floor(Math.random() * 4);
  shuffle(songs);
  for(let i =0;i<4;i++){

    
    if(i==randomOption){
     console.log(randomOption)
    btn[i].innerText = object.answer;
    
    }
    else{
    
    btn[i].innerText = songs[i].song;
    }
    
}
}
//reset function
function reset(){
  randomNumber= Math.floor(Math.random() * (songs.length));
  object.file = songs[randomNumber].fileName;
 object.artist= songs[randomNumber].artist;
 object.answer = songs[randomNumber].song;

 source.setAttribute("src", "/Users/Polly/Documents/GitHub/Capstone/javascript/"+object.file);
 audio.load();
 optionGenerator();
}
function setTime(){
  if(current==question){
    clearInterval(timeTick);
    clearInterval(timerOver);
  }
  else{
  current++;

  reset();
  }
}
let time =10;
let timeElement =document.querySelector(".timer");
let scoreElement =document.querySelector(".score");
scoreElement.innerText=totalscore;
function timer(){
 
  time--;
  setTimeout(function(){ timeElement.innerHTML = time;}, 900);
  if(time==0){
    clearInterval(timeTick);
    time=10;
    timeElement.innerHTML = time;
    timeTick = setInterval(timer, 1000);
  }
}
function score(){
 
  scoreTrack--;
  if(time==0){
    clearInterval(scoreTick);
    scoreTrack=100;
    
    scoreTick = setInterval(score, 1000);
  }
}


start.addEventListener('click', function(event){

  if (clicked == false){
    //score.style.display="initial";
    let startButton = document.querySelector(".start");
    startButton.style.display="none";
   
    //updateScore();
 event.preventDefault();

 randomNumber= Math.floor(Math.random() * (songs.length));

 object.file = songs[randomNumber].fileName;
object.artist= songs[randomNumber].artist;
object.answer = songs[randomNumber].song;

songs.splice(randomNumber,1);
audio = document.createElement("audio");
 audio.id = "audio";
 audio.className="audio";
 audio.control = true;
 audio.autoplay = true;

source = document.createElement("source");
source.id="source";
source.src="";

source.type="audio/mpeg";

source.setAttribute("src", "/Users/Polly/Documents/GitHub/Capstone/javascript/"+object.file)
audio.appendChild(source);
document.body.appendChild(audio);



let divBtn = document.createElement("div");
divBtn.id = "container";
document.body.appendChild(divBtn);
randomOption = Math.floor(Math.random() * 4);

shuffle(songs);


for(let i =0;i<4;i++){

btnName = "btn"+i;
btn[i] = document.createElement("button");
if(i==randomOption){
 console.log(randomOption)
btn[i].innerText = object.answer;

}
else{

btn[i].innerText = songs[i].song;
}

btn[i].type = "button";
btn[i].className=btnName;

divBtn.appendChild(btn[i]);
}




btn[0].addEventListener("click", function() {
  time=10;
  clearInterval(timeOver);
  clearInterval(timeTick);
  timeOver = setInterval(setTime, 10000);
  timeTick = setInterval(timer, 1000);
  scoreTick = setInterval(score, 1000);
  if(btn[0].innerText == object.answer){
    totalScore+=scoreTrack;
    scoreElement.innerText=totalscore;
    clearInterval(scoreTick);
  }
  else{
    console.log("Incorrect");
  }
  reset();
});




btn[1].addEventListener("click", function() {
  time=10;
  clearInterval(timeOver);
  clearInterval(timeTick);
  timeOver = setInterval(setTime, 10000);
  timeTick = setInterval(timer, 1000);
  scoreTick = setInterval(score, 1000);
  if(btn[1].innerText == object.answer){
    totalScore+=scoreTrack;
    scoreElement.innerText=totalscore;
    clearInterval(scoreTick);
    
   
  }
  else{
    console.log("Incorrect");
   
    
  }
 
  reset();

 
});



btn[2].addEventListener("click", function() {
  time=10;
  clearInterval(timeOver);
  clearInterval(timeTick);
  timeOver = setInterval(setTime, 10000);
  timeTick = setInterval(timer, 1000);
  scoreTick = setInterval(score, 1000);
  if(btn[2].innerText == object.answer){
    totalScore+=scoreTrack;
    scoreElement.innerText=totalscore;
    clearInterval(scoreTick);
   
  }
  else{
    console.log("Incorrect");
    
    
  }
  reset();
 
 

});



btn[3].addEventListener("click", function() {
  time=10;
  clearInterval(timeOver);
  clearInterval(timeTick);
  timeOver = setInterval(setTime, 10000);
timeTick = setInterval(timer, 1000);
scoreTick = setInterval(score, 1000);
  if(btn[3].innerText == object.answer){
    totalScore+=scoreTrack;
    scoreElement.innerText=totalscore;
    clearInterval(scoreTick);
    

  
  }
  else{
    console.log("Incorrect");

  }
  
  reset();

});
timeOver = setInterval(setTime, 10000);
timeTick = setInterval(timer, 1000);
scoreTick = setInterval(score, 1000);
clicked = true;
}

});