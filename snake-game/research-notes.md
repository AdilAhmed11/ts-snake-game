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
Can i equate the x and y coordinates of both the head and food? YES I CAN!

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

Essentially this starts at the tail. If we have a 3 block snake, the tail end moves in to the second position, the second position moves into the first position (head), and the first position moves in accordance to the direction key.

### Option 2 - .unshift Statement

When snake meets food, increment a loop using an unshift statement. This adds an element to the beginning of the element

### Option 3 - .push

When food is hit, that block can be pushed in to the array of the snake.
if (snakeX == foodX && snakeY == foodY) {
snakeBody.push([foodX, foodY]) // this pushes the food into the snake body.
placeFood();
}
However, this just leaves the food in its place on the map. Need to push it into the body.
Then use decrement loop to add to the body.

## Collision detection with walls and body - Game over loop

-   Walls

if else loop.
If the snake head touches any part of the walls, then it is gameOver.
I have a 30x30 gride: 0 1 2 3 ...
0
1
2
3

At the left wall the x is 0, at the right wall y is 30.
At the top wall, the y is 0, at the bottom wall y is 30.
if(snakeHeadX <= 0 || ... >= 30 || same for y){ ..}
What about the snake moving along the wall? Will it still work?

-   Body

Use similar detection to food detection.
for(let i = 0; i < snankeBody.length; i++){
if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
gameOver = true;
game over function.
}
}

## Score counter

When the snake hits the food the score should increase.
Need a variable declared at the top for the score and that should equal 0. USE JS/TS challenges.
Need to put a line in the function where the snake hits the food, e.g., score += score; ????
Why isn't it updating on the actual score board??????????? scoreElement queryselector. I'm such an idiot.
use the same trick with the snake for updating score - innertext HTML

### QUESTIONS

-   if else loop on direction change
-   what is the .getContext("2d) about?
