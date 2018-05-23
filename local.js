var Local = function() {
  var game;
  var timer = null;
  var time = 200;
  var timeCunt = 0;
  var time_ = 0;
  var bindKeyEvent = function() {
  	document.onkeydown = function(e) {
  		if (e.keyCode == 38) { // up
  			game.rotate();
  		} else if (e.keyCode == 39) { // right
  			game.right();
  		} else if (e.keyCode == 40) { // down
  			game.down();
  		} else if (e.keyCode == 37) { // left
  			game.left();
  		} else if (e.keyCode == 32) { // space
  			game.fall();
  		}
  	}
  }
  var move = function() {
  	timeFunc();
  	if (!game.down()) {
  		game.fixed();
  		var line = game.checkClear();
  		if (line) {
  			console.log(121212);
  			game.addScore(line);
  		}
  		var gameOver = game.gameOver();
  		if (gameOver) {
  			stop();
  		} else {
  			game.performNext(generateType(), generateDir());
  		}
  	}
  }
  var timeFunc = function() {
  	timeCunt = timeCunt + 1;
  	if (timeCunt == 5) {
  		timeCunt = 0;
  		time_ = time_ + 1;
  		game.setTime(time_);
  	}
  }
  var stop = function() {
  	if (timer) {
  		clearInterval(timer);
  		timer = null;
  	}
  	document.onkeydown= null;
  }
  var generateType = function() {
  	return Math.ceil(Math.random()*7) - 1;
  }
  var generateDir = function() {
  	return Math.ceil(Math.random()*4) - 1;
  }
  var start = function() {
    var doms = {
      gameDiv: document.getElementById('game'),
      nextDiv: document.getElementById('next'),
      timeDiv: document.getElementById('time'),
      scoreDiv: document.getElementById('count'),
    };
    game = new Game();
    game.init(doms, generateType(), generateDir());
    bindKeyEvent();
    game.performNext(generateType(), generateDir());
    timer = setInterval(function() {
    	move();
    }, time)
  }
 this.start = start;
}
