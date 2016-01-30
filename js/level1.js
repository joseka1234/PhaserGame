Game.Level1 = function (game) {};

Game.Level1.prototype = {
	preload: function () {
		this.x = Game._WIDTH / 2;
		this.y = Game._HEIGHT / 2;
		
	},
	create: function () {
		this.playerFront = this.add.sprite(this.x, this.y,'front');
		this.playerFront.anchor.set(0,1);
		this.playerFront.visible = false;

		this.player = this.add.sprite(this.x, this.y, 'walk');
		this.player.anchor.set(0,1);
		this.player.animations.add('walk');
		this.player.animations.play('walk', 15, true);
	},
	update: function () {
		if()
	}
};