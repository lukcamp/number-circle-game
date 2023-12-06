let r, g, b;
let mode = -1;
let xpos, ypos;
let value;
let start = 100;
let data;
let error;
let random_num = [0];

function setup() {
  createCanvas(400, 400);
  r, g, b = 0;
  r_small = 0;
  r = 0;
  data = [0];
  error = [0];
  start = Date.now();
}

function rand(){
  random_num[0] = int(random(10,14));
  for (let i = 1; i < 25; i++){
    random_num[i] = int(random(15,99));
  }
  /*
  let temp;
  let lowest = 0;
  for (let i = 0; i < 25; i++){
    random_num[i] = int(random(1,99));
    lowest = min(random_num);
    if (lowest != 0){
      temp = lowest;
      index = i;
      random_num[i]++;
      lowest = 0;
    }
  }
  random_num[0] = temp;
  */
}

//===== Coordinates for positions ======//
var xpos_text = [
  [200, 200, 200],
  [200, 200, 200],
  [200, 200, 200]
]

var ypos_text = [
  [100, 200, 300],
  [200, 300, 100],
  [300, 100, 200]
]

var xpos_3 = [
  [100, 200, 300],
  [100, 200 , 300],
  [100, 200, 300]
]

var ypos_3 = [
  [200, 200, 200],
  [200, 200, 200],
  [200, 200, 200]
]

var xpos_5 = [
  [50, 150, 250, 100, 200],
  [250, 150, 50, 100, 200],
  [100, 150, 250, 50, 200],
]

var xpos_text5 = [
  [50, 150, 250, 100, 200],
  [250, 150, 50, 100, 200],
  [100, 150, 250, 50, 200],
]

var ypos_text5 = [
   [150, 150, 150, 275, 275],
  [150, 150, 150, 275, 275],
  [275, 150, 150, 150, 275]
]

var ypos_5 = [
  [150, 150, 150, 275, 275],
  [150, 150, 150, 275, 275],
  [275, 150, 150, 150, 275]
]

var xpos_9 = [
  [100,200,300,100,200,300,100,200,300],
  [300,200,300,100,200,100,100,200,300],
  [300,200,100,100,200,300,100,200,300]
]

var ypos_9 = [
  [100,100,100,200,200,200,300,300,300],
  [200,100,100,200,200,100,300,300,300],
  [100,100,100,200,200,200,300,300,300]
]

var xpos_25 = [
[333,133,200,266,333,67,133,200,266,67,67,133,200,266,333,67,133,200,266,333,67,133,200,266,333],
[200,133,200,266,333,67,133,200,266,333,67,133,200,266,333,67,133,200,266,333,67,133,67,266,333],
[333,133,200,266,333,67,133,200,266,333,67,133,200,266,333,67,133,200,266,67,67,133,200,266,333]
]

var ypos_25 = [
  [133,67,67,67,67,133,133,133,133,67,200,200,200,200,200,266,266,266,266,266,333,333,333,333,333],
  [333,67,67,67,67,133,133,133,133,133,200,200,200,200,200,266,266,266,266,266,333,333,67,333,333],
  [266,67,67,67,67,133,133,133,133,133,200,200,200,200,200,266,266,266,266,67,333,333,333,333,333]
  
]
//======================================//


