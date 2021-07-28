function layerCard(color, type, investCt) {
  var canvas = document.getElementById("card");
  var ctx = canvas.getContext("2d");
  var l0 = color + " " + type;
  var l1 = color + " " + "Textboxes";
  var inv = color + " " + investCt + "Invest";
  ctx.drawImage(document.getElementById(l0), 0, 0, 2292, 3201);
  ctx.drawImage(document.getElementById(l1), 0, 0, 2292, 3201);
  ctx.drawImage(document.getElementById(inv), 0, 0, 2292, 3201);
}
