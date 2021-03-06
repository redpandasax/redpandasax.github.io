function ini() {
  //Prints the coordinate of the cursor for the user
  var svg = document.getElementById("mapSVG");

  // Create an SVGPoint for future math
  var pt = svg.createSVGPoint();

  // Get point in global SVG space
  function cursorPoint(evt){
    pt.x = evt.clientX; pt.y = evt.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  svg.addEventListener("mousemove",function(evt){
    var loc = cursorPoint(evt);
    console.log(Math.floor(loc.x)/100 + " " + Math.floor(loc.y)/100);
    // Use loc.x and loc.y here
  },false);
}