function draw() {
  background(127);
  //line(100, 150, 100, 100);
  //mode = 23
  switch(mode){
    /*Case 0-2: 3 circles
      Case 3-5: 5 circles  
      Case 6-8: 9 circles
      Case 9-11: 25 circles
    */
    case -1:
      background(200);
      //textSize(24);
      fill(0);
      xpos = xpos_text[0];
      ypos = ypos_text[0];
      r_small = 200;
      textAlign(CENTER);
      textSize(18);
      text("Click here to start", xpos[0], ypos[0], r_small, r_small);

      break;

    case 0:
      background(200)
      fill(0);
      xpos = xpos_text[0];
      ypos = ypos_text[0];
      r_small = 75;
      r = r_small;

      stroke(255);
      t1 = text("75", xpos[0], ypos[0], r_small, r_small);
      t2 = text("90", xpos[1], ypos[1], r, r);
      t3 = text("100", xpos[2], ypos[2], r, r);

      break;
      
    case 1:
      background(200)
      fill(0);
      xpos = xpos_text[1];
      ypos = ypos_text[1];
      r_small = 75;
      r = r_small;
      
      background(200)
      t1 = text("10", xpos[0], ypos[0], r_small, r_small);
      t2 = text("45", xpos[1], ypos[1], r, r);
      t3 = text("21", xpos[2], ypos[2], r, r);
      break;
      
    case 2:
      background(200)
      xpos = xpos_text[2];
      ypos = ypos_text[2];
      r_small = 75;
      r = r_small;
      
      stroke(255)
      t1 = text("9", xpos[0], ypos[0], r_small, r_small);
      t2 = text("30", xpos[1], ypos[1], r, r);
      t3 = text("19", xpos[2], ypos[2], r, r);

      break;
      
    case 3:
      background(200)
      xpos = xpos_text5[0];
      ypos = ypos_text5[0];
   
      r_small = 75;
      r = r_small;
    
      stroke(255)
      t1 = text("12", xpos[0], ypos[0], r_small, r_small);
      t2 = text("30", xpos[1], ypos[1], r, r);
      t3 = text("19", xpos[2], ypos[2], r, r);
      t4 = text("45", xpos[3], ypos[3], r, r);
      t5 = text("53", xpos[4], ypos[4], r, r);

      break;
      
    case 4:
      background(200)
      xpos = xpos_text5[1];
      ypos = ypos_text5[1];
      
      r_small = 75;
      r = r_small;
      
      stroke(255)
      t1 = text("14", xpos[0], ypos[0], r_small, r_small);
      t2 = text("90", xpos[1], ypos[1], r, r);
      t3 = text("58", xpos[2], ypos[2], r, r);
      t4 = text("16", xpos[3], ypos[3], r, r);
      t5 = text("20", xpos[4], ypos[4], r, r);

      break;
      
    case 5:
      background(200)
      xpos = xpos_text5[2];
      ypos = ypos_text5[2];
      
      r_small = 75;
      r = r_small;
      
      stroke(255)
      t1 = text("36", xpos[0], ypos[0], r_small, r_small);
      t2 = text("90", xpos[1], ypos[1], r, r);
      t3 = text("70", xpos[2], ypos[2], r, r);
      t4 = text("45", xpos[3], ypos[3], r, r);
      t5 = text("51", xpos[4], ypos[4], r, r);

      break;
      
    case 6:
      background(200)
      xpos = xpos_9[0];
      ypos = ypos_9[0];
      r_small = 75;
      r = r_small;
      
      stroke(255)
      t1 = text("50", xpos[0], ypos[0], r_small, r_small);
      t2 = text("60", xpos[1], ypos[1], r, r);
      t3 = text("75", xpos[2], ypos[2], r, r);
      t4 = text("65", xpos[3], ypos[3], r, r);
      t5 = text("80", xpos[4], ypos[4], r, r);
      t6 = text("62", xpos[5], ypos[5], r, r);
      t7 = text("64", xpos[6], ypos[6], r, r);
      t8 = text("55", xpos[7], ypos[7], r, r);
      t9 = text("69", xpos[8], ypos[8], r, r);

      break;
      
    case 7:
      background(200)
      xpos = xpos_9[1];
      ypos = ypos_9[1];
      
      r_small = 75;
      r = r_small;
      
      stroke(255)
      t1 = text("20", xpos[0], ypos[0], r_small, r_small);
      t2 = text("30", xpos[1], ypos[1], r, r);
      t3 = text("35", xpos[2], ypos[2], r, r);
      t4 = text("27", xpos[3], ypos[3], r, r);
      t5 = text("40", xpos[4], ypos[4], r, r);
      t6 = text("33", xpos[5], ypos[5], r, r);
      t7 = text("25", xpos[6], ypos[6], r, r);
      t8 = text("50", xpos[7], ypos[7], r, r);
      t9 = text("45", xpos[8], ypos[8], r, r);

      break;
      
    case 8:
      background(200)
      xpos = xpos_9[2];
      ypos = ypos_9[2];
      
      r_small = 75;
      r = r_small;
      
      stroke(255)
      t1 = text("45", xpos[0], ypos[0], r_small, r_small);
      t2 = text("50", xpos[1], ypos[1], r, r);
      t3 = text("55", xpos[2], ypos[2], r, r);
      t4 = text("60", xpos[3], ypos[3], r, r);
      t5 = text("70", xpos[4], ypos[4], r, r);
      t6 = text("66", xpos[5], ypos[5], r, r);
      t7 = text("54", xpos[6], ypos[6], r, r);
      t8 = text("59", xpos[7], ypos[7], r, r);
      t9 = text("68", xpos[8], ypos[8], r, r);
      
      break;
      
    case 9:
      background(200);
      xpos = xpos_25[0];
      ypos = ypos_25[0];
      value = random_num;
      
      r_small = 75;
      r = r_small;
      
      stroke(255)
      t0 = text(value[0], xpos[0], ypos[0], r_small, r_small);
      for (let j = 1; j < 25; j++){
        text(value[j], xpos[j], ypos[j], r, r);
      }
      /*
      t2 = text(value[1], xpos[1], ypos[1], r, r);
      t3 = text(value[2], xpos[2], ypos[2], r, r);
      t4 = text(value[3], xpos[3], ypos[3], r, r);
      t5 = text(value[4], xpos[4], ypos[4], r, r);
      t6 = text(value[5], xpos[5], ypos[5], r, r);
      t7 = text(value[6], xpos[6], ypos[6], r, r);
      t8 = text(value[7], xpos[7], ypos[7], r, r);
      t9 = text(value[8], xpos[8], ypos[8], r, r);
      t10 = text(value[9],xpos[9], ypos[9], r, r);
      t11 = text(value[10],xpos[10], ypos[10], r, r);
      t12 = text(value[11],xpos[11], ypos[11], r, r);
      t13 = text(value[12],xpos[12], ypos[12], r, r);
      t14 = text(value[13],xpos[13], ypos[13], r, r);
      t15 = text(value[14],xpos[14], ypos[14], r, r);
      t16 = text(value[15],xpos[15], ypos[15], r, r);
      t17 = text(value[16],xpos[16], ypos[16], r, r);
      t18 = text(value[17],xpos[17], ypos[17], r, r);
      t19 = text(value[18],xpos[18], ypos[18], r, r);
      t20 = text(value[19],xpos[19], ypos[19], r, r);
      t21 = text(value[20],xpos[20], ypos[20], r, r);
      t22 = text(value[21],xpos[21], ypos[21], r, r);
      t23 = text(value[22],xpos[22], ypos[22], r, r);
      t24 = text(value[23],xpos[23], ypos[23], r, r);
      t25 = text(value[24],xpos[24], ypos[24], r, r);
      */
      break;
      
    case 10:
      background(200);
      xpos = xpos_25[1];
      ypos = ypos_25[1];
      value = random_num;
      
      r_small = 50;
      r = r_small;
      
      stroke(255)
      
      t0 = text(value[0], xpos[0], ypos[0], r_small, r_small);
      for (let j = 1; j < 25; j++){
        text(value[j], xpos[j], ypos[j], r, r);
      }
      
      break;

    case 11:
      background(200);
      xpos = xpos_25[2];
      ypos = ypos_25[2];
      value = random_num;
      
      r_small = 50;
      r = r_small;
    
      stroke(255)
      t0 = text(value[0], xpos[0], ypos[0], r_small, r_small);
      for (let j = 1; j < 25; j++){
        text(value[j], xpos[j], ypos[j], r, r);
      }
      
      
      break;
    case 12:
      fill(255, 255, 255);
      xpos = xpos_3[0];
      ypos = ypos_3[0];
      r_small = 50;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 90);
      c3 = circle(xpos[2], ypos[2], 100);

      break;

    case 13:
      fill(255,255,255);
      xpos = xpos_3[1];
      ypos = ypos_3[1];
      r_small = 9;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 30);
      c3 = circle(xpos[2], ypos[2], 19);
      
      fill(r, g, b);
      
      break;

    case 14:


      fill(255,255,255);
      xpos = xpos_5[2];
      ypos = ypos_5[2];
      r_small = 12;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 30);
      c3 = circle(xpos[2], ypos[2], 19);
      c4 = circle(xpos[3], ypos[3], 45);
      c5 = circle(xpos[4], ypos[4], 53);
      
      fill(r, g, b);
      break;

    case 15:


      fill(255,255,255);
      xpos = xpos_5[0];
      ypos = ypos_5[0];
      r_small = 14;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 90);
      c3 = circle(xpos[2], ypos[2], 58);
      c4 = circle(xpos[3], ypos[3], 16);
      c5 = circle(xpos[4], ypos[4], 20);
      
      fill(r, g, b);
      break;

    case 16:
      fill(255,255,255);


      xpos = xpos_5[1];
      ypos = ypos_5[1];
      r_small = 36;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 90);
      c3 = circle(xpos[2], ypos[2], 70);
      c4 = circle(xpos[3], ypos[3], 45);
      c5 = circle(xpos[4], ypos[4], 51);
      
      fill(r, g, b);
      break;

    case 17: //Extra n5 for Circles??
      fill(255,255,255);
      xpos = xpos_5[2];
      ypos = ypos_5[2];
      r_small = 60;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 70);
      c3 = circle(xpos[2], ypos[2], 75);
      c4 = circle(xpos[3], ypos[3], 65);
      c5 = circle(xpos[4], ypos[4], 80);
      
      fill(r, g, b);
      break;

    case 18:
      fill(255,255,255);
      xpos = xpos_9[0];
      ypos = ypos_9[0];

      
      r_small = 50;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 60);
      c3 = circle(xpos[2], ypos[2], 75);
      c4 = circle(xpos[3], ypos[3], 65);
      c5 = circle(xpos[4], ypos[4], 80);
      c6 = circle(xpos[5], ypos[5], 60);
      c7 = circle(xpos[6], ypos[6], 64);
      c8 = circle(xpos[7], ypos[7], 55);
      c9 = circle(xpos[8], ypos[8], 69);
      
      fill(r, g, b);
      break;

    case 19:
      fill(255,255,255);
      xpos = xpos_9[1];
      ypos = ypos_9[1];
      
      r_small = 20;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 30);
      c3 = circle(xpos[2], ypos[2], 35);
      c4 = circle(xpos[3], ypos[3], 27);
      c5 = circle(xpos[4], ypos[4], 40);
      c6 = circle(xpos[5], ypos[5], 33);
      c7 = circle(xpos[6], ypos[6], 25);
      c8 = circle(xpos[7], ypos[7], 50);
      c9 = circle(xpos[8], ypos[8], 45);
      
      fill(r, g, b);
      break;

    case 20:
      fill(255,255,255);
      xpos = xpos_9[2];
      ypos = ypos_9[2];
      
      r_small = 45;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 50);
      c3 = circle(xpos[2], ypos[2], 55);
      c4 = circle(xpos[3], ypos[3], 60);
      c5 = circle(xpos[4], ypos[4], 70);
      c6 = circle(xpos[5], ypos[5], 66);
      c7 = circle(xpos[6], ypos[6], 54);
      c8 = circle(xpos[7], ypos[7], 59);
      c9 = circle(xpos[8], ypos[8], 68);
      
      fill(r, g, b);
      break; 
    
    case 21:
      fill(255,255,255);
      xpos = xpos_25[0];
      ypos = ypos_25[0];
      
      r_small = 15;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 19);
      c3 = circle(xpos[2], ypos[2], 40);
      c4 = circle(xpos[3], ypos[3], 32);
      c5 = circle(xpos[4], ypos[4], 70);
      c6 = circle(xpos[5], ypos[5], 25);
      c7 = circle(xpos[6], ypos[6], 32);
      c8 = circle(xpos[7], ypos[7], 22);
      c9 = circle(xpos[8], ypos[8], 40);
      c10 = circle(xpos[9], ypos[9], 19);
      c11 = circle(xpos[10], ypos[10], 66);
      c12 = circle(xpos[11], ypos[11], 37);
      c13 = circle(xpos[12], ypos[12], 33);
      c14 = circle(xpos[13], ypos[13], 41);
      c15 = circle(xpos[14], ypos[14], 48);
      c16 = circle(xpos[15], ypos[15], 28);
      c17 = circle(xpos[16], ypos[16], 18);
      c18 = circle(xpos[17], ypos[17], 39);
      c19 = circle(xpos[18], ypos[18], 81);
      c20 = circle(xpos[19], ypos[19], 34);
      c21 = circle(xpos[20], ypos[20], 28);
      c22 = circle(xpos[21], ypos[21], 42);
      c23 = circle(xpos[22], ypos[22], 29);
      c24 = circle(xpos[23], ypos[23], 26);
      c25 = circle(xpos[24], ypos[24], 24);
      
      fill(r, g, b);
      break;

    case 22:
      fill(255,255,255);

      xpos = xpos_25[1];
      ypos = ypos_25[1];
      
      r_small = 15;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 19);
      c3 = circle(xpos[2], ypos[2], 20);
      c4 = circle(xpos[3], ypos[3], 40);
      c5 = circle(xpos[4], ypos[4], 34);
      c6 = circle(xpos[5], ypos[5], 22);
      c7 = circle(xpos[6], ypos[6], 39);
      c8 = circle(xpos[7], ypos[7], 25);
      c9 = circle(xpos[8], ypos[8], 30);
      c10 = circle(xpos[9], ypos[9], 34);
      c11 = circle(xpos[10], ypos[10], 21);
      c12 = circle(xpos[11], ypos[11], 37);
      c13 = circle(xpos[12], ypos[12], 44);
      c14 = circle(xpos[13], ypos[13], 41);
      c15 = circle(xpos[14], ypos[14], 19);
      c16 = circle(xpos[15], ypos[15], 20);
      c17 = circle(xpos[16], ypos[16], 30);
      c18 = circle(xpos[17], ypos[17], 34);
      c19 = circle(xpos[18], ypos[18], 40);
      c20 = circle(xpos[19], ypos[19], 34);
      c21 = circle(xpos[20], ypos[20], 40);
      c22 = circle(xpos[21], ypos[21], 42);
      c23 = circle(xpos[22], ypos[22], 21);
      c24 = circle(xpos[23], ypos[23], 45);
      c25 = circle(xpos[24], ypos[24], 24);
      fill(r, g, b);
      
      break;

    case 23:
      fill(255,255,255);
      xpos = xpos_25[2];
      ypos = ypos_25[2];
      
      r_small = 15;
      c1 = circle(xpos[0], ypos[0], r_small);
      c2 = circle(xpos[1], ypos[1], 44);
      c3 = circle(xpos[2], ypos[2], 20);
      c4 = circle(xpos[3], ypos[3], 30);
      c5 = circle(xpos[4], ypos[4], 40);
      c6 = circle(xpos[5], ypos[5], 18);
      c7 = circle(xpos[6], ypos[6], 22);
      c8 = circle(xpos[7], ypos[7], 25);
      c9 = circle(xpos[8], ypos[8], 30);
      c10 = circle(xpos[9], ypos[9], 34);
      c11 = circle(xpos[10], ypos[10], 35);
      c12 = circle(xpos[11], ypos[11], 37);
      c13 = circle(xpos[12], ypos[12], 19);
      c14 = circle(xpos[13], ypos[13], 31);
      c15 = circle(xpos[14], ypos[14], 29);
      c16 = circle(xpos[15], ypos[15], 20);
      c17 = circle(xpos[16], ypos[16], 33);
      c18 = circle(xpos[17], ypos[17], 39);
      c19 = circle(xpos[18], ypos[18], 17);
      c20 = circle(xpos[19], ypos[19], 34);
      c21 = circle(xpos[20], ypos[20], 17);
      c22 = circle(xpos[21], ypos[21], 42);
      c23 = circle(xpos[22], ypos[22], 21);
      c24 = circle(xpos[23], ypos[23], 26);
      c25 = circle(xpos[24], ypos[24], 24);
      
      fill(r, g, b);
      break;
    case 24:
      background(200);
      textAlign(CENTER);
      textSize(18);
      fill(255, 0, 0);
      text('Thanks for participating! \n Press F12 for data results (under Array(24)) \n' , width / 2, height / 2);
  }
}

