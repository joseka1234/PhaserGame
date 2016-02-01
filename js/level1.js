Game.Level1 = function (game) {};

Game.Level1.prototype = {
	preload: function () {
		this.floor = 74;
		this.platform = 15;

		this.x = Game._WIDTH / 2;
		this.y = Game._HEIGHT / 2;

		this.gravity = 200;
		this.speedX = 3;
		this.speedY = 4;
	},
	create: function () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.map = this.game.add.tilemap('mapa');
		this.map.addTilesetImage('tiles', 'tileSet');
		// Map collisions
		this.map.setCollision(this.floor);
		this.map.setCollision(this.platform);

		this.layer = this.map.createLayer('lvl1Layer');
		this.layer.resizeWorld();

		this.player = this.add.sprite(this.x, this.y,'front');
		this.player.anchor.set(0,1);

		this.game.physics.arcade.enable(this.player);
		this.game.physics.arcade.gravity.y = this.gravity;
		this.player.body.collideWorldBounds = true;

		this.game.camera.follow(this.player);

	},
	update: function () {
		this.game.physics.arcade.collide(this.player, this.layer);
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
			this.player.x += this.speedX;
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			this.player.x -= this.speedX;
		if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
			this.player.y -= this.speedY;
	}
};