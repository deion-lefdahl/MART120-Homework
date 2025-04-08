
var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 150;
var y = 160;
var diameter = 170
var movement= 13;
//triangle
var a = 20;
var b = 45;
var c = 56;
var d = 30;
var e = 60;
var f = 75;
//rect
var h =220;
var i =230;
var j =240;
var k =250;
// point 1 
var z = 100;
var r = 110;
var n = textSize;
function setup ()
{
    createCanvas (500,600);
}
function draw ()
{
    background(redColor, greenColor, blueColor);
    fill(255);
    textSize(25)
    text("My Self Portrait, Deion Lefdahl",10, 20)
    if (n >= 150 || n<=5 ) { 
        n *=5
        
    }
   n += 13;

    circle(x,y,diameter);
    if (diameter >=20 || diameter <=600)
       { diameter *=100;

       }
    diameter +=100;
    fill(redColor,greenColor,blueColor);
    circle(x,y,85)
    if(x >= 450 || x <=0)
    {
        movement *=-1;
    }
    x += movement;

 
    point(z,r)
    if(r >=600 || r <=0) {
        r *-1;
    }
    r += movement;
     point(160,110);
     
  
    strokeWeight(25);


      triangle(a, b, c, d, e, f);
      if(e >= 500)
   {  e *=-2;
    
        
    }
    e += 11
    

    line(300,30,320,340);

    rect(h,i,j,k);
    if (k >=0|| k <=-600) 
        {
        k -=20;
    }
    k += 14
   
}