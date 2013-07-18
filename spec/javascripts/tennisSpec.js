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

		it("winGame method increments game value", function() {
			player = new Player();
			player.winGame();
			expect(player.getGames()).toEqual(1);
			player.winGame();
			expect(player.getGames()).toEqual(2);
		});

		it("resetPoints method reset players points", function() {
			player = new Player();
			player.winPoint();
			player.winPoint();
			player.winPoint();
			player.winPoint();
			player.winPoint();
			expect(player.getPoints()).toEqual(5);
			player.resetPoints();
			expect(player.getPoints()).toEqual(0);
		});

		it("winSet method increments players sets value", function() {
			player = new Player();
			expect(player.getSets()).toEqual(0);
			player.winSet();
			expect(player.getSets()).toEqual(1);
		});

		it("resetGames method resets players gamesWon", function() {
			player = new Player();
			player.winGame();
			expect(player.getGames()).toEqual(1);
			player.resetGames();
			expect(player.getGames()).toEqual(0);
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
				expect(game.win(player1)).toEqual("30");
			});

			it("Game.win method returns 30-30 when both players score twice", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player2);
				expect(game.win(player2)).toEqual("30");
			});



			it("Game.win method returns 30-40", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player1);
				game.win(player2);
				expect(game.win(player2)).toEqual("30");
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

			xit("Game.win method returns 'deuce' even when ties 80-80", function() {
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

			it("Game.win method returns 'game' when one of players wins at a score 0-40", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				
				game.win(player2);
				game.win(player2);
				game.win(player2);
				expect(game.win(player2)).toEqual("game");
			});
			it("Game.win method returns 'game' when one of players wins at a score 0-40", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player1);

				game.win(player2);
				game.win(player2);
				game.win(player2);
				expect(game.win(player2)).toEqual("ADV");
			});

			xit("Game.win method returns 'game' when one of players wins at a score 0-40", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
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
				expect(game.win(player2)).toEqual("ADV");
			});

			it("Opponent is player 1", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);

				expect(game.opponent(player1)).toEqual(player2);
			});

			it("Opponent is player 2", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);

				expect(game.opponent(player2)).toEqual(player1);
			});

			it("winGame function increments player.gamesWon value and reset points of both players", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player1);
				game.win(player1);
				game.win(player2);
				expect(game.win(player1)).toEqual("40");
				game.winGame(player1);
				expect(player1.getGames()).toEqual(1);
				expect(player1.getPoints()).toEqual(0);
				expect(player2.getPoints()).toEqual(0);
				expect(game.opponent(player2)).toEqual(player1);
			});	



			it("Winning the game incremenets players game score and resets both players points", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);
				game.win(player2);
				game.win(player2);
				game.win(player2);
				game.win(player2);
				expect(player1.getGames()).toEqual(0);
				expect(player2.getGames()).toEqual(1);
				expect(player1.getPoints()).toEqual(0);
				expect(player2.getPoints()).toEqual(0);
			});


			it("Winning the set will increment players set Value", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);

				game.winGame(player2);
				game.winGame(player2);
				game.winGame(player2);
				game.winGame(player2);
				game.winGame(player2);
				game.winGame(player2);
				expect(player1.getSets()).toEqual(0);
				expect(player2.getSets()).toEqual(1);
				//expect(game.gamesArchive[0][0]).toEqual(1)
			});
		});


		describe("Allows match Winning", function(){
			it("wins a match as soon as one of the players wins 3 sets", function() {
				player1 = new Player();
				player2 = new Player();
				game = new Game(player1, player2);

				game.winSet(player1);
				game.winSet(player1);
				game.winSet(player1);
				expect(game.isMatchWon()).not.toBeFalsy();
			});
		});




	});

});