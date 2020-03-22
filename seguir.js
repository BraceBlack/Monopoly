const cvs = document.getElementById("seguir");
const ctx = cvs.getContext("2d");


var img = new Image();
img.src = "img/van.png";

const img_2 = new Image();
img_2.src = "img/van_2.jpg";

ctx.drawImage(img_2,0,0);

const ball = {
	x:cvs.width/2,
	y:cvs.height/2,
	radius:30,
	speed:15,
	velocityX:15,
	velocityY:15,
	color : "WHITE"
}

function drawRect(x,y,w,h,color) {
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
}

function drawText(text,x,y,color) {
	ctx.fillStyle = color;
	ctx.font= "45px fantasy";
	ctx.fillText(text,x,y);
}

function drawImage(img,x,y,w) {
	ctx.drawImage(img_2,x,y);
}

function drawImage(img,x,y,w) {
	ctx.drawImage(img,x,y);
}

function render() {
	drawRect(0,0, cvs.width, cvs.height, "WHITE");

	drawImage(img_2, 0, 0);

	drawImage(img, ball.x, ball.y, ball.radius);
}

function update() {
	ball.x += ball.velocityX;
	ball.y += ball.velocityY;

	if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
		ball.velocityY = -ball.velocityY;
	}
	if (ball.x + ball.radius > cvs.width || ball.x - ball.radius < 0) {
		ball.velocityX = -ball.velocityX;
	}
}


function game() {
	update();
	render();
}

const framePerSecond = 50;
setInterval(game, 1000/framePerSecond);


cvs.addEventListener("click",function() {
  
	alert("ganaste");
  
});
