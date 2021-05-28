function deckGen() {
  let requestURL = 'https://c2.scryfall.com/file/scryfall-bulk/oracle-cards/oracle-cards-20210528090524.json';
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () { const cards = request.response; generateDeck(cards); }
 }
