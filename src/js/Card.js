import Game from './Game'

export default class Card {

    constructor(cardsNumber, backPath, front) {

        this.cardsNumber = cardsNumber;
        this.backPath = backPath;
        this.front = front;

        this.cardsArray = [];
        this.imageArray = [];

        this.card = null;

        this.createGameField();
        this.click();
    }

    createCard() {
        this.card = document.createElement('div');
        this.card.classList.add('card');
        document.getElementById('cards').appendChild(this.card);
        return this.card;
    }

    createGameField() {
        for (let i = 0; i < this.cardsNumber; i++) {
            this.cardsArray.push(this.createCard());
        }
        this.setCardClass();
        this.setBackImage();
    }

    setCardClass() {
        this.cardsArray.forEach((card, num) => {
            card.id = `${num + 1}`;
            if (this.cardsNumber === 12) {
                card.classList.add('easy_cards');
            } else if (this.cardsNumber === 16) {
                card.classList.add('medium_cards');
            } else {
                card.classList.add('hard_cards');
            }
        });

    }

    setBackImage() {
        this.cardsArray.forEach((card)=> {
            this.back = document.createElement('img');
            this.back.src = this.backPath;
            card.appendChild(this.back);
        });
    }

    click() {
        this.cardsArray.forEach((card) => {
            card.addEventListener('click', (event) => {
                let target = event.target;
                target.classList.add('rotate');
            })
        })
    }

}
