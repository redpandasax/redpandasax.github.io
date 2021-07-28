function layerCard(color, type, investCt) {
  var canvas = document.getElementById("card");
  var ctx = canvas.getContext("2d");
  var l0 = color.value.concat(" ".concat(type.value));
  var l1 = color.value.concat(" Textboxes");
  var inv = color.value.concat(" ".concat(investCt.toString().concat("Invest")));
  ctx.drawImage(document.getElementById(l0), 0, 0, 2292, 3201);
  ctx.drawImage(document.getElementById(l1), 0, 0, 2292, 3201);
  ctx.drawImage(document.getElementById(inv), 0, 0, 2292, 3201);
}
