//setting the variables for the paints (to use as a button later)
  let redX;
  let redY;
  let orangeX;
  let orangeY; 
  let yellowX;
  let yellowY;
  let greenX;
  let greenY;
  let blueX;
  let blueY;
  let purpleX;
  let purpleY;
  let pinkX;
  let pinkY;
  let r; 
  let g;
  let b;

  
function setup() { 
  song = loadSound("Golden.mp3", loaded);
  createCanvas(570, 570);
  //defining the variables using the center of the circle
  redX = 60;
  redY = 210;
  orangeX = 100;
  orangeY = 210; 
  yellowX = 140;
  yellowY = 210;
  greenX = 40;
  greenY = 250;
  blueX = 80;
  blueY = 250;
  purpleX = 120;
  purpleY = 250;
  pinkX = 160;
  pinkY = 250;

  
//music (Add at least one feature we did not explicitly go over in class)
function loaded(){
  song.loop();
  song.setVolume(3);
}
  
  //eraser button
  push();
  fill(191, 191, 191);
  rect(20, 100, 70, 45);
  pop();
  
  //canvas
  push();
  noStroke();
  fill(255);
  square(200, 100, 300);
  pop();
  
  //painting easel
  push();
  fill(193, 154, 107);
  rect(343, 80, 20, 20);
  rect(200, 400, 300, 30);
  //first leg (to the left)
  // a (1)  d (4)
  // b (2)  c (3)
  quad(320, 430, 280, 540, 310, 540, 350, 430);
  //second leg (to the right)
  //d (4)  a (1)
  //c (3)  b (2)
  quad(380, 430, 420, 540, 390, 540, 350, 430);
  pop();
  
  //in setup so it only runs once (not pixle-y)
  push();
  var context = canvas.getContext("2d");
  context.font = "16px Comic Sans MS";
  context.fillStyle = "black";
  
  context.fillText("Welcome to JavaPaint!", 10, 30);
  pop();
  
  push();
  context.font = "14px Comic Sans MS";
  context.fillStyle = "black";
  
  context.fillText("To select a color, click on it in the paint pallet. To use the eraser, click on it.", 10, 50);
  context.fillText("To change the brush size, click the corresponding letter key.", 10, 65);
  
  context.fillText("eraser", 32, 127);
  context.fillText("brush size:", 100, 90);
  context.fillText("small (s)", 100, 105);
  context.fillText("medium (m)", 100, 120);
  context.fillText("large (l)", 100, 135);
  context.fillText("extra large (x)", 100, 150);
  pop();
}

function draw() {

  //paint pallet:
  push();
  
  noStroke();
  //wood:
  push();
  fill(215, 195, 163);
  ellipse(100, 250, 170, 190);
  pop();
  
  //paint: 
  push();
  noStroke();
  //red
  fill(235, 68, 26);
  circle(60, 210, 25);
  
  //orange
  fill(247, 161, 69);
  circle(100, 210, 25);
  
  //yellow
  fill(250, 247, 70);
  circle(140, 210, 25);
  
  //green
  fill(160, 245, 118);
  circle(40, 250, 25);
  
  //blue
  fill(121, 180, 242);
  circle(80, 250, 25);
  
  //purple
  fill(176, 144, 240);
  circle(120, 250, 25);
  
  //pink
  fill(238, 160, 250);
  circle(160, 250, 25);
  pop();
  
//making the distance between the center of the color (the paint) a variable for each
  redDistance = dist(mouseX, mouseY, redX, redY);
  orangeDistance = dist(mouseX, mouseY, orangeX, orangeY);
  yellowDistance = dist(mouseX, mouseY, yellowX, yellowY);
  greenDistance = dist(mouseX, mouseY, greenX, greenY);
  blueDistance = dist(mouseX, mouseY, blueX, blueY);
  purpleDistance = dist(mouseX, mouseY, purpleX, purpleY);
  pinkDistance = dist(mouseX, mouseY, pinkX, pinkY);
  

//selecting the colors
  
//red
  if (mouseIsPressed){
  //if the mouse is on the circle
      if (redDistance < 12.5){
      //set the red, green, and blue variables to red
        r = (235);
        g = (68);
        b = (26);
    } 
  }

//orange
  if (mouseIsPressed){
  //if the mouse is on the circle
      if (orangeDistance < 12.5){
      //set the red, green, and blue variables to orange
        r = (247);
        g = (161);
        b = (69);
    }
  }
  
//yellow
  if (mouseIsPressed){
  //if the mouse is on the circle
      if (yellowDistance < 12.5){
      //set the red, green, and blue variables to yellow
        r = (250);
        g = (247);
        b = (9);
    }
  }

//green
  if (mouseIsPressed){
  //if the mouse is on the circle
      if (greenDistance < 12.5){
      //set the red, green, and blue variables to green
        r = (160);
        g = (245);
        b = (118);
    }
  }
 
//blue
  if (mouseIsPressed){
  //if the mouse is on the circle
      if (blueDistance < 12.5){
      //set the red, green, and blue variables to blue
        r = (121);
        g = (180);
        b = (242);
    }
  }
  
//purple
  if (mouseIsPressed){
  //if the mouse is on the circle
      if (purpleDistance < 12.5){
      //set the red, green, and blue variables to purple
        r = (176);
        g = (144);
        b = (240);
    }
  }
  
//pink
  if (mouseIsPressed){
  //if the mouse is on the circle
      if (pinkDistance < 12.5){
      //set the red, green, and blue variables pink
        r = (238);
        g = (160);
        b = (250);
    }
  }

//eraser
  if (mouseIsPressed){
  //if the mouse is on the square
      if (mouseX > 20 && mouseX < 90 && mouseY > 100 && mouseY < 145){
      //set the red, green, and blue variables to white
        r = (255);
        g = (255);
        b = (255);
    }
  } 


//canvas is domain = 200 to 500 and range = 100 to 400
  
if(keyIsPressed && mouseX > 200 && mouseX < 500 && mouseY > 100 && mouseY < 400) {
  if(key == 's'){
    fill(r,g,b); 
    ellipse(mouseX, mouseY, 9);
  } 
  
  else if (key == 'm'){
    fill(r,g,b); 
    ellipse(mouseX, mouseY, 18);
    } 
  
  else if (key == 'l'){
    fill(r,g,b); 
    ellipse(mouseX, mouseY, 27);
    } 
  
  else if (key == 'x'){
    fill(r,g,b); 
    ellipse(mouseX, mouseY, 36);
    } 
  
  else {
    fill(r,g,b); 
    ellipse(mouseX, mouseY, 12);
    }
  }

//standard brush- without size selection
if (mouseIsPressed){
  //if the mouse is on the circle
    if (mouseX > 200 && mouseX < 500 && mouseY > 100 && mouseY < 400){
        noStroke();
        fill(r,g,b); 
        ellipse(mouseX, mouseY, 12);
    }
}
  
indent(140, 330, 50, 90);

hole(75, 305, 30);

}

function indent (xI, yI, wI, hI){
  //makes the indent in the paint pallet
  fill(250, 250, 250);
  ellipse(xI, yI, wI, hI);
}

function hole (xH, yH, wH, hH){
  //makes the hole in the paint pallet
  fill(250, 250, 250);
  ellipse(xH, yH, wH, hH);
}
