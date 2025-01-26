import './style.css'

let gameOver = false;
let foodX: number, foodY: number; // Food starts at a different position each time.
let snakeX: number = 5, snakeY: number = 5; // Snake starts at the same position each time.
let snakeBody = [ ]; // Treat the snake body like an empty array where a 'block' is added. This can be added to the if function when the food is eaten
let directionX: number = 0, directionY: number = 0; // Variables needed for direction change.
let setIntervalId; // Needed to reset the game

const gameArea = document.querySelector<HTMLDivElement>(".game-area");
// Other possible constants
// const scoreElement = document.querySelector<>("#score");
// const highScoreElement = document.querySelector<>("#highScore")
// const controlsElement = document.querySelectorAll<HTMLButtonElement>();

if (!gameArea) {
    throw new Error('Some elements can not be found');
}

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) +1; // Gives a random x position on the grid of 30.
    foodY = Math.floor(Math.random() * 30) +1; // The +1 shifts the range from 0-29 to 1-30 in accordance to the grid.
}

const handleGameOver = () => { // Variable for the game over. Will give an alert message.
    clearInterval(setIntervalId); // Clears the timer as i was getting  error for game over not letting me restart without refreshing
    alert('Game Over! Press OK to replay...');
    location.reload(); // Reload.
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

}

const initGame = () => {
    if(gameOver) return handleGameOver(); // Condition for game over.
    
    let htmlMarkup: string = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`; // This is the variable assigned to the position of the food. It gives a random position to the food.

    if(snakeX === foodX && snakeY === foodY) { // x and y coordinates of food and head match.
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); // Pushing food position to snake body array
    }

    for(let i = snakeBody.length -1; i > 0; i--) {
        // The FOR LOOP shifts all segments of the snake backwards, copying the position of thh block in front of it to the current one. This effectively 'moves' the body of the snake to follow its head.
        // snakeBody[0] is the snakes 'head'. The last element, the tail, is represented by snakeBody[snakeBody.length -1]
        // Start at the last block of the snake, the tail; Continue until it reaches the first segment, the head'; Decrement and move backwards through the snake body array.
        // The body of the loop takes the position of the segment in front of the current one and assigns it to teh current segment of the body.
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

    // The two lines below update the snake's head position based on the current direction.
    snakeX += directionX;
    snakeY += directionY;

    // Checking if the snake's head is out of wall, if so setting gameOver to true.
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) { // Conditions that go beyond the boundaries of the 30x30 grid.
        gameOver = true; // Initial condition at the top was false, but once this condition had been met, game over is true.
    }

    for(let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`; // Position of the snakes head in an array, (x and y coordinate in an array)
        // snakeBody[0][0] is the x coordinate, snakeBody[0][1] is the y coordinate
        // the 1st comparison: compares y cordinate of head to the body. The 2nd comparison: compares the x coordinate of the head to the body.
        if(snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0] && i !== 0) {
            gameOver = true;
        }
    }
    gameArea.innerHTML = htmlMarkup;
}

changeFoodPosition();
setIntervalId = setInterval(initGame, 120); // setInterval() repeatedly calls a function for a given time delay. 2 parameters: function, delay.

document.addEventListener("keydown", changeDirection); // Event listener for keyboard clicks on keyboard