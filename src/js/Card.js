import Game from './Game'

export default class Card {

    constructor(cardsNumber, backPath, frontId) {

        this.cardsNumber = cardsNumber;
        this.backPath = backPath;
        this.frontId = frontId;

        this.front = null;
        this.back = null;

        this.cardsArray = [];
        this.imageArray = [];

        this.card = null;

        this.createGameField();
        this.click();
    }

    createCard() {
        this.card = document.createElement('div');
        this.card.classList.add('card');

        this.createFrontSide();
        this.createBackSide();


        document.getElementById('cards').appendChild(this.card);
        return this.card;
    }

    createFrontSide() {

        this.front = document.createElement('div');
        this.front.classList.add('front');
        this.card.appendChild(this.front);

    }

    createBackSide() {

        this.back = document.createElement('div');
        this.back.classList.add('back');
        this.card.appendChild(this.back);

        let backImage = document.createElement('img');
        backImage.src = this.backPath;
        this.back.appendChild(backImage);
    }

    createGameField() {
        for (let i = 0; i < this.cardsNumber; i++) {
            this.cardsArray.push(this.createCard());
        }
        this.setCardClass();
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

    click() {
        this.cardsArray.forEach((card) => {
            card.addEventListener('click', () => {
                card.classList.add('rotate');
            })
        })
    }

}
