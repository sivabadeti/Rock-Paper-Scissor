rock=document.querySelector(".rock");
paper=document.querySelector(".paper");
scissor=document.querySelector(".scissor");

yourpoints=document.querySelector(".yourpoints");
comppoints=document.querySelector(".comppoints");

let reset=document.querySelector(".reset");
let playagain=document.querySelector(".playagain");
let userscore =0;
let compscore=0;
let gameover=false;

//compueter choice 
 function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

playagain.style.display = "none";


rock.addEventListener("click",()=>{
    if(gameover) returns;
    let comp=getComputerChoice();
    content=document.querySelector(".content");
    if(comp=="paper"){
        content.innerText="paper beats rock!";
        compscore++;       
    }
    else if(comp=="scissor"){
       
        content.innerText="Rock beats scissor";    
        userscore++;    
    }
    else{       
        content.innerText="Draw";       
    }
    updatedscore();
});


paper.addEventListener("click",()=>{
     if(gameover) returns;
    let comp=getComputerChoice();
    content=document.querySelector(".content");
    if(comp=="rock"){
        content.innerText="paper beats rock!";    
        userscore++;   
    }
    else if(comp=="scissor"){
       
        content.innerText="scissor beats paper";     
        compscore++;   
    }
    else{       
        content.innerText="Draw";       
    }
    updatedscore();
});


scissor.addEventListener("click",()=>{
     if(gameover) returns;
    let comp=getComputerChoice();
    content=document.querySelector(".content");
    if(comp=="paper"){
        content.innerText="scissor beats paper!";      
        userscore++; 
    }
    else if(comp=="rock"){
       
        content.innerText="Rock beats scissor";      
        compscore++;  
    }
    else{       
        content.innerText="Draw";       
    } 
    updatedscore();
});

function updatedscore(){
    yourpoints.innerText=userscore;
    comppoints.innerText=compscore;

    if(userscore==5){
        content.innerText="User won 🥳"
        gameover=true;
        playagain.style.display = "flex";
    }
    else if(compscore==5){
        content.innerText="Computer won 😣"
        gameover=true;
        playagain.style.display = "flex";
    }
}


reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    yourpoints.innerText = 0;
    comppoints.innerText = 0;
    content.innerText="Play your move";
    gameover=false;
    playagain.style.display = "none";
});