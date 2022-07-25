
 let ellipsexPos = 250;
 let ellipseyPos = 250;
 let xDirection = 1;
 let yDirection = 1;
 let Scure = 10;
 let myXpos = 100;
 let myYpos = 250;

let xSpeed = 4;
let ySpeed = 4;
function setup() {
    createCanvas(500, 500);
    background(0);
    rectMode(CENTER);

}

function draw() {
    background(0); 
    fill(247, 247, 247);
    rect(myXpos, myYpos, 50, 50); // Player 
    fill(0, 255, 0);
    ellipse(ellipsexPos, ellipseyPos, 30, 30);

    ellipsexPos += xSpeed * xDirection;
    ellipseyPos += ySpeed * yDirection; 
    

    if (keyIsDown(UP_ARROW) && myYpos > 25) { 
        myYpos -= 3;
    }

    if (keyIsDown(DOWN_ARROW) && myYpos < 475) {
        myYpos += 3; 
    } 

    if( ellipsexPos > 485 || ellipsexPos < 15) { 
        xDirection *= -1; 
        
    } 

   myLeft = myXpos - 25;
   myRight = myXpos + 25;
   myTop = myYpos - 25;
   myBottom = myYpos + 25;
 
   enemyLeft = ellipsexPos - 20;
   enemyRight = ellipsexPos + 20;
   enemyTop = ellipseyPos - 20;
   enemyBottom = ellipseyPos + 20;

   fill(255, 255, 255);
   textSize(30);
   text("Remaining Score: " + Scure, 50, 50);
  

    if (ellipseyPos > 485 || ellipseyPos < 15) {
        yDirection *= -1; 
      
    }

    if(ellipsexPos < 15) {
        yDirection *= -1;
        Scure--;
    }
        if (Scure == 0) {
              // I don't know how to make the text stay
        }
    //Collision Detection has mostly been fixed
    if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {

    }
    
    else {
        xDirection *= -1;
    }
    
    

    
}
