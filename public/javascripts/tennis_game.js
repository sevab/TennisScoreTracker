function Player(name) {
	if(typeof(name)==='undefined') name = 'Alex';
	this.name = name;
	this.points = 0;
	this.gamesWon = 0;
	this.setsWon = 0;

	this.getPoints  = function() {
		return this.points;
	}
	this.winPoint = function() {
		this.points = this.points + 1;
	}

	this.winGame = function() {
		this.gamesWon = this.gamesWon + 1;
	}
	this.getGames  = function() {
		return this.gamesWon;
	}

	this.resetPoints  = function() {
		this.points = 0;
	}

	this.winSet = function() {
		this.setsWon = this.setsWon + 1;
	}
	this.getSets  = function() {
		return this.setsWon;
	}

	this.resetGames = function() {
		this.gamesWon = 0;
	}


};

function Game(player1, player2, gender) {
	this.player1 = player1;
	this.player2 = player2;
	this.gender = gender;
	this.gamesArchive = new Array();
	
	var PAIRS = {
		'0' : 'Love',
		'1' : '15',
		'2' : '30',
		'3' : '40'
	}


	if (this.gender == 'male') {
		this.limit = 2;
	} else{
		this.limit = 1;
	};

	this.isTie = function() {
		return this.player1.getPoints() == this.player2.getPoints();
	}


	this.getScore = function(player) {
		var b = player.getPoints()-this.opponent(player).getPoints();
		if (Math.abs(b) > 1) {
			if (this.player1.getPoints() > 3 || this.player2.getPoints() > 3) {
				if (b > 0) {
					this.winGame(player);
					return "game";
				} else {
					return "game";
				};
			};
		};


		if (this.isTie() && this.player1.getPoints() > 2) {
			return "deuce";
		};

		if (this.player1.getPoints() >= 3 && this.player2.getPoints() >= 3) {
			var a = player.getPoints()-this.opponent(player).getPoints();
			if (Math.abs(a) == 1) {
				if (a > 0) {
					return "ADV";
				} else {
					return "40";
				};
			};
		};		

		return PAIRS[player.getPoints().toString()];
	}


	this.win = function(player) {
		player.winPoint();
		return this.getScore(player);
	}



	this.opponent = function(player) {
		if(player == this.player1) {
			return this.player2;
		}
		else {
			return this.player1;
		}
	}

	this.winGame = function(player) {
		player.winGame();
		this.isSetWon(player);
		player.resetPoints();
		this.opponent(player).resetPoints();
	}


	this.isSetWon = function(player) {
		if (player.getGames() == 6) {

			if (this.opponent(player).getGames() == 6) {
				return true
			};

			if (this.opponent(player).getGames() < 5) {
				this.winSet(player);
			};
		};

		if (player.getGames() == 7) {
			this.winSet(player);
		}
	}

	this.winSet = function(player) {
		player.winSet();
		this.archiveGames();
		player.resetGames();
		this.opponent(player).resetGames();
	}

	this.archiveGames = function() {
		var x = this.player1.getGames();

		this.gamesArchive.push({
			x: this.player2.getGames()
		});
	}

	this.isMatchWon = function() {
		if (this.player1.getSets() > this.limit){
			return "Player 1"
		}
		else if (this.player2.getSets() > this.limit) {
			return "Player 2"
		} else {
			return false;
		}
	}

};