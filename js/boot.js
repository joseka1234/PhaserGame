var Game = {
	_WIDTH: 800,
	_HEIGHT: 600
};

Game.Boot = function (game) {};

Game.Boot.prototype = {
	preload: function () {
		this.load.image('preloaderBG', 'assets/images/loading-bg.png');
		this.load.image('preloaderBar', 'assets/images/loading-bar.png');
	},

	create: function () {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.pageAlignHorizontally = true;
		this.game.pageAlignVertically = true;
		this.game.state.start('Preloader');
	}
};