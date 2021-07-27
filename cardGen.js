window.onLoad = layerCard("Blue", "Troop");
function layerCard(color, type) {
  var canvas = document.getElementById("card");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(document.getElementById("layer0"), 0, 0);
}
