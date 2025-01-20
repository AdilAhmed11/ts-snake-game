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

    -   [ ] The square display and elements need to grow in proportion when moving from mobile to desktop.
    -   [ ] The display will have a grid as a background for the snake to move around. Will be visible.

-   [ ] A set of buttons

    -   [x] On-screen Direction buttons (up, down, left, right) in mobile mode (touch screens)
    -   [ ] Button to restart the game

-   [ ] Random placement of the snake
-   [ ] Random placement of the food
-   [x] A current score counter
-   [x] A high score counter that remembers the high score from the session played
-   [x] Heading with the name 'SNAKE'

## TypeScript Logic

-   [ ] eventListeners will need to look out for clicks
    -   [ ] Listens for clicks on the on-screen direction buttons => the snake should move in the direction of the button clicked
    -   [ ] Listens for clicks for keyboard buttons
    -   [ ] Listens for clicks on the restart button
-   [ ] The game should start and restart in a static state.
-   [ ] The game should start with the snake and food in a random place.
-   [ ] Should restart the game, the snake should go back to its original size, and the snake and food should be placed in a random spot.
-   [ ] Function that handles the increase in size of the snakes body when it consumes food
    -   [ ] Function that checks whether the food has been hit by the snake
-   [ ] Function that updates the score when the food has been consumed
-   [ ] Function that handles the change in direction
-   [ ] Function that handles the repositioning of the food to another random position when it has been consumed.

-   [ ] Possible error states
    -   [ ] The snake should start off as static. Should only begin once the user has clicked a direction button
    -   [ ] The snake and food should not start off on top of each other
    -   [ ] The snake goes beyond the boundary of the grid box.

## List Of Features The Game Will Include

In order of importance

# Extra Tasks

-   [ ] Sound effects
-   [ ] Add difficulty levels: Easy, Medium, Hard. This will be correlated to the speed the snake moves on the screen.
    -   [ ] A drop down menu to select the difficulty before the game starts.
-   [ ] Add a different mode with no walls - the snake will be able to pass through a wall and exit the opposite side.
-   [ ] Add special effects to make it unique/distinguishable from classic 'Snake'.
    -   [ ] Feature 1?

# MVP

_Remove this section at the end of the project_

-   [ ] Present a simple plan of the game to one of the coaches:

    -   [x] What will happen in the game in plain english
    -   [x] How you plan on building it (HTML/CSS/TS)
    -   [ ] List of features the game will include in order of importance

-   [ ] Version control

    -   [x] Public repository on GitHub
    -   [x] Have a README file with a short intro
    -   [ ] Have at least 15 meaningful Git commits

-   [ ] Readability

    -   [ ] TS code to be formatted as functions
    -   [ ] Code mush be correctly formatted using suitable indentation and variable names

-   [ ] The Code
    -   [ ] Must be all my own. Be able to explain what everything does and it's there
    -   [ ] Click or keypress to trigger the events of the game (no refreshing to restart the game)
    -   [ ] Mobile-first approach to the implementation. It needs to work on different device widths
