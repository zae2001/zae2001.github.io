// setup() is called once at page-load
function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
  //noStroke()
  background(255);
  let h = hour()%12;
  let m = minute();
  let s = second();
  
  //keep track of previous values
  let ph = 100;
  let pm = 100;
  let ps = 100;
  
  var printbool = false;
  if(s==1){
    printbool=true;
    if(s==1 && printbool==true){
      console.log(minute());
      printbool=false;
    }
    else{
      printbool=false;
    }
    
  }
  
  
  //hour - pink - top
  if(h!=ph){
    fill(255,0,255,100);
    rect(0,600,h*50, -600)
    ph=h
  }
  
  
  //minute - yellow - left
  if(m>0 && m!=pm){
    fill(255,255,0,120)
    rect(0,0,600,m*10)
    pm=m
  }
  
  
  
  //second - blue - corner
  fill(0,255,255,80)
  triangle(600,600,600,600-((s*10)),600-((s*10)),600)
  
  
  
  /*template example:
    //background(225);
    textSize(32);
    fill(180);
    text(h, 10, 30);
    fill(100);
    text(m, 10, 60);
    fill(0);
    text(s, 10, 90);*/
}




