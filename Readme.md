The old man vs The sickness 

Description
 
The old man will be attacked by sicknesses and should avoid them by jumping over them. Otherwise, he will lose a life.
Also medicines will appear and he will have to jump and hit them to add lives.
If the old man dies, the game is over.


MVP (DOM - CANVAS)

Create the "splashScreen" in which there will be a start button that will redirect to the "gameScreen".
In the "gameScreen" the old man will be attacked by sicknesses and should jump over them to avoid them. In case of collision, he will lose a life.
When the old man dies, the game will end and the "gameOverScreen" will be displayed, in which there will be a reset button that will redirect to the "splashScreen".


Backlog

Create Medicine (Medicine.js)
Move Medicine (Medicine.js)
Draw Medicine (Medicine.js)
Check Collisions with Medicine (Game.js)
Add OldMan image
Add Sickness image
Add Medicine image
Add Game-Background image (main.js)
Add Levels (Game.js)
Add Music
Add style to splashScreen
Add style gameOverscreens

Data structure

splashScreen (button “Play”→ gameScreen)
gameScreen (if The old man dies → gameOveScreener)
gameOveScreen (button “Restart” → splashScreen)

Three characters:
Old Man
Sickness
Medicine

main.js:

createSplashScreen()
createGameScreen()
createGameOverScreen()
buildDom()


Classes

Game.js:

this.oldMan
this.sickness
this.medicine
this.isGameOver
this.canvas
this.ctx

OldMan.js:

this.x
this.y
this.velocity
this.direction
this.color
this.width
this.height
this.canvas
this.ctx
this.lives

Sickness.js:

this.x
this.y
this.velocity
this.direction
this.color
this.width
this.height
this.canvas
this.ctx

Medicine.js:

this.x
this.y
this.velocity
this.direction
this.color
this.width
this.height
this.canvas
this.ctx

Methods

Game.js:

this.startGame
this.checkLives
this.clear
this.update
this.draw
this.checkCollisions

OldMan.js:

this.move
this.draw
this.setDirection
this.updateLives

Sickness.js:

this.move
this.draw

Medicine.js:

this.move
this.draw
 

States y States Transitions

splashScreen (button “Play”→ gameScreen)
gameScreen (if The old man dies → gameOveScreener)
gameOveScreen (button “Restart” → splashScreen)


Task

Create files (html, css, js)
Copy boilerplate (html, css)
Setup GitHub
Create the splashScreen (main.js)
Create the gameScreen (main.js)
Create the gameOverScreen (main.js)
Set the transition between splashScreen & gameScreen (main.js)
Set the transition between gameScreen & gameOverScreen (main.js)
Set the transition between gameOverScreen & splashScreen (main.js)
Create game loop function (game.js)
Create Old Man (OldMan.js)
Move Old Man (OldMan.js)
Draw Old Man (OldMan.js)
SetDirection OldMan (OldMan.js)
Create Sickness (Sickness.js)
Move Sickness (Sickness.js)
Draw Sickness (Sickness.js)
Check collisions with sickness (Game.js)
Game Over condition (Game.js)

 
Links

Trello
The old man vs The sickness

Git
URls for the project repo and deploy Link Repo Link Deploy

Slides
URls for the project presentation (slides) Link Slides.com


