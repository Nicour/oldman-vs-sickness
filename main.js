'use strict';

function main() {

  var mainElement = document.querySelector('#site-main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen() {
      var splashScreen = buildDom(`
      <main>
        <section class="main-screen">
          <h1>The old man vs The sickness</h1>
          <button class="start-button">Start</button>
        </section>
      </main>
      `);
  
      var startButton = splashScreen.querySelector('button');
      startButton.addEventListener('click',createGameScreen);

  };

  function createGameScreen() {
    var gameScreen = buildDom(`
      <section class="background">
        <div class="lives"><span class="number-of-lives"></span> hours of life !</div>
        <canvas width="1000" height="500"></canvas>
      </section>
    `);

    var canvas = document.querySelector('canvas');
    var game = new Game(canvas);
    game.gameOverCallback(createGameOverScreen);
    game.startGame();


    document.addEventListener('keydown', function(event) {
      if(event.key === 'ArrowUp') {
        game.oldMan.jump();
      } 
    });
  };

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
      <section class="main-screen">
        <h1>The old man died!!</h1>
        <button class="start-button">Restart</button>
      </section>
    `);

    var buttonRestart = gameOverScreen.querySelector('button');
    buttonRestart.addEventListener('click',createSplashScreen);

  };
  
  createSplashScreen();
  
};

window.addEventListener('load', main);