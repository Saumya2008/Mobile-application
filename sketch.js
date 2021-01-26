var gameState = "start";
var textImg, text;
var arrow, arrowImg,arrow2,arrow2_Img;
var Safety,SafetyImg;
var helpline,helpline_Img;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
var Condition1,Condition1_Img,Condition2,Condition2_Img,Condition3,Condition3_Img,Condition4,Condition4_Img
,Condition5,Condition5_Img;
var Rule1,rule1_Img,Pic1_Img,Pic1,heading_Img;
var Rule2,Rule2_Img;
var Child_Safety1,Child_Safety1_Img,Child_Safety2,Child_Safety2_Img,Child_Safety3,Child_Safety3_Img,
Child_Safety4,Child_Safety4_Img;
var Page3,Page3_Img,cycle,cycle_Img;
var arrow3,arrow3_Img;
var driving_Safety,driving_Safety_Img,rain_bg,car_Safety1,car_Safety1_Img,Driving_Safety2,Driving_Safety2_Img;
var helpline_nos,helpline_nos_Img;
var grey_bg;
var driving_Safety3,driving_Safety3_Img,driving_Safety4,driving_Safety4_Img,driving_Safety5,driving_Safety5_Img;
var driving_pic_Img,driving_pic,safetyInfo1,safetyInfo1_Img,safetyInfo2,safetyInfo2_Img;
var sign_board,sign_board_Img;

