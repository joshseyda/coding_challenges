let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Diamond';

while (currentCard !== 'Spade') {
    console.log(currentCard);
    currentCard =
        cards[Math.floor(Math.random() * 4)];
}
console.log('The program found a spade!');