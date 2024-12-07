let hole = document.getElementById("hole");
let game = document.getElementById("game");
let result = document.getElementById("result");
let text = document.getElementById("text");


hole.addEventListener("animationiteration", Ranhole)

let score = 0;


function Ranhole(){
    let ran = -((Math.random()*350)+150)
    hole.style.top = ran + "px";
    score++;
}


// letting  the bird to fall
let jumping = 0;

let fall = setInterval(function(){
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

    if (jumping==0){
        bird.style.top = (birdTop + 2) + "px"
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let hTop = (500 + holeTop );
    if((birdTop>500) || ((blockLeft<50)&&(blockLeft>-50)&&((birdTop<hTop)||(birdTop>hTop +100)))){
        result.style.display = "block";
        text.innerText = `you final score is : ${score}`;
        game.style.display = "none";
    }

},10
)
    
window.addEventListener('keydown', hop);

function hop() {
    jumping = 1;
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if  (birdTop>6){
        bird.style.top = (birdTop - 60)+ "px";
    }
    setTimeout(function(){
        jumping = 0;
    }, 100)
}

