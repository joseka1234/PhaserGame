Game.Level1 = function (game) {};

Game.Level1.prototype = {
	preload: function () {
		this.floor = 74;
		this.platform = 15;

		this.x = Game._WIDTH / 2;
		this.y = Game._HEIGHT / 2;

		this.gravity = 2600;
		this.speedX = 1500;
		this.speedY = -1000;
		this.drag = 800;
		this.maxSpeed = 500;
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

		// Physics
		this.game.physics.arcade.enable(this.player);
		this.game.physics.arcade.gravity.y = this.gravity;
		this.player.body.collideWorldBounds = true;
		this.player.body.drag.setTo(this.drag, 0);
		this.player.body.maxVelocity.setTo(this.maxSpeed, this.maxSpeed * 10);

		this.game.camera.follow(this.player);

	},
	update: function () {
		this.game.physics.arcade.collide(this.player, this.layer);

		if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
			this.player.body.acceleration.x = this.speedX;
		else if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
			this.player.body.acceleration.x = -this.speedX;
		else
			this.player.body.acceleration.x = 0;

		var onTheGround = this.player.body.touching.down;

		if(onTheGround && this.game.input.keyboard.isDown(Phaser.Keyboard.UP))
			this.player.body.velocity.y = this.speedY;
	}
};