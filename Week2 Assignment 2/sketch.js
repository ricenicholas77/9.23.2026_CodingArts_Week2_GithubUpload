
let d = 30;

function setup() {
  createCanvas(400, 400);
  background(220);
  fill(56,97,105);
  rect(50,100,300,200);
}


let x= 150; let y = 200;
let dx = 1; let dy = 1;

function draw() {
  stroke(255);
  fill(255,0,0);
  circle(x,y,d);
  x = x + dx;
  y = y + dy;
  bounce();
  
}

function bounce(){
  if (x <= 50+(d/2) || x + 50+(d/2) >= width){
    dx = dx*-1;
  }
  
  if (y <= 100 + (d/2) || y + 100 + (d/2) >= height){
    dy = dy*-1;
  }
}
