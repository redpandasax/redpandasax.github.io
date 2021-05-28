
function deckGen(format, colors) {
  let requestURL = 'https://c2.scryfall.com/file/scryfall-bulk/oracle-cards/oracle-cards-20210528090524.json';
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
  if (format == "commander" || format == "c_highlander") {
    if (format == "commander") {
      while (deck.length == 0) {
        var temp = Math.floor(Math.random() * cardList.length
        if(cardList[temp].component != "token" && cardList[temp].type_line.indexOf("Legendary") >= 0 && cardList[temp].type_line.indexOf("Creature") >= 0) {
          deck.push(JSON.parse(cardList[temp]);
        }
      }
    }
    //Build 100 card decks here
  }
