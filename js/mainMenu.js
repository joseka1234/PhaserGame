Game.MainMenu = function (game) {};

Game.MainMenu.prototype = {
	preload: function () {
		// To test
	},
	create: function () {
		this.game.state.start('Level1');
	},
	update: function () {
		//To test
	}
};