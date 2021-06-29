/*
let score = document.getElementById("scoreCanvas");
let ctx = score.getContext("2d");
let totalScore =0;
let question =0;
*/
let clicked = false;
let object = {};
let randomNumber;
let name;
let file;
let answer;
let audio;
let source;
let randomOption;
let randomSelect;
let artist;
let songs = [{fileName:"living.mp3", song:"Living on a Prayer", artist: "Bon Jovi",},
{fileName: "take.mp3", song:"Take on Me", artist: "Aha"},
{fileName:"wake.mp3", song:"Wake Me Up Before You Go-Go", artist:"Wham!"},

];
let btn=[];
let start = document.querySelector(".start");


function updateScore(){
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, score.width, score.height);
  ctx.fillStyle = 'black';
  ctx.font= "60px Monaco";
  ctx.fillText(totalScore,130,100);
  }
  
start.addEventListener('click', function(event){

  if (clicked == false){
    //score.style.display="initial";
    let startButton = document.querySelector(".start");
    startButton.style.display="none";
   
    //updateScore();
 event.preventDefault();
 randomNumber= Math.floor(Math.random() * (songs.length-1));
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
source.src="object.file";
source.type="audio/mpeg";

source.setAttribute("src", file);
audio.appendChild(source);
document.body.appendChild(audio);


let divBtn = document.createElement("div");
divBtn.id = "container";
document.body.appendChild(divBtn);
randomOption = Math.floor(Math.random() * 3);
randomSelect = Math.floor(Math.random() * songs.length-1);
for(let i =0;i<4;i++){

let btnName = "button"+i;
btn[i] = document.createElement("button");
if(i==randomOption){
btn[i].innerText = object.answer;
console.log(object.answer);
}
else{
btn[i].innerText = songs[randomSelect].song;
}
btn[i].type = "button";
btn[i].className=btnName;

divBtn.appendChild(btn[i]);
}


/*

btn[0].addEventListener("click", function() {
  if(combo[randomNumber].includes("polish")){
    totalScore++;
    updateScore();
    if(question ==10){
      alert("Correct! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Correct");
   
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
     
    source.setAttribute("src", song+".mp4");
    video.load();
    question++;
    }
    
  }
  else{
    if(question ==10){
      alert("Wrong! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
      question++;
    }
  }

});




btn[1].addEventListener("click", function() {
  if(combo[randomNumber].includes("korean")){
    totalScore++;
    updateScore();
    if(question ==10){
      alert("Correct! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
      question++;
    }
  }
  else{
    if(question ==10){
      alert("Wrong! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
    
      source.setAttribute("src", song+".mp4");
      video.load();
      question++;
    }
  }
  
});



btn[2].addEventListener("click", function() {
  if(combo[randomNumber].includes("georgian")){
    totalScore++;
    updateScore();
    if(question ==10){
      alert("Correct! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
     
      source.setAttribute("src", song+".mp4");
      video.load();
      question++;}
  }
  else{
    if(question ==10){
      alert("Wrong! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Wrong");
    combo.splice(randomNumber,1);
      randomNumber= Math.floor(Math.random() * (combo.length-1));
      song= combo[randomNumber];
     
      source.setAttribute("src", song+".mp4");
      video.load();
      question++;
    }
  }

    
 
});



btn[3].addEventListener("click", function() {
  if(combo[randomNumber].includes("spanish")){
    totalScore++;
    updateScore();
    if(question ==10){
      alert("Correct! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Correct");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
    
      source.setAttribute("src", song+".mp4");
      video.load();
      question++;
    }
  }
  else{
    if(question ==10){
      alert("Wrong! Total Score is "+totalScore);
      location.reload();
    }
    else{
    alert("Wrong");
    combo.splice(randomNumber,1);
    randomNumber= Math.floor(Math.random() * (combo.length-1));
    song= combo[randomNumber];
      
      source.setAttribute("src", song+".mp4");
      video.load();
      question++;
    }
  }
  
});
*/
clicked = true;
}

});