function preload(){
  // loading images here
  textImg = loadImage("Bg.png")
  arrowImg = loadImage("Arrow.png")
  //SafetyImg = loadImage("Safety.png");
  helpline_Img = loadImage("Helpline.png");
  helpline_nos_Img = loadImage("Delhi_Police.png");
  Condition1_Img = loadImage("Condition1.png");
  Condition2_Img = loadImage("Condition2.png");
  Condition3_Img = loadImage("Condition3.png");
  Condition4_Img = loadImage("Condition4.png");
  Condition5_Img = loadImage("Condition5.png");
  rule1_Img = loadImage("Page1.png");
  Pic1_Img = loadImage("Pic1.jpg");
  heading_Img = loadImage("Heading.png");
  Rule2_Img = loadImage("Page2.png");
  arrow2_Img = loadImage("Home.png");
  Child_Safety4_Img = loadImage("Child_Safety4.jpg");
  Page3_Img = loadImage("Page3.png");
  cycle_Img = loadImage("Cycle.png");
  driving_Safety_Img = loadImage("Driving Safety2.png");
  rain_bg = loadImage("Rain_bg.png");
  arrow3_Img = loadImage("Arrow3.png");
  car_Safety1_Img = loadImage("Driving_Page1.png");
  grey_bg = loadImage("Next_bg.jpg");
  Driving_Safety2_Img = loadImage("Driving Safety1.png");
  driving_Safety3_Img = loadImage("Driving Safety3.png");
  driving_Safety4_Img = loadImage("Driving Safety4.png");
  driving_Safety5_Img = loadImage("Driving Safety5.png");
  driving_pic_Img = loadImage("Driving-laws Pic.jpg");
  safetyInfo1_Img = loadImage("Information_1.png");
  safetyInfo2_Img = loadImage("Information_2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // text = createSprite(150,250);
  // text.addImage(textImg);
  // text.visible = true

   arrow = createSprite(width-50,height-70);
   arrow.addImage(arrowImg);
   arrow.scale = 0.13;
   arrow.visible = true

   arrow2 = createSprite(width-1300,height-50);
   arrow2.addImage(arrow2_Img);
   arrow2.scale = 0.1;
   arrow2.visible = false

   //arrow3 = createSprite(100,450);
   //arrow3.addImage(arrow3_Img);
   //arrow3.scale = 0.05; 
   //arrow3.visible = false

   helpline_nos = createSprite(width,height);
   helpline_nos.addImage(helpline_nos_Img);
   helpline_nos.scale = 0.55
   helpline_nos.visible = false

   line1 = createSprite(300,100,600,3);
   line1.visible = false  
   line2 = createSprite(300,150,600,3); 
   line2.visible = false
   line3 = createSprite(300,200,600,3);
   line3.visible = false  
   line4 = createSprite(300,250,600,3);
   line4.visible = false  
   line5 = createSprite(300,300,600,3);
   line5.visible = false
   line6 = createSprite(width-5,height-300,10,800);
   line6.shapeColor = 0;
   line6.visible = false
   line7 = createSprite(width-1361,height-300,10,800);
   line7.shapeColor = 0;
   line7.visible = false
   line8 = createSprite(width-300,height-652,2300,10);
   line8.shapeColor = 0;
   line8.visible = false
   line9 = createSprite(width-300,height-5,2300,10);
   line9.shapeColor = 0;
   line9.visible = false
   line10 = createSprite(width-710,height-600,200,1000);
   line10.shapeColor ="Darkblue";
   line10.visible = false
   line10.addImage(heading_Img);
   line10.scale = 1.5
   
   Condition1 = createSprite(width-710,height-500,200,1000);
   Condition1.addImage(Condition1_Img);
   Condition1.scale = 1.3
   Condition1.visible = false
   Condition2 = createSprite(width-710,height-410);
   Condition2.addImage(Condition2_Img);
   Condition2.scale = 1.3
   Condition2.visible = false
   Condition3 = createSprite(width-710,height-320);
   Condition3.addImage(Condition3_Img);
   Condition3.scale = 1.3
   Condition3.visible = false
   Condition4 = createSprite(width-710,height-230);
   Condition4.addImage(Condition4_Img);
   Condition4.scale = 1.3
   Condition4.visible = false
   Condition5 = createSprite(width-710,height-140);
   Condition5.addImage(Condition5_Img);
   Condition5.scale = 1.3
   Condition5.visible = false

   Pic1 = createSprite(200,100,100,100);
   Pic1.addImage(Pic1_Img);
   Pic1.scale = 0.3
   Pic1.visible = false

   helpline = createSprite(width-710,height-50);
   helpline.addImage(helpline_Img);
   helpline.scale = 0.4
   helpline.visible = false

   Rule1 = createSprite(150,300,100,100);
   Rule1.addImage(rule1_Img);
   Rule1.scale = 0.9;
   Rule1.visible = false

   Rule2 = createSprite(150,200);
   Rule2.addImage(Rule2_Img);
   Rule2.scale = 0.7
   Rule2.visible = false

   Page3 = createSprite(150,300);
   Page3.addImage(Page3_Img);
   Page3.scale = 0.9
   Page3.visible = false

   car_Safety1 = createSprite(150,300);
   car_Safety1.addImage(car_Safety1_Img);
   car_Safety1.scale = 1;
   car_Safety1.visible = false

   cycle = createSprite(100,90);
   cycle.addImage(cycle_Img);
   cycle.scale = 0.8
   cycle.visible = false

   driving_Safety = createSprite(150,50);
   driving_Safety.addImage(driving_Safety_Img);
   driving_Safety.scale =0.8
   driving_Safety.visible = false

   Driving_Safety2 = createSprite(150,110);
   Driving_Safety2.addImage(Driving_Safety2_Img);
   Driving_Safety2.scale = 0.8
   Driving_Safety2.visible = false

   driving_Safety3 = createSprite(150,170);
   driving_Safety3.addImage(driving_Safety3_Img);
   driving_Safety3.scale = 0.8
   driving_Safety3.visible = false

   driving_Safety4 = createSprite(150,230);
   driving_Safety4.addImage(driving_Safety4_Img);
   driving_Safety4.scale = 0.8
   driving_Safety4.visible = false

   driving_Safety5 = createSprite(150,290);
   driving_Safety5.addImage(driving_Safety5_Img);
   driving_Safety5.scale = 0.8
   driving_Safety5.visible = false

   driving_pic = createSprite(150,400);
   driving_pic.addImage(driving_pic_Img);
   driving_pic.scale = 1.01
   driving_pic.visible = false
      
   safetyInfo1 = createSprite(150,250);
   safetyInfo1.addImage(safetyInfo1_Img);
   safetyInfo1.scale = 0.9
   safetyInfo1.visible = false
   safetyInfo2 = createSprite(150,250);
   safetyInfo2.addImage(safetyInfo2_Img);
   safetyInfo2.scale = 0.9
   safetyInfo2.visible = false
   
   Child_Safety4 = createSprite(150,250);
   Child_Safety4.addImage(Child_Safety4_Img);
   Child_Safety4.scale = 0.4;
   Child_Safety4.visible = false  
      
  }

function draw() {
background(textImg);

if(gameState === "start"){
    background(textImg); 
  }
  else if(gameState === "play"){
    background(grey_bg);
    mousePressedOver();
   
  }
  else if(gameState === "continue"){
    background("yellow");
  }
  if((touches.length > 0) || mousePressedOver(arrow)) {
    nextPage(); 
    touches = [];
 }
  if((touches.length > 0 ) || mousePressedOver(Condition1)){
    First_rule();
    touches = [];
  }
  if((touches.length > 0 ) || mousePressedOver(Condition2)){
   Second_rule();
   touches = [];
 }
 if((touches.length > 0 ) || mousePressedOver(Condition3)){
   Third_rule();
   touches = [];
 }
 if((touches.length > 0 ) || mousePressedOver(Condition4)){
   fourth_rule();
   touches = [];
 }
 if((touches.length > 0 ) || mousePressedOver(Condition5)){
   fifth_rule();
   touches = [];
 }
 if((touches.length > 0 ) || mousePressedOver(arrow2)){
   Homepage();
   touches = [];
 }
 if((touches.length > 0 ) || mousePressedOver(driving_Safety)){
   arrow3_page();
   touches = [];
 }
 if((touches.length > 0 ) || mousePressedOver(helpline)){
   helpline_numbers();
   touches = [];
 }

  if(mousePressedOver(arrow)){
    nextPage();  
    gameState = "play";
  }
  if(mousePressedOver(Condition1)){
    First_rule();
  }
  if(mousePressedOver(Condition2)){
    Second_rule();
  }
  if(mousePressedOver(arrow2)){
    Homepage();
  }
  if(mousePressedOver(Condition3)){
    Third_rule();

  }
  if(mousePressedOver(Condition4)){
    fourth_rule();
  }
  if(mousePressedOver(Condition5)){
    fifth_rule();
  }
  if(mousePressedOver(driving_Safety)){
  arrow3_page();
  }
  if(mousePressedOver(helpline)){
    helpline_numbers();
  }
  

  drawSprites();
}
function nextPage(){
  //Safety.visible = false
   text.visible = false
  arrow.visible = false
  Condition1.visible = true
  Condition2.visible = true
  Condition3.visible = true
  Condition4.visible = true
  Condition5.visible = true
  line6.visible = true
  line7.visible = true
  line8.visible = true
  line9.visible = true
  line10.visible = true
  helpline.visible = true 
}

function First_rule(){
  //background("lightblue");
  Pic1.visible = true
  Condition1.visible = false
  Condition2.visible = false
  Condition3.visible = false
  Condition4.visible = false
  Condition5.visible = false
  line10.visible = false
  Rule1.visible = true
  arrow2.visible = true
  helpline.visible = false
  safetyInfo1.visible = false
  safetyInfo2.visible = false
}

function Second_rule(){
  Condition1.visible = false
  Condition2.visible = false
  Condition3.visible = false
  Condition4.visible = false
  Condition5.visible = false
  Rule2.visible = true
  line10.visible = false
  arrow2.visible = true
  helpline.visible = false
  safetyInfo2.visible = false
}
function Homepage(){
 text.visible = false
  arrow.visible = false
  Condition1.visible = true
  Condition2.visible = true
  Condition3.visible = true
  Condition4.visible = true
  Condition5.visible = true
  line6.visible = true
  line7.visible = true
  line8.visible = true
  line9.visible = true
  line10.visible = true
  arrow2.visible = false
  Rule2.visible = false
  Pic1.visible = false
  Rule1.visible = false
  Page3.visible = false
  arrow2.visible = false
  cycle.visible = false
  driving_Safety.visible = false
  arrow2.visible = false
  car_Safety1.visible = false   
  Driving_Safety2.visible = false
  driving_Safety3.visible = false
  driving_Safety4.visible = false
  driving_pic.visible = false
  helpline_nos.visible = false
  Child_Safety4.visible = false
  helpline.visible = true
  safetyInfo1.visible = false
  safetyInfo2.visible = false
}

function Third_rule(){
  arrow2.visible = true
  Condition1.visible = false
  Condition2.visible = false
  Condition3.visible = false
  Condition4.visible = false
  Condition5.visible = false
  line10.visible = false
  Child_Safety4.visible = true
  helpline.visible = false
  line6.visible = false
  line7.visible = false
  line8.visible = false
  line9.visible = false
  safetyInfo2.visible = false
}
function fourth_rule(){
    Condition1.visible = false
    Condition2.visible = false
    Condition3.visible = false
    Condition4.visible = false
    Condition5.visible = false
    line10.visible = false
    Page3.visible = true
    arrow2.visible = true
    cycle.visible = true
    helpline.visible = false
    safetyInfo2.visible = false
}
function fifth_rule(){
  Condition1.visible = false
  Condition2.visible = false
  Condition3.visible = false
  Condition4.visible = false
  Condition5.visible = false
  line10.visible = false
  safetyInfo2.visible = true
  arrow2.visible = true
  helpline.visible = false
  line6.visible = false
  line7.visible = false
  line8.visible = false
  line9.visible = false
  //arrow3.visible = true
}
function arrow3_page(){
  Condition1.visible = false
  Condition2.visible = false
  Condition3.visible = false
  Condition4.visible = false
  Condition5.visible = false
  line10.visible = false
  driving_Safety.visible = false
  Driving_Safety2.visible = false
  driving_Safety3.visible = false
  driving_Safety4.visible = false
  driving_pic.visible = false
  car_Safety1.visible = true
  //arrow3.visible = false
  arrow2.visible = true 
  helpline.visible = false
  safetyInfo2.visible = false
}
function helpline_numbers(){
  Condition1.visible = false
  Condition2.visible = false
  Condition3.visible = false
  Condition4.visible = false
  Condition5.visible = false
  line10.visible = false
  driving_Safety.visible = false
  Driving_Safety2.visible = false
  driving_Safety3.visible = false
  driving_Safety4.visible = false
  driving_pic.visible = false
  helpline_nos.visible = true
  helpline.visible = false
  arrow2.visible = true
  safetyInfo2.visible = false
}
function is_touch_enabled() { 
  return ( 'ontouchstart' in window ) ||  
         ( navigator.maxTouchPoints > 0 ) ||  
         ( navigator.msMaxTouchPoints > 0 ); 
} 