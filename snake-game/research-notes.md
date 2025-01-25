https://www.markdownguide.org/cheat-sheet/

# Research Notes

## Food spawn

Need an if/else function to check whether the food and snake head have been placed on top of each other, although the likelihood is very small in a 30x30 grid.
if(snakeHeadX === foodX && snakeHeadY === foodY) {
return 'restart condition'
} else;

### Collision with food

Need someway to know that snake 'head' and food are in the same grid position i.e. the food has been eaten.
Need function that uses the changeFoodPosition function created at the start.
Can i equate the x and y coordinates of both the head and food?

## Movement

Event listener for keyboard clicks.
When pressing keyboard click, console log shows "ArrowUp" for up direction and other directions respectively.
If else statement that combines the key press and a change in direction.
Have two variable for each direction, x and y. Give each direction a value of 1 or 0 for movement in that direction on the grid.
E.g. directionX = 1, directionY = 0. To move right.
Give && condition to stop it going the opposite direction.
E.g. directionX = 1, directionY = 0 && directionX !== -1. To stop it from moving left when going right.

Continuous movement.
setInterval(fn, t) repeatedly calls a function fn at the time t.

## How to increase the length of the snake?

### Option 1 - Decrement Loop

for(let i = snakeBody.length -1; i > 0; i--) {snakeBody[i] = snakeBody[i - 1];}

1. Initialization: Start from the last segment of the snake (snakeBody.length - 1), which is the tail.
2. Condition: Continue the loop until you reach the first segment (the head). The head (snakeBod[0]) doesn't move in this loop because it's controlled separately (usually by the game's direction input).
3. Decrement: Move backward through the snake body array.
4. Body of the Loop: Take the position of the segment in front of the current one (snakeBody[i - 1]) and assign it to the current segment (snakeBody[i]).

### Option 2 - .unshift Statement

When snake meets food, increment a loop using an unshift statement. This adds an element to the beginning of the element

### Option 3 - .push

When food is hit, that block can be pushed in to the array of the snake.
Need to add a function to clear the food from the position and re-spawn it elsewhere.

## Collision detection with walls and body

-   Walls
-   Body

## Game over loop
