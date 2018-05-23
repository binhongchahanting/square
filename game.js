var Game = function() {
	var nextDivs = [];
	var gameDivs = [];
	var timeDiv;
	var score = 0;
	var scoreDiv;
	var nextData = [
		[1, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	];
	var gameData = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
	];
	var cur; // 当前方块
	var nex; // 下一个

	var initData = function(conatiner, data, divs) {
		for(var i=0; i<data.length; i++) {
			var newNode= [];
			for (var j =0; j<data[0].length; j++) {
				var elm = document.createElement('div');
				elm.className = 'none';
				elm.style.left = 20 * j + 'px';
				elm.style.top = 20 * i + 'px';
				conatiner.appendChild(elm);
				newNode.push(elm);
			}
			divs.push(newNode);
		}
	}
	var refreshDiv = function(data, divs) {
		for (var i=0; i < data.length; i++) {
			for(var j=0; j < data[0].length; j++) {
				if (data[i][j] === 0) {
					divs[i][j].className = 'none';
				} else if (data[i][j] === 1) {
					divs[i][j].className = 'current';
				} else if (data[i][j] === 2) {
					divs[i][j].className = 'down';
				}
			}
		}
	}
	var check = function(pos, x, y) {
		if (pos.x + x < 0) {
			return false;
		} else if(pos.x + x >= gameData.length) {
			return false;
		} else if (pos.y + y < 0) {
			return false;
		} else if (pos.y + y >= gameData[0].length) {
			return false;
		} else if (gameData[pos.x+x][pos.y+y] == 2) {
			return false;
		} else {
			return true;
		}
	}
	var isValid = function(pos, data) {
		// console.log('pos', pos);
		for(var i=0;i<data.length;i++) {
			for(var j=0;j<data[0].length;j++){
				if (data[i][j] != 0) {
					if (!check(pos, i ,j)) {
						return false;
					}
				}
			}
		}
		return true;
	}
	var clearData = function() {
		for(var i=0;i<cur.data.length; i++) {
			for(var j=0; j<cur.data[0].length; j++) {
				if (check(cur.origin, i, j)) {
					gameData[cur.origin.x+i][cur.origin.y+j] = 0;
				}
			}
		}
	}
	var setData = function() {
		for(var i=0;i<cur.data.length; i++) {
			for(var j=0; j<cur.data[0].length; j++) {
				if (check(cur.origin, i, j)) {
					gameData[cur.origin.x+i][cur.origin.y+j] = cur.data[i][j];
				}
			}
		}
	}
	var down = function() {
		if(cur.canDown(isValid)) {
			clearData();
			cur.down();
			setData();
			refreshDiv(gameData, gameDivs);
			return true;
		}
		return false;
	}
	var left = function() {
		if(cur.canLeft(isValid)) {
			clearData();
			cur.left();
			setData();
			refreshDiv(gameData, gameDivs);
		} 
	}
	var right = function() {
		if( cur.canRight(isValid) ) {
			clearData();
			cur.right();
			setData();
			refreshDiv(gameData, gameDivs);
		} 
	}
	var rotate = function() {
		if( cur.canRotate(isValid) ) {
			clearData();
			cur.rotate();
			setData();
			refreshDiv(gameData, gameDivs);
		} 
	}
	var fall = function() {
		while(down());
	}
	var fixed = function() {
		for(var i=0;i<cur.data.length; i++) {
			for(var j=0; j<cur.data[0].length; j++) {
				if (check(cur.origin, i, j)) {
					if (gameData[cur.origin.x + i][cur.origin.y+j] === 1) {
						gameData[cur.origin.x + i][cur.origin.y+j] = 2;
					}
				}
			}
		}
		refreshDiv(gameData, gameDivs);
	}
	var performNext = function(type, dir) {
		cur = next;
		setData();
		next = SqueryFactory.prototype.make(type, dir);
		refreshDiv(gameData, gameDivs);
		refreshDiv(next.data, nextDivs);
	}
	var checkClear = function() {
		var line = 0;
		for (var i=gameData.length-1; i>=0; i--) {
			var clear = true;
			for (var j=0; j<gameData[0].length;j++) {
				if (gameData[i][j] != 2) {
					clear = false;
					break;
				}
			}
			if (clear) {
				line = line + 1;
				for (var m = i; m>0; m--) {
					for (var n =0; n<gameData[0].length; n++) {
						gameData[m][n] = gameData[m-1][n];
					}
				}
				for (var n=0; n<gameData[0].length; n++) {
					gameData[0][n] = 0;
				}
				i++;
			}
		}
		return line;
	}
	var gameOver = function() {
		var gameOver = false;
		for (var i=0; i< gameData[0].length;i++) {
			if (gameData[1][i] == 2) {
				gameOver = true;
			}
		}
		return gameOver;
	}
	var addScore = function(line) {
		var s = 0;
		switch(line) {
			case 1:
			 s = 10;
			 break;
			case 2:
			 s = 30;
			  break;
			case 3:
			 s = 60;
			  break;
			case 4:
			 s = 100;
			  break;
			default:
				break;  
		}
		score = score + s;
		scoreDiv.innerHTML = score;
	}
	var setTime = function(time) {
		timeDiv.innerHTML = time;
	}
	var init = function(doms, type, dir) {
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		timeDiv = doms.timeDiv;
		scoreDiv = doms.scoreDiv;
		next = SqueryFactory.prototype.make(type,dir);
		initData(gameDiv, gameData, gameDivs);
		initData(nextDiv, next.data, nextDivs);
		refreshDiv(next.data, nextDivs);
	}

	this.init = init;
	this.down = down;
	this.left = left;
	this.right = right;
	this.rotate = rotate;
	this.fall = fall;
	this.fixed = fixed;
	this.performNext = performNext;
	this.checkClear = checkClear;
	this.gameOver = gameOver;
	this.setTime = setTime;
	this.addScore = addScore;
}
