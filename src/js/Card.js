import Game from './Game'
import images from './images'

export default class Card {

    constructor(cardsNumber, backPath, frontId) {

        this.cardsNumber = cardsNumber;
        this.backPath = backPath;
        this.imagesObj = images.find((o)=>{
            return o.id === frontId;
        });

        this.front = null;
        this.back = null;

        this.cardsArray = [];
        this.imageArray = this.shuffleImageArray(this.shuffleImageArray(this.imagesObj.images.slice(0, cardsNumber / 2)));
        this.imageArray = this.shuffleImageArray(this.imageArray.concat(this.imageArray));
        this.createGameField();
    }



    createGameField() {
        for (let i = 0; i < this.cardsNumber; i++) {
            this.cardsArray.push(this.createCard());
        }
        this.setCardClass();
        this.createFrontSideImages();

        console.log(this.imageArray);
        console.log(this.frontArray);
    }

    shuffleImageArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
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

        this.frontImage = document.createElement('img');
        this.front.appendChild(this.frontImage);

    }

    createBackSide() {

        this.back = document.createElement('div');
        this.back.classList.add('back');
        this.card.appendChild(this.back);

        let backImage = document.createElement('img');
        backImage.src = this.backPath;
        this.back.appendChild(backImage);
    }

    createFrontSideImages() {
        this.frontArray = Array.from(document.querySelectorAll("div.front img"));

        let count = 0;
        while(count < this.cardsNumber) {
            this.frontArray[count].src = this.imageArray[count].src;
            this.cardsArray[count].id = this.imageArray[count].id;
            count++;
        }
    }

    setCardClass() {
        this.cardsArray.forEach((card) => {
            if (this.cardsNumber === 12) {
                card.classList.add('easy_cards');
            } else if (this.cardsNumber === 16) {
                card.classList.add('medium_cards');
            } else {
                card.classList.add('hard_cards');
            }
        });
    }
}
