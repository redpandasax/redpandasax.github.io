
function deckGen(format, colors) {
  let requestURL = 'https://c2.scryfall.com/file/scryfall-bulk/oracle-cards/oracle-cards-20210602090506.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () { const cards = request.response; generateDeck(cards, format, colors); }
}
//Make a card object, then make an array to hold the card objects in.  The array will be the deck
function generateDeck(cardList, format, colors) {
  var deckColors = colors;
  var deck = new Array();
  if (format == "commander" || format == "c_highlander") { //100 card decks
    if (format == "commander") {
      while (deck.length == 0) {
        var temp = Math.floor(Math.random() * cardList.length)
        if (cardList[temp].component != "token" && cardList[temp].legalities.commander == "legal" && cardList[temp].type_line.indexOf("Legendary") >= 0 && cardList[temp].type_line.indexOf("Creature") >= 0) {
          var card = cardList[temp];
          deck.push(card);
          console.log(card);
          deckColors = new Array();
          if (cardList[temp].color_identity != null) {
            for (i = 0; i < cardList[temp].color_identity.length; i ++) {
              deckColors.push(cardList[temp].color_identity[i]);
            }
          }
        }
      }
    }
    //Build 100 card decks here
    //Figure out commander rules for lands
    while (deck.length < 39) {
      var temp = Math.floor(Math.random() * cardList.length);
      var matchesColor = true;
      var isDupe = false;
      for (i = 0; i < cardList[temp].color_identity.length; i ++) {
        var colorExists = false;
        for (j = 0; j < deckColors.length; j ++) {
          if (cardList[temp].color_identity[i] == deckColors[j]) {
            colorExists = true;
          }
        }
        if (!colorExists) {
          matchesColor = false;
        }
      }
      for (i = 0; i < deck.length; i ++) {
        if (deck[i].name == cardList[temp].name) {
          isDupe = true;
        }
      }
      if (cardList[temp].component != "token" && cardList[temp].legalities.commander == "legal" && cardList[temp].type_line.indexOf("Land") >= 0 && matchesColor && (!isDupe || cardList[temp].type_line.indexOf("Basic Land") >= 0)) {
        var card = cardList[temp];
        deck.push(card);
        console.log(card);
      }
    }
    while (deck.length < 100) {
      var temp = Math.floor(Math.random() * cardList.length);
      var matchesColor = true;
      var isDupe = false;
      for (i = 0; i < cardList[temp].color_identity.length; i ++) {
        var colorExists = false;
        for (j = 0; j < deckColors.length; j ++) {
          if (cardList[temp].color_identity[i] == deckColors[j]) {
            colorExists = true;
          }
        }
        if (!colorExists) {
          matchesColor = false;
        }
      }
      for (i = 0; i < deck.length; i ++) {
        if (deck[i].name == cardList[temp].name) {
          isDupe = true;
        }
      }
      if (cardList[temp].component != "token" && cardList[temp].legalities.commander == "legal" && cardList[temp].type_line.indexOf("Land") < 0 && cardList[temp].type_line.indexOf("Card // Card") < 0 && matchesColor && !isDupe) {
        var card = cardList[temp];
        deck.push(card)
      }
    }
  }
  else {
    if (format == "standard") {
      while (deck.length < 24) {
        var temp = Math.floor(Math.random() * cardList.length);
        var matchesColor = true;
        for (i = 0; i < cardList[temp].color_identity.length; i ++) {
          var colorExists = false;
          for (j = 0; j < deckColors.length; j ++) {
            if (cardList[temp].color_identity[i] == deckColors[j]) {
              colorExists = true;
            }
          }
          if (!colorExists) {
            matchesColor = false;
          }
        }
        if (cardList[temp].component != "token" && cardList[temp].legalities.standard == "legal" && cardList[temp].type_line.indexOf("Land") >= 0 && matchesColor) {
          var card = cardList[temp];
          deck.push(card);
          console.log(card);
        }
      }
      while (deck.length < 60) {
        var temp = Math.floor(Math.random() * cardList.length);
        var matchesColor = true;
        for (i = 0; i < cardList[temp].color_identity.length; i ++) {
          var colorExists = false;
          for (j = 0; j < deckColors.length; j ++) {
            if (cardList[temp].color_identity[i] == deckColors[j]) {
              colorExists = true;
            }
          }
          if (!colorExists) {
            matchesColor = false;
          }
        }
        if (cardList[temp].component != "token" && cardList[temp].legalities.commander == "legal" && cardList[temp].type_line.indexOf("Land") < 0 && cardList[temp].type_line.indexOf("Card // Card") < 0 && matchesColor) {
          var card = cardList[temp];
          deck.push(card)
        }
      }
    }
  }
  var deckPrint = "1 " + deck[0].name;
  for (i = 1; i < deck.length; i ++) {
    deckPrint = deckPrint + "\n1 " + deck[i].name;
  }
  console.log(deckPrint);
}
