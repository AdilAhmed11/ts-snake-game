import './style.css'

let foodX: number, foodY: number; // Food starts at a different position each time.
let snakeX: number = 5, snakeY: number = 10; // Snake starts at the same position each time.
let directionX: number = 0, directionY: number = 0; // Variables needed for direction change.

const gameArea = document.querySelector<HTMLDivElement>(".game-area");
// Other possible constants
// const scoreElement = document.querySelector<>(".score");
// const controlsElement = document.querySelectorAll<HTMLButtonElement>();

if (!gameArea) {
    throw new Error('Some elements can not be found');
}

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1; // Gives a random x position on the grid of 30.
    foodY = Math.floor(Math.random() * 30) +1; // The +1 shifts the range from 0-29 to 1-30 in accordance to the grid.
}

const changeDirection = (press: any) => { // Creating a function to move the snake.
    if(press.key === "ArrowUp" && directionY !== 1) { // key represents the keyboard press
        directionX = 0; // 0 because I don't want any movement in this direction.
        directionY = -1; // -1 because the grid increases in number in the direction of top to bottom.
    } else if(press.key === "ArrowDown" && directionY !== -1) {
        directionX = 0;
        directionY = 1;
    } else if(press.key === "ArrowRight" && directionX !== -1) {
        directionX = 1; // Positive 1 because grid increases in the direction of left to right.
        directionY = 0; // 0 because i don't want any movement in this direction.
    } else if(press.key === "ArrowLeft" && directionX !== 1) { // Why doesn't the 'else' statement work here?
        directionX = -1;
        directionY = 0;
    }
    initGame();

}

const initGame = () => {

    let htmlMarkup: string = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`; // This is the variable assigned to the position of the food. It gives a random position to the food.

    // The two lines below update the snake's head position based on the current direction.
    snakeX += directionX;
    snakeY += directionY;
    htmlMarkup += `<div class="head" style="grid-area: ${snakeX} / ${snakeY}"></div>`;

    gameArea.innerHTML = htmlMarkup;
}

changeFoodPosition();
initGame();

document.addEventListener("keydown", changeDirection); // Event listener for keyboard clicks on keyboard