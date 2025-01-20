import './style.css'

const gameBoard = document.querySelector<HTMLInputElement>("#display"); // document method querySelector() return the first element within the document that matches the specified CSS selector.
const scoreElement = document.querySelector<>(".score");
const highScoreElement = document.querySelector<>(".highScore");
const controlsElement = document.querySelectorAll<HTMLButtonElement>(); // Will i need this because there are multiple button.

let foodX, foodY; // Creating a variable for food. It should have a positing on the grid. x for row, y for column.
// What other variables do i need???
// Position of snake when the game starts
// Score
// Length of the snake body
// Game Over

//Function for the food position
const newFoodPosition = () => {
    foodX = Math.floor(Math.random() * 10 * 30); // gives a random x position on the grid of 30.
    foodY = Math.floor(Math.random() * 10 * 30);
}

