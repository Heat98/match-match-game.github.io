export default class Card {

    constructor() {
        this.card = null
    }

    createCard() {
        this.card = document.createElement('div');
        this.card.classList.add('card');
        document.getElementById('cards').appendChild(this.card);
        return this.card;
    }

}
