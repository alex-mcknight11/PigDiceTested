// BUSINESS LOGIC

export function Player() {
	this.roll = 0;
	this.tempScore = 0;
	this.totalScore = 0;
}

// Changed syntax for jest testing

export function rollDice() {
	return Math.floor(Math.random() * 6 + 1);
}

Player.prototype.rollPoints = function () {
	if (this.roll === 1) {
		this.tempScore = 0;
		alert('You rolled a 1 and now your score is 0');
	} else {
		this.tempScore = this.roll + this.tempScore;
	}
};

Player.prototype.hold = function () {
	this.totalScore += this.tempScore;
	this.tempScore = 0;
};

Player.prototype.winner = function () {
	if (this.totalScore >= 100) {
		alert('Player 1 wins!');
	}
};
