function setup() {
    createCanvas(windowWidth, windowHeight);
    background("red");	
}


function mouseReleased() {
	background("red");
	ellipse(random(windowWidth), random(windowHeight), 50, 50);
	print("here we go again")
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
