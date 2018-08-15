import config from '../js/config'
import Card from '../js/Card'

export default class GameField {

    constructor() {
        this.cardsNumber = config[0];
        this.skirtChoice = config[1];
        this.front = config[2];
        this.cardsArray = [];
        this.imageArray = [];
        this.back = null;
        this.card = new Card();

    }

    createGameField() {
        for (let i = 0; i < this.cardsNumber; i++) {
            this.cardsArray.push(this.card.createCard());
            // this.cardsArray.push(this.card);
            // this.imageArray.push(document.createElement('img'));
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
            this.back.src = this.skirtChoice;
            card.appendChild(this.back);
        });
        this.back.addEventListener('click', () => {
            this.back.style.display = 'none';
        })
    }

}