function wait(waitsecs) {
    setTimeout(donothing(), 'waitsecs');
}

function donothing() {
    //
}
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, xpos[0], ypos[0]);
  if (d < r_small/2) {
    //r = 0;
    //g = 128;
    //b = 0;
    //fill(0, 127, 0);
    background(0,128,0);
    setTimeout(donothing,50000);

    var end = Date.now();
    var diff = end - start;
    print("correct")
    //print("time: ");
    //print(diff + "ms");
    //Storing diff in data array for each iteration
    if(mode != -1){
      data[mode] = diff;
      error[mode] = 0; //correct answer
    }
    if(mode==23){
      print(data + " ");
    }

    mode++;
    rand();
    start = Date.now();
    //proceed = createButton("Proceed to next stage");
    //proceed.position(20,100);
    //proceed.mousePressed(draw())
    //draw();
  }
  else{
    r = 255;
    g = 0;
    b = 0;
    var end = Date.now();
    var diff = end - start;
    print("incorrect!")
    print("time: ");
    print(diff + "ms");
    //Storing diff in data array for each iteration
    if(mode != -1){
      data[mode] = diff;
      error[mode] = 1; //wrong answer
    }
    if(mode==23){
      print("Times: " + data + " ");
      print("Errors: " + error + " ")
    }

    mode++;
    rand();
    start = Date.now();
    //fill(r,g,b);
  }
  
}
