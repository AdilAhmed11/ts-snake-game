import './style.css'

// const gameBoard = document.querySelector<HTMLInputElement>("#display"); // Document method querySelector() return the first element within the document that matches the specified CSS selector.
// const scoreElement = document.querySelector<>(".score");
// const highScoreElement = document.querySelector<>(".highScore");
// const controlsElement = document.querySelectorAll<HTMLButtonElement>(); // All needed to select all buttons

// let foodX, foodY; // Creating a variable for food. It should have a positing on the grid. x for row, y for column.
// // What other variables do i need???
// // Position of snake when the game starts
// // Score
// // Length of the snake body
// // Game Over

// //Function for the food position
// const newFoodPosition = (foodX: number, foodY: number) => {
//     foodX = Math.floor(Math.random() * 30); // gives a random x position on the grid of 30. Do I need to multiply by 10 (that's what we did in the examples.)
//     foodY = Math.floor(Math.random() * 30);
// }


const playBoard = document.querySelector<HTMLInputElement>(".play-board");

let foodX, foodY;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1; // gives a random x position on the grid of 30. Do I need to multiply by 10 (that's what we did in the examples.)
    foodY = Math.floor(Math.random() * 30) +1;
}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    playBoard.innerHTML = htmlMarkup; 
}

changeFoodPosition();
initGame();