//Prints the coordinate of the cursor for the user

// Create an SVGPoint for future math
var pt = this.createSVGPoint();

// Get point in global SVG space
function cursorPoint(evt){
  pt.x = evt.clientX; pt.y = evt.clientY;
  return pt.matrixTransform(this.getScreenCTM().inverse());
}

svg.addEventListener("mousemove",function(evt){
  var loc = cursorPoint(evt);
  document.getElementById("coord").firstChild.data = Math.floor(loc.x)/100 + " " + Math.floor(loc.y)/100;
  // Use loc.x and loc.y here
},false);
