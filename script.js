
const target = document.querySelector("div.target");
const txtTime = document.querySelector("#time");
const btnStart = document.querySelector("button");
const gameStats = document.querySelector(".stats");
const overlay = document.querySelector("#overlay");
//list
const txtHscore = document.querySelectorAll("#hscore");
const txtScore = document.querySelectorAll("#score");
//game variables
let hscore = 0;
let time = 30;
let score = 0;

function start(){
    time = 30;
    score = 0;
    txtTime.innerHTML = time;
    txtScore[0].innerHTML = score;

    showGame();

    target.addEventListener("click", play = () =>{
        let top = Math.floor(Math.random() * (window.innerHeight - 100));
        let left = Math.floor(Math.random() * (window.innerWidth - 100));
    
        target.style.top = top + "px";
        target.style.left = left + "px";
        
        score++;
        for(elem of txtScore){
            elem.innerHTML = score;
        }

        if(score > hscore){
            hscore = score;
            
            for (elem of txtHscore){
                elem.innerHTML = hscore;
            }
        }
    })

    const timer = setInterval(() => {
            time--;
            txtTime.innerHTML = time;
    
            if(time == 0){
                menu();
                clearInterval(timer);
            }
        },1000);
}



function showGame(){
    overlay.style.display = "none";

    target.style.display = "block";
    gameStats.style.display = "block";
}

function menu(){
    target.removeEventListener("click",play);
    overlay.style.display = "flex";

    target.style.display = "none";
    gameStats.style.display = "none";
}


