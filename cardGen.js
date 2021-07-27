function layerCard(color, type) {
  var canvas = document.getElementById("card");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(document.getElementById("layer0"), 0, 0, 764, 1067);
  ctx.drawImage(document.getElementById("layer1"), 0, 0, 764, 1067);
  ctx.drawImage(document.getElementById("layer2"), 0, 0, 764, 1067);
}
