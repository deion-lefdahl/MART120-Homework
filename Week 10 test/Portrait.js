
 var redColor = 123
 var greenColor = 39
 var blueColor = 21
 var x = 100
 var y = 200
 var diameter = 50
 // set up for my canvas
 function setup () {
createCanvas (800,600);
 }
// this will keep running
 function draw() {
background (bluecolor , greencolor);
fill(255);
circle(x,y, diameter);
fill(greenColor);
    circle(x,y,25);
     if(x <= 800) {
        x +=13 ;
     }
    
    }
