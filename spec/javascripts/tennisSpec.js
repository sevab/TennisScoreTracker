describe("Tennis-Game", function() {
	
	describe("Player", function() {

		it("has points value", function() {
			player = new Player();
			expect(player.getPoints()).toEqual(0);
		});

		it("win method increments points value", function() {
			player = new Player();
			player.winPoint();
			expect(player.getPoints()).toEqual(1);
		});
	});



	describe("Game", function(){
		describe("converts points into corresponding calls", function() {

			it("Game.win method calls a win method upon the player passed", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				expect(player1.getPoints()).toEqual(1);
			});


			it("Game.win method returns current score", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				expect(game.win(player2)).toEqual("15-15");
			});

			it("Game.win method returns 30-30 when both players score twice", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player2);
				expect(game.win(player2)).toEqual("30-30");
			});



			it("Game.win method returns 40-30", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				game.win(player2);
				expect(game.win(player2)).toEqual("40-30");
			});

			it("Game.win method returns 'deuce' instead for ties after 30", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				game.win(player2);
				game.win(player2);
				expect(game.win(player2)).toEqual("deuce");
			});

			it("Game.win method returns 'deuce' even when ties 80-80", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				
				game.win(player2);
				game.win(player2);
				game.win(player2);
				game.win(player2);
				game.win(player2);
				game.win(player2);
				expect(game.win(player2)).toEqual("deuce");
			});

			it("Game.win method returns 'game' when one of players wins at a score 0-4", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				
				game.win(player2);
				game.win(player2);
				game.win(player2);
				expect(game.win(player2)).toEqual("game");
			});
			it("Game.win method returns 'game' when one of players wins at a score 0-4", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player1);

				game.win(player2);
				game.win(player2);
				game.win(player2);
				expect(game.win(player2)).toEqual("ads-40");
			});


		});

	});

});