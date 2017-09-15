## Attack & Defence
A take on the classic Naughts & Crosses / Tic Tac Toe game.
Programmed using JavaScript, HTML, and CSS.
The aim of this project was to successfully create a playable game, based on naughts and crosses.

### The Rules:
- Attack has the first turn
- Each player takes turns placing their icon on a tile.
- The first player to fill three tiles in a row with their icon wins
- Tiles can be filled horizontally, vertically, or diagonally, to win
- The winner will be displayed in a banner at the bottom of the screen
- It is possible to get a tie, in this case a banner indicating the game is a tie will be shown at the bottom of the screen
- The reset button can be pressed at any time to reset the game


### The Process
I started by writing down all of the actions I knew the game would need to be able to perform, to give myself an overview of the problem. This list can be found in *planning/planning.txt*.
I then created a flow chart of the basic structure of the program. This can be found in *planning/planning-flow-chart.jpg*. Using the flow chart definitely helped me keep myself on track with creating the right functions and getting the over all program together.

I split up my code into logic functions (which I did first), and presentation functions, as I wanted to get the overall game logic working before I hooked it up to the front-end.

I used JavaScript to create a "board" array that symbolised the tile placement on the front end. Each time a tile is clicked it gets assigned a class (Attack, or Defence) which is then passed through to the array.

After this the array goes through a number of checks to see if any player has won the game, if not the game resumes.
Once one of the players has won the game, by getting three tiles in a row vertically, horizontally or diagonally, the ability to click on tiles is removed. A banner appears at the bottom of the screen declaring the winner.

The option to reset the board is there at any time by clicking the reset button at the bottom of the page.

### The front-end
I decided on a medieval theme for this game. I surmised that the main players of a game like this would be young children, and a cute medieval theme seemed like a friendly and colourful option.


### Challenges
The main challenge of this project was connecting the logic functions I initially wrote with the presentation of the game on the screen. Some cross over has definitely occurred, and I think with practice I will be better able to keep those functions separate. Setting out to do the programming in this way helped me to focus on each section of the program and how it would function, rather than worrying about how it would look.

The game is not responsive as I was focussing mostly on making it work at all. I would like to come back to this project and make it responsive, as at the moment it is optimised for screens above 1260px.

Full project can be found [HERE](https://arielse.github.io/1-project-oxo/)
