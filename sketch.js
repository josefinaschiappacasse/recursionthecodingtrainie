//https://www.youtube.com/watch?v=0jjeOYMjmDU

var angle = 0
var s1;

function setup() {
  createCanvas(400, 400);
  s1 = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(0);
  angle = s1.value();
  stroke(0);
  translate(200, height);
  stroke(255);
  branch(30);
  stroke(255)
  branch(70);
  stroke("pink");
  branch(103);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) { 
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
  
}
