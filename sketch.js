//https://www.youtube.com/watch?v=0jjeOYMjmDU

var angle = 0
var s1;
let sketch;
function setup() {
  sketch = createCanvas(700, 700);
  sketch.parent("p5");
  s1 = createSlider(0, TWO_PI, PI / 9, 0.01);
  s1.parent("p5");
}

function draw() {
  background(255);
  fill(255, 45, 78, 100);
  angle = s1.value();
  translate(400, 400);
  stroke(0);
  branch(30);
  //stroke(0)
  //branch(70);
  stroke(0);
  branch(103);
  
}

function branch(len) {
  ellipse(0, 10, 30, -len);
  translate(-len, -20);
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