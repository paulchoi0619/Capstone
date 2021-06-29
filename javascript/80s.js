/*
let score = document.getElementById("scoreCanvas");
let ctx = score.getContext("2d");
let totalScore =0;
let question =0;
*/
let clicked = false;

let songs = [{fileName:"living.mp3", song:"Living on a Prayer", artist: "Bon Jovi",},
{fileName: "take.mp3", song:"Take on Me", artist: "Aha"},
{fileName:"wake.mp3", song:"Wake Me Up Before You Go-Go", artist:"Wham!"},

];
let btn=[];
const number = ["1","2","3","4"];

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
    score.style.display="initial";
    let startButton = document.getElementById("start");
    startButton.style.display="none";
    let instruction = document.getElementById("intro");
    instruction.style.display="none";
   
    updateScore();
 event.preventDefault();
 randomNumber= Math.floor(Math.random() * (combo.length-1));
song= combo[randomNumber];

video = document.createElement("video");
 video.id = "video";
 video.className="video";
 video.width = "320";
 video.height = "240";
 video.control = true;
 video.autoplay = true;

source = document.createElement("source");
source.id="source";
source.src="";
source.type="video/mp4";

source.setAttribute("src", song+".mp4");
video.appendChild(source);
document.body.appendChild(video);


let divBtn = document.createElement("div");
divBtn.id = "container";
document.body.appendChild(divBtn);
for(let i =0;i<8;i++){
let value = array[i];
let btnName = language[i];
btn[i] = document.createElement("button");
//btn.innerHTML = "Submit";
btn[i].innerText = value;
btn[i].type = "submit";
btn[i].name = "btn"+i;
btn[i].className=btnName;

divBtn.appendChild(btn[i]);
}




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

clicked = true;
}

});