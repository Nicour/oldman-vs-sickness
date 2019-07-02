'use strict';

function main() {

  var mainElement = document.querySelector('#site-main');

  function buildDom(html) {
    mainElement.innerHTML = html;
    return mainElement;
  };

  function createSplashScreen() {
      var splashScreen = buildDom(`
        <section>
          <h1>The old man vs The sickness</h1>
          <button>Start</button>
        </section>
      `);
  
      var startButton = splashScreen.querySelector('button');
      startButton.addEventListener('click',createGameScreen);

  };

  function createGameScreen() {
    var gameScreen = buildDom(`
      <section>
        <canvas width="1000" height="500"></canvas>
      </section>
    `);

    var canvas = document.querySelector('canvas');
    var game = new Game(canvas);
    game.startGame();

    var timeOut = setTimeout(createGameOverScreen, 2000)
  };

  function createGameOverScreen() {
    var gameOverScreen = buildDom(`
      <section>
        <h1>The old man dies!!</h1>
        <button>Restart</button>
      </section>
    `);

    var buttonRestart = gameOverScreen.querySelector('button');
    buttonRestart.addEventListener('click',createSplashScreen);

  };

createSplashScreen();

};

window.addEventListener('load', main);