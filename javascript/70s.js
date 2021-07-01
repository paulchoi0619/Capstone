
let object={};
let played=[];
let timeTrack=document.querySelector(".timer");
let score = document.querySelector(".score");
let totalscore=0;
let scoreTick;
let current=0;
let timeTick
let timeOver;
let question=5;
let clicked = false;
let randomNumber;
let name;
let file;
let audio;
let source;
let randomOption;
let artist;
let btnName;

let songs = [{fileName:"daydream.mp3", song:"Daydream Believer", artist: "The Monkees"},
{fileName: "more.mp3", song:"More Than a Feeling", artist: "Boston"},
{fileName:"yesterday.mp3", song:"Yesterday Once More", artist:"The Carpenters"},
{fileName:"stopme.mp3", song:"Dont Stop Me Now", artist:"Queen"},
{fileName:"how.mp3", song:"How Deep Is Your Love", artist:"Bee Gees"},
{fileName:"queen.mp3", song:"Dacing Queen", artist:"Abba"},
{fileName:"september.mp3", song:"September'", artist:"Earth, Wind & Fire"},
{fileName:"close.mp3", song:"Close to You", artist:"The Carpenters"},
{fileName:"rocket.mp3", song:"Rocket Man", artist:'Elton John'}
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
    btn[i].innerText = object.answer;
    
    }
    else{
    
    btn[i].innerText = songs[i].song;
    }
    
}
}
function clear(){
  timeTrack.style.display="none";
  score.style.display="none";
  for(let i=0;i<4;i++){
    btn[i].style.display="none";
  }
}
function stop(){
  source.setAttribute("src", "");
  audio.load();
}
//reset function
function reset(){
  randomNumber= Math.floor(Math.random() * (songs.length));
  object.file = songs[randomNumber].fileName;
 object.artist= songs[randomNumber].artist;
 object.answer = songs[randomNumber].song;
 let answer={artist:object.artist,song:object.answer};
 played.push(answer);
 songs.splice(randomNumber,1);
 source.setAttribute("src", "/Users/Polly/Documents/GitHub/Capstone/javascript/"+object.file);
 audio.load();
 optionGenerator();
}
function displaySongs(){
let div=document.createElement("div");
div.className="list"
div.innerText="Songs Played"
let ordered= document.createElement("ol");
for (let i=0;i<5;i++){
  let li = document.createElement("li");
  li.innerText=""+played[i].artist+" - "+played[i].song;
  ordered.appendChild(li);
}
div.appendChild(ordered);
document.body.appendChild(div);
}
function displayScore(){
  let display =document.querySelector(".displayScore");
  display.innerText = "Your Score is "+ totalscore;
  display.style.display="block";
  setTimeout(function(){ displaySongs();}, 3500);
 
}
function setTime(){
  console.log(current);
  current++;
  if(current==question){
    
    clearInterval(timeTick);
    clearInterval(timeOver);
    stop();
    clear();

  }
  else{

  reset();
  }
}
let time =15;
let timeElement =document.querySelector(".timer");
let scoreElement =document.querySelector(".score");
scoreElement.innerText=totalscore;
function timer(){
 
  time--;
  setTimeout(function(){ timeElement.innerHTML = time;}, 900);
  if(time==0){
    clearInterval(timeTick);
    time=15;
    timeElement.innerHTML = time;
    timeTick = setInterval(timer, 1000);
    displayScore();
  }
}
let scoreTracker=15;

function scoreTrack(){
  scoreTracker--;
  if(scoreTracker==0){
    clearInterval(scoreTick);
    scoreTracker=15;
}
}








start.addEventListener('click', function(event){

  if (clicked == false){
    let startButton = document.querySelector(".start");
    startButton.style.display="none";
   
    timeTrack.style.display="block";
    
    score.style.display="block";
 event.preventDefault();

 randomNumber= Math.floor(Math.random() * (songs.length));
 object.file = songs[randomNumber].fileName;
object.artist= songs[randomNumber].artist;
object.answer = songs[randomNumber].song;
let answer={artist:object.artist,song:object.answer};
played.push(answer);
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
btn[i].innerText = object.answer;

}
else{

btn[i].innerText = songs[i].song;
}

btn[i].type = "button";
btn[i].className=btnName;
btn[i].style.display="block";
divBtn.appendChild(btn[i]);
}




btn[0].addEventListener("click", function() {
  current++;
  time=15; 
  clearInterval(scoreTick);
  clearInterval(timeOver);
  clearInterval(timeTick);
  if(current!=question){
    timeOver = setInterval(setTime, 10000);
    timeTick = setInterval(timer, 1000);
  }
  
  if(btn[0].innerText == object.answer){
   totalscore+=scoreTracker;
   scoreElement.innerText=totalscore;
   if(current==question){
    stop();
    clear();
    displayScore();
  }
  else{
    reset();
  }
  
  }
  else{
    if(current==question){
      stop();
      clear();
      displayScore();
    }
    else{
        reset();
      }
   
  }
  scoreTracker=15;
  scoreTick = setInterval(scoreTrack,1000);
});




btn[1].addEventListener("click", function() {
  current++;
  time=15;
  clearInterval(timeOver);
  clearInterval(timeTick);
  clearInterval(scoreTick);
  if(current!=question){
    timeOver = setInterval(setTime, 10000);
    timeTick = setInterval(timer, 1000);
  }
  if(btn[1].innerText == object.answer){
    totalscore+=scoreTracker;
    scoreElement.innerText=totalscore;
    if(current==question){
      stop();
      clear();
      displayScore();
    }
    else{
        reset();
      }
   
  }
  else{
    if(current==question){
      stop();
     clear();
     displayScore();
    }
    else{
        reset();
      }
   
  }
  scoreTracker=15;
  scoreTick = setInterval(scoreTrack,1000);


 
});



btn[2].addEventListener("click", function() {
  current++;
  time=15;
  clearInterval(timeOver);
  clearInterval(timeTick);
  clearInterval(scoreTick);
  if(current!=question){
    timeOver = setInterval(setTime, 10000);
    timeTick = setInterval(timer, 1000);
  }
 
  if(btn[2].innerText == object.answer){
    totalscore+=scoreTracker;
    scoreElement.innerText=totalscore;
    if(current==question){
      stop();
      clear();
      displayScore();
    }
    else{
        reset();
      }
  }
  else{
    if(current==question){
      stop();
      clear();
      displayScore();
    }
    else{
        reset();
      }
   
  }
  scoreTracker=15;
  scoreTick = setInterval(scoreTrack,1000);
 

});



btn[3].addEventListener("click", function() {
  current++;
  time=15;
  clearInterval(timeOver);
  clearInterval(timeTick);
  clearInterval(scoreTick);
  if(current!=question){
    timeOver = setInterval(setTime, 10000);
    timeTick = setInterval(timer, 1000);
  }

  if(btn[3].innerText == object.answer){
    totalscore+=scoreTracker;
    scoreElement.innerText=totalscore;
    if(current==question){
      stop();
      clear();
      displayScore();
    }
    else{
        reset();
      }
  }
  else{

    if(current==question){
      stop();
      clear();
      displayScore();
    }
    else{
        reset();
      }
    
  } 
  scoreTracker=15;
  scoreTick = setInterval(scoreTrack,1000);

});
timeOver = setInterval(setTime, 15000);
timeTick = setInterval(timer, 1000);
scoreTick = setInterval(scoreTrack,1000);

clicked = true;
}

});
