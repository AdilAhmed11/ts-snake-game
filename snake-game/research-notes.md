https://www.markdownguide.org/cheat-sheet/

# Research Notes

## Food spawn

Need an if/else function to check whether the food and snake head have been placed on top of each other, although the likelihood is very small in a 30x30 grid.
if(snakeHeadX === foodX && snakeHeadY === foodY) {
return 'restart condition'
} else;

## Movement

Event listener for keyboard clicks.
When pressing keyboard click, console log shows "ArrowUp" for up direction and other directions respectively.
If else statement that combines the key press and a change in direction.
Have two variable for each direction, x and y. Give each direction a value of 1 or 0 for movement in that direction on the grid.
E.g. directionX = 1, directionY = 0. To move right.
Give && condition to stop it going the opposite direction.
E.g. directionX = 1, directionY = 0 && directionX !== -1. To stop it from moving left when going right.

## How to increase the length of the snake?

## Collision detection with walls and body

-   Walls
-   Body

## Game over loop
