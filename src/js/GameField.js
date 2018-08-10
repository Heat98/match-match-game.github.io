import config from '../js/config'

export default class GameField {

    constructor() {
        this.skirt = config[1];
        this.cardsNumber = config[0];
        this.cardsField = document.getElementById('cards');
        this.card = [];
    }

    createGameField() {

        for (let i = 0; i < this.cardsNumber; i++) {
            this.card.push(document.createElement('div'));
            // this.cardsField.appendChild(card);
            // card.classList.add('card');
            // card.id = `${i}`
        }
        this.card.forEach((i)=> {
            this.cardsField.appendChild(i);
            // this.cardsField.classList.add('slide_right');
            i.classList.add('card');
            i.id = `${i}`;
            if (this.cardsNumber === 12) {
                i.classList.add('easy_cards');
            } else if (this.cardsNumber === 16) {
                i.classList.add('medium_cards');
            } else {
                i.classList.add('hard_cards');
            }
        });
        console.log(this.card);
    }

}
