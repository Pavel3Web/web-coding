let score = document.querySelector(".score"),
start = document.querySelector(".start"),
gameArea = document.querySelector(".gameArea"),
car = document.createElement("div");

car.classList.add("car");


start.addEventListener("click", startGame);

document.addEventListener("keydown", startRun); // Обработчек события(keydown это событие) StartRun это функция
document.addEventListener("keyup", stopRun); // addEventListener это метод document это объект

const keys = {
    ArrowUp: false,
    ArrawDown: false,
    ArrowRight: false,
    ArrowLeft: false,
};// Объект

const setting = {
    start: false,
    score: 0,
    speed: 3
};

function startGame(){
    start.classList.add("hide");
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame(){
    console.log("Play game!");
    if (setting.start){
        requestAnimationFrame(playGame);
    }
}

function startRun(event){
    event.preventDefault();// Метод
    console.log(event.key);
    keys[event.key] = true;
}

function stopRun(event){
    event.preventDefault();// Метод
    keys[event.key] = false;
}

