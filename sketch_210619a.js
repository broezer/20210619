// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400, 400);
  c1 = color(2, 10 , 10);
  c2 = color(40, 80, 150);
 
  setGradient(0, 0, width, height, c2, c1, Y_AXIS);
  image(pg,  0 , 0, width, height);
  
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      let x = ((width/100) * 3.5) + (i * width/10);
      let y = ((width/100) * 3.5) + (j * width/10);
      let w = width/30;
      noStroke();
      fill(240);
      rectMode(CENTER);
      
      //rotate(PI/3);
      quad((x+w)-(w/10),y, x ,y+w ,x + (w/10), y+w, x+w, y )
      quad(x,y, (x+w)-(w/10) ,y+w , x + w, y+w, x+(w/10), y )
    }
  }
  
  //save("20210618.png");
  
}

function draw() {
}

function setGradient(x, y, w, h, c1, c2, axis) {
  pg.noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      pg.stroke(c);
      pg.line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      pg.stroke(c);
      pg.line(i, y, i, y + h);
    }
  }
}
