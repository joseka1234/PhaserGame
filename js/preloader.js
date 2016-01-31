Game.Preloader = function (game) {};

Game.Preloader.prototype = {
	preload: function () {
		// Set the loading bar
		/*
		this.preloadBG = this.add.sprite(Game._WIDTH / 2, Game._HEIGHT / 2, 'preloaderBG');
		this.preloadBar = this.add.sprite(Game._WIDTH / 2, Game._HEIGHT / 2, 'preloaderBar');
		this.preloadBG.anchor.set(0.5);
		this.preloadBar.anchor.set(0.5);
		this.load.setPreloadSprite(this.preloadBar);
		*/

		// Preload all assets
		this.game.load.atlas('walk', 'assets/Base pack/Player/p1_walk/p1_walk.png', 'assets/Base pack/Player/p1_walk/p1_walk.json')
		this.game.load.image('front', 'assets/Base pack/Player/p1_front.png');
		this.game.load.image('jump', 'assets/Base pack/Player/p1_jump.png');

		this.game.load.tilemap('mapa', 'assets/maps/map1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tileSet', 'assets/Base pack/Tiles/tiles_spritesheet.png');
	},
	create: function () {
		this.game.state.start('MainMenu');
	}
};