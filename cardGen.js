function layerCard(color, type, investCt, cardArt) {
  var canvas = document.getElementById("card");
  var ctx = canvas.getContext("2d");
  var l0 = color.concat(" ".concat(type));
  var l1 = color.concat(" Textboxes");
  var inv = color.concat(" ".concat(investCt.toString().concat("Invest")));
  ctx.drawImage(document.getElementById(l0), 0, 0, 2292, 3201);
  ctx.drawImage(document.getElementById("cardArt"), 200, 545, 1890, 1075)
  ctx.drawImage(document.getElementById(l1), 0, 0, 2292, 3201);
  if (investCt > 0)
    ctx.drawImage(document.getElementById(inv), 0, 0, 2292, 3201);
}

function showImage(imgId) {
  //img.width = width;
  //img.height = height;
  document.getElementById("cardArt").src="https://drive.google.com/uc?export=view&id=".concat(imgId);
}
