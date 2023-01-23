var printed = 0

// setup() is called once at page-load
function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
  //frameRate(1)
}

// draw() is called 60 times per second
function draw() {
  //noStroke()
  background(255);
  let h = hour()%12;
  let m = minute();
  let s = second();
  
  
  if(h==0){
    //h=12;
  }
  //keep track of previous values
  let ph = 100;
  let pm = 100;
  let ps = 100;
  
  
  
  
  //hour - pink - left
  if(h>0 && h!=ph){
    fill(255,0,255,100);
    //let c1=color(255,0,255,200)
    //let c2=color(255,0,255,100)
    //gradient(h*50, -600, (h-1)*49, -600, c1.toString(), c2.toString());
    rect(0,600,h*50, -600)
    
    
    
    ph=h
  }
  
  
  //minute - yellow - top
  if(m>0 && m!=pm){
    fill(255,255,0,120)
    //let c3= color(255,255,0,120)
    //let c4=color(255,200,0,200)
    //gradient(600, (m-1.5)*10, 600, m*10, c3.toString(), c4.toString())
    //x1 y1 x2 y2
    //
    rect(0,0,600, m*10)
    
    //fill(255,255,0,120)
    //rect(0,(m-1)*10,600, 10)
  
    if(s==1 && printed!=m){
      console.log(minute())
      printed=m
    }
    
    
    pm=m
    
  }
  
  
  
  //second - blue - corner
  if(s>0 && s!=ps){
    
    fill(0,255,255,80)
    triangle(600,600,600,600-((s*10)),600-((s*10)),600)
    ps=s;
  }
  

  
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

/*function gradient(x1, y1, x2, y2, c1, c2) {
  // Create gradient
  var grd = drawingContext.createLinearGradient(x1, y1, x2, y2);
  grd.addColorStop(0, c1);
  grd.addColorStop(1, c2);

  oldFillStyle = drawingContext.fillStyle;
  // Fill with gradient
  drawingContext.fillStyle = grd;
}*/




