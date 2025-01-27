# game-project

# Introduction

I am planning to build 'Snake'.

This is a classic game where the user controls a snake around the screen, consuming food to grow longer.

The objective of the game will be to control a snake to eat as much food as possible to grow as long as possible, while avoiding head-on collision with the walls or its own body.

The snake will start off as a single block and will grow in size by one block with each piece of food consumed. The food item will only be one block, and when consumed will spawn on a random place on the screen (not where the snake is).

The challenge of the game increases as the snakes body grows longer, as it consumes more food, leaving less room to maneuver.

The score will increase with every piece of food eaten. There will be a max score when the snake reaches the maximum length and no more food can be placed on the screen.

# How I Plan On Building It

## HTML/CSS

-   [x] A square display of a fixed size for onscreen elements (snake & food)

    -   [x] The square display and elements need to grow in proportion when moving from mobile to desktop.
    -   [ ] The display will have a grid as a background for the snake to move around. Will be visible.

-   [ ] A set of buttons

    -   [x] On-screen Direction buttons (up, down, left, right) in mobile mode (touch screens)
    -   [ ] Button to restart the game

-   [x] Random placement of the snake
-   [x] Random placement of the food
-   [x] A current score counter
-   [x] A high score counter that remembers the high score from the session played
-   [x] Heading with the name 'SNAKE'

## TypeScript Logic

-   [x] Create the snake head
-   [x] Create the food
-   [x] The snake and food should start at a random position at the start of a new game - [ ] The snake and the food should not be placed on top of each other at the start of the game

    <!-- an array of 900 values [x,y] coord -->
    <!-- food - save (x,y) for that value -->
    <!-- head -> check that random [x, y] is !== to food[x, y] if === then generate random one more time (for loop until not equal) -->

-   [x] Add eventListener to look out for clicks

    -   [x] Listens for clicks on the on-screen direction buttons - the snake should move in the direction of the button clicked.
        <!-- Snake is 3 block long [[1, 2], [1, 3], [1, 4]] Moving down  [[1, 3], [1, 4], [1, 5]]-->
        <!-- Handle special logic when at the edges of the board -->
    -   [x] Listens for keyboard clicks
    -   [ ] Listens for clicks on the restart button.

-   [x] The game should start and restart in a static state.
    -   [x] The snake should go back to its original size, and the snake and food should be placed in a random spot.
-   [x] The snake should move at a constant speed when changing directions
    -   [x] Function that handles the change in direction
    -   [x] Pressing the same direction button twice or more in succession should not speed up the snake
    -   [x] Function that stops the snake from moving immediately in the opposite direction e.g., up when going down, left when going right (the snake has to move in a perpendicular direction).
-   [x] Only the snake's head should move and the body should follow after
-   [x] When the snake eats the food, its body should grow by one 'block'

    -   [x] Function that checks whether the food has been hit by the snake
    -   [x] Function that increases the size of the snakes body by one 'block' - This could be done with .push loop
    -   [x] The food should then re-spawn in a different random location on the grid
    -   [x] Function that updates the score when the food has been consumed
    -   [x] Function that handles the repositioning of the food to another random position when it has been consumed.

-   [x] Function to check whether the snake has hit itself or the walls that ends the game

-   [ ] Possible error states
    -   [x] The snake should start off as static. Should only begin once the user has clicked a direction button
    -   [ ] The snake and food should not start off on top of each other
    -   [x] The snake goes beyond the boundary of the grid box.

## List Of Features The Game Will Include

-   [ ] Movement controls: On-screen buttons for mobile mode and keyboard arrow keys for desktop
-   [x] Random food generation
-   [x] Snake growth with a score counter

# Extra Tasks if extra time.

-   [ ] Sound effects
-   [ ] Add difficulty levels: Easy, Medium, Hard. This will be correlated to the speed the snake moves on the screen.
    -   [ ] A drop down menu to select the difficulty before the game starts.
-   [ ] Add a different mode with no walls - the snake will be able to pass through a wall and exit the opposite side.
-   [ ] Add special effects to make it unique/distinguishable from classic 'Snake'.
    -   [ ] Feature 1?
-   [ ] Special level where direction keys are the opposite (up is down and right is left).

# MVP

_Remove this section at the end of the project_

-   [x] Present a simple plan of the game to one of the coaches:

    -   [x] What will happen in the game in plain english
    -   [x] How you plan on building it (HTML/CSS/TS)
    -   [x] List of features the game will include in order of importance

-   [x] Version control

    -   [x] Public repository on GitHub
    -   [x] Have a README file with a short intro
    -   [x] Have at least 15 meaningful Git commits

-   [x] Readability

    -   [x] TS code to be formatted as functions
    -   [x] Code must be correctly formatted using suitable indentation and variable names

-   [x] The Code
    -   [x] Must be all my own. Be able to explain what everything does and it's there
    -   [x] Click or keypress to trigger the events of the game (no refreshing to restart the game)
    -   [x] Mobile-first approach to the implementation. It needs to work on different device widths
