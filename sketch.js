//Quick visualization of how to estimate Pi
//using only random floats from 0 to 1 and 
//basic geometry.

//Made for Pi day 2022

let totalPoints = 0;
let circlePoints = 0;

//sets how many points to use in estimate
const maxPoints = 5000;

//Arrays hold the previous points so each 
//draw() call doesn't erase the previous points
let globalX = [];
let globalY = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //draw the arc of the circle
  arc(0,400, 800, 800, -PI / 2, 0);
  
  //add a point until the estimation limit is reached
  if(totalPoints < maxPoints){
    addPoint();
  }else{
    noLoop();
  }
  
  //plot all the current points
  for(let i = 0; i < totalPoints; i++){
    point(globalX[i], globalY[i]);
  }
  strokeWeight(5);
  
  //Adds the text in the top left
  rect(0,0, 200, 50, 0);
  let currentEstimate = (4 * (circlePoints/totalPoints)).toFixed(7); 
    text("Total Points: " + totalPoints + " || In Circle: " + circlePoints + "\nCurrent Estimation of Pi: " + currentEstimate,0,10, 300, 50);
  //fill(10);
}

function addPoint(){
  //generates the random points
  let x_val = random(0,1);
  let y_val = random(0,1);
  
  //adds the point to the array
  globalX.push(x_val*400);
  globalY.push(y_val*400);
  
  //checks if the point is in the arc or not
  let dist = sqrt(sq(x_val) + sq(y_val));
  totalPoints++;
  
  if(dist <= 1){
    circlePoints++;
  }
}