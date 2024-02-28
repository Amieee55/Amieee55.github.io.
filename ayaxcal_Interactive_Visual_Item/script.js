let scary;
let isFlashing = false;
let monsteer;
let monsterSpeed;
let monoY = -100;
let click;
let buttonColor = "#FF0808";
let buttonY = 375;
let batteryOne = "#06FC3C";
let batteryTwo = "#06FC3C";
let batteryThree ="#06FC3C";
let batteryFour ="#06FC3C";
let lightColor = "#F9FFB8";
let transparency = 0;
let startTime = 0;
let isTiming = false;
let on = false;
let keyCount = 0;

function preload(){
  monsteer = loadImage("Monsteeer.png");
  click = createAudio("click.wav");
  scary = loadImage("BOO.jpg");
}
function setup(){
  createCanvas(640, 416);
  background(220);
  background("#D9D9D9");
  disPlay();
  flashLight();
  charge();
  tint(255, transparency);
}
function draw(){
  doorWay();
  mono();
}

function doorWay(){
  noStroke();
  fill("#000000");
  rect(220, 15, 189, 273);
  fill("#1D1D1D");
  rect(220, 285, 189, 17);
  fill("#FFF");
  quad(204, 6, 245, 15, 245, 300, 204, 315);
  quad(390, 15, 430, 6, 430, 315, 390, 300);
}
//Background display
function disPlay(){
  fill("#2E2C2C");
  rect(-1, 300, 642, 130);
  fill("#231E1E");
  rect(-1, 0, 162, 472);
  rect(479, 0, 162, 472);
}
//Flashlight
function flashLight(){
  fill("#141C43");
  rect(287, 330, 65, 20);
  rect(300, 350, 40, 80);
  //on & off
  fill(buttonColor);
  rect(313, 360, 15, 25);
  stroke(10);
  strokeWeight(1.05);
  fill("#2E2C2C");
  rect(313, buttonY, 15, 12.5);
  //light
  noStroke();
  fill(lightColor);
  ellipse(320, 335, 60, 5);
}
//battery
function charge(){
  fill("white");
  stroke("black");
  strokeWeight(2);
  stroke(150);
  rect(119.5, 40, 3, 5);
  fill("#FFFFFF");
  rect(30, 25, 87, 40);
  noStroke();
  //Battery Bars %
  fill(batteryOne); rect(35, 30, 17, 30); //Last bar %
  fill(batteryTwo); rect(55, 30, 17, 30); // 2 bars %
  fill(batteryThree); rect(75, 30, 17, 30); // 3 bars %
  fill(batteryFour); rect(95, 30, 17, 30); //Full Battery
}
//Monster
function mono(){
  //console.log(monoY);
  if (transparency === 0) {
    let movementSpeed = 20; // Adjust this value as needed
    let movementIncrement = movementSpeed/frameRate();
    monoY += movementIncrement;
  }
  image(monsteer, 230, monoY, 200 , 200);
  if(monoY >= 135){
    if (frameCount % 4 === 0) { //flashing speed
      isFlashing = !isFlashing;
    }
    if(isFlashing) {
      tint(148, 0, 211); // Dark purple color
    } else {
      tint(30, 0, 0); 
    }
    image(scary, -10, 0, 650, 440);
  }
}

function mousePressed(){
  if(mouseX > 310 && mouseX < 325 && mouseY > 372 && mouseY < 387){ 
    flashLight(buttonY = 360, buttonColor = "#06FC3C");
    setTimeout(function(){
      charge(batteryFour = "White");
    },1500);
    setTimeout(function(){
      charge(batteryThree = "White");
    },2000);
    setTimeout(function(){
      charge(batteryTwo = "White");
    },2500);
    setTimeout(function(){
      charge(batteryOne = "White");
      if(batteryOne === "white" && batteryTwo === "white" && batteryThree === "white" && batteryFour === "white"){
        startTime = millis();
        isTiming = true;
      }
    },3000);
    setup(transparency = 255);
    keyCount = 0;
    on = true;
    click.play();
  }else if(mouseX > 310 && mouseX < 325 && mouseY > 362 && mouseY < 372){
    isTiming = false;
    on = false;
    setup(transparency = 0);
    flashLight(buttonY = 375, buttonColor = "#FF0808", lightColor = "#F9FFB8");
    click.play();
  }
}

function keyPressed(){
  keyCount = keyCount + 1;
    if(transparency <= 1){
      if(keyCode === UP_ARROW && keyCount === 3){
        charge(batteryOne = "#FF0808");
      }else if(keyCode === UP_ARROW && keyCount === 6){
        charge(batteryOne = "#F4E802", batteryTwo = "#F4E802");
      } else if(keyCode === UP_ARROW && keyCount === 9){
        charge(batteryOne = "#06FC3C", batteryTwo = "#06FC3C", batteryThree = "#06FC3C");
      } else if(keyCode === UP_ARROW && keyCount === 12){
        charge(batteryOne = "#06FC3C", batteryTwo = "#06FC3C", batteryThree = "#06FC3C",batteryFour = "#06FC3C");
      }
    }
  }
//function mouseClicked(){print(mouseX, mouseY);}

