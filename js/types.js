var types = {};

function element (name, move, damage, health, selectAble) {
	this.name = name;
	this.move = move;
	this.damage = damage;
	this.health = health;
	this.selectAble = selectAble;

	this.canMove = function(argument) {
		if (this.move > 0) {
			return true;
		}else{
			return false;
		};
	}
}

types.tank = new element("tank",3, 10, 10, true);
types.troops = new element("troops", 2, 10, 4, true);
types.clear = new element("clear", 0, 0, 0, false);