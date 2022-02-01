// UI LOGIC

let player1 = new Player();
let player2 = new Player();

// Player 1
$(document).ready(function () {
	$('button#rollP1').click(function (event) {
		event.preventDefault();
		player1.roll = rollDice();
		player1.rollPoints();
		$('.roll1').html(player1.roll);
		$('.turnTotal1').html(player1.tempScore);
		// $('#p1').append("<li>" + player1.roll + "</li>")
		console.log(player1.roll);
	});

	$('button#holdP1').click(function (event) {
		event.preventDefault();
		player1.hold();
		player1.winner();
		$('.turnTotal1').html('0');
		$('.roll1').html('0');
		$('.grandTotal1').html(player1.totalScore);
	});

	// Player 2
	$('button#rollP2').click(function (event) {
		event.preventDefault();
		player2.roll = rollDice();
		player2.rollPoints();
		$('.roll2').html(player2.roll);
		$('.turnTotal2').html(player2.tempScore);
		console.log(player2.roll);
	});

	$('button#holdP2').click(function (event) {
		event.preventDefault();
		player2.hold();
		player2.winner();
		$('.turnTotal2').html('0');
		$('.roll2').html('0');
		$('.grandTotal2').html(player2.totalScore);
	});
});
