function Player() {
	this.name = 'Alex';
	this.points = 0;

	this.getPoints  = function() {
		return this.points;
	}
	this.winPoint = function() {
		this.points = this.points + 1;
	}
};

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;

	var PAIRS = {
		'1' : '15',
		'2' : '30',
		'3' : '40',
	}

	this.isTie = function() {
		return this.player1.getPoints() == this.player2.getPoints();
	}

	this.getScore = function() {
		if (Math.abs(this.player2.getPoints()-this.player1.getPoints()) > 1) {
			if (this.player1.getPoints() > 3 || this.player2.getPoints() > 3) {
				return "game";
			};
		};

		if (this.player1.getPoints() >= 3 && this.player2.getPoints() >= 3) {
			var a = Math.abs(this.player2.getPoints()-this.player1.getPoints());

			if (a == 1) {
				if (a > 0) { return "ads" + '-' + (this.player1.getPoints()+1)*10;}
				else {return "ads" + '-' + (this.player2.getPoints()+1)*10;};
			};
		};		

		if (this.isTie() && this.player1.getPoints() > 2) {
			return "deuce";
		};
		return PAIRS[this.player1.getPoints().toString()] + '-' + PAIRS[this.player2.getPoints().toString()];
	}

	this.win = function(player) {
		player.winPoint();
		return this.getScore();
	}
};