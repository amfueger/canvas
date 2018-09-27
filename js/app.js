const canvas = document.getElementById('my-canvas');

//this is our canvas
const ctx = canvas.getContext('2d');
//the context is what you actually draw on.
/*******You always need the above!*******/
//Let's draw a line
function makeX() { 
	//Line will be here
	ctx.beginPath();
	//start here
	ctx.moveTo(300,300);
	//end here
	ctx.lineTo(100,100);
	//Draw
	ctx.stroke();
	ctx.closePath();
}
makeX();

function grid() {
	//make a grid where there are 49 pixels between each line
	//hint use a for loop
	for(let i = 0; i < canvas.width; i+=50) {
			ctx.beginPath();
			ctx.moveTo(i,0);
			ctx.lineTo(i,canvas.height);
			ctx.stroke();
			ctx.moveTo(0,i);
			ctx.lineTo(canvas.width,i);
			ctx.stroke();
		
	}
	ctx.closePath();
}

grid();


//let's make a rectangle
function drawRectangle() {
	ctx.beginPath();

	//this is the method for rectangles of any shape

	//takes four parameters, here they are in order
	//1 x coord of the upper left hand corner of the rectangle
	//2 y cord of the uppder left hand corner of the rectangle
	//3 width
	//4 height

	ctx.rect(300, 300, 80, 180);
	//fillstyle set the color property of ctx obj
	ctx.fillStyle = "blue";
	//often for shapes we fill instead of stroke
	ctx.fill()
	ctx.closePath();

	ctx.beginPath();
	ctx.rect(380, 480, 100, 100);
	ctx.strokeStyle = "red"
	ctx.stroke();
	ctx.closePath();

}
drawRectangle();


const captSquare = {
	xAxis: 100,
	yAxis: 100,
	height: 100,
	width: 100,
	draw() {
		ctx.beginPath();
		ctx.rect(this.xAxis, this.yAxis, this.height, this.width);
		ctx.fillStyle = "blue"
		ctx.stroke();
		ctx.closePath();
	}
}
captSquare.draw();


//let's make a circle

ctx.beginPath();

// to draw a circle, use .arc() ---  params are of a different nature
// x: the x coordinate of the center of the circle
// y: the y coord of the Cneter of the circle
//radius
//e: --- just always set this to zero
//how much of the circle you want to actually draw in RADIANS (note 2PI radians is 360 degrees)
ctx.arc(75, 525, 71, 3, Math.PI * 2)
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

