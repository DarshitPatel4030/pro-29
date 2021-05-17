function setup() {
  createCanvas(1200,700);
b1=new Box(300,400,30,30)


}

function draw() {
  background(0,255,63);  
  drawSprites();
  b1.display();
}