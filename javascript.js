var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d"); 

var x = canvas.width/2; 
var y = canvas.height-30; 
var dx = 2; 
var dy = -2; 
var ballRadius = 10;

var paddleHeight = 10; 
var paddleWidth = 75; 

var paddleX = (canvas.width-paddleWidth)/2; 

var rightPressed = false; 
var leftPressed = false; 

function drawBall() {
	ctx.beginPath(); 
	ctx.arc(x, y, ballRadius, 0, Math.PI*2); 
	ctx.fillStyle = "#0095DD"; 
	ctx.fill(); 
	ctx.closePath(); 
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight); 
	ctx.fillStyle = "#0095DD"; 
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); 
	drawBall(); 
	drawPaddle();
	
	if(rightPressed && paddleX < canvas.width-paddleWidth) {
		paddleX += 7; 
	} else if(leftPressed && paddleX > 0) {
		paddleX -= 7; 
	}

	x += dx;
	y += dy; 

	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    	dx = -dx;
	}

	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
	    dy = -dy;
	}
}
document.addEventListener("keydown", keyDownHandler, false); 
document.addEventListener("keyup", keyUpHandler, false); 

function keyDownHandler(event) {
	if(event.keyCode == 39) {
		rightPressed = true; 
	} else if(event.keyCode == 37) {
		leftPressed = true; 
	}
}
function keyUpHandler(event) {
	if(event.keyCode == 39) {
		rightPressed = false; 
	} else if(event.keyCode == 37) {
		leftPressed = false; 
	}
}
setInterval(draw, 10);


// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();