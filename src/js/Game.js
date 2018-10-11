import Card from '../js/Card'

export default class Game {

    constructor(cardsNumber, backPath, frontId) {
        this.cardsNumber = cardsNumber;

        this.card =  new Card(cardsNumber, backPath, frontId);
        this.openCard();
        this.arrayOfAllCards = [];
    }

    openCard(){
        this.comparisonArray = [];
        this.card.cardsArray.forEach((card)=>{
            card.addEventListener('click', () => {
                card.classList.add('rotate');
                this.comparisonArray.push(card);
                if (this.comparisonArray.length === 2) {
                    this.compareCard();
                    this.comparisonArray = [];
                }
            })
        })
    }

    compareCard() {
           if(this.comparisonArray[0].id === this.comparisonArray[1].id) {
               this.arrayOfAllCards = this.arrayOfAllCards.concat(this.comparisonArray);
               if (this.arrayOfAllCards.length === this.cardsNumber) {
                       this.win();
               }
               this.skipCards();
           } else {
               this.card.cardsArray.forEach((card) => {
                   setTimeout(()=>{
                       card.classList.remove('rotate');
                   },1000)
               });
           }
       }

       skipCards() {

           this.comparisonArray.forEach((card)=>{
               setTimeout(()=>{
                   card.classList.remove('rotate');
                   card.classList.add('skip');
               },1000);
           });

       }

       win() {
           document.getElementById('gameField').classList.toggle('gameField');
           document.getElementById('gameField').classList.toggle('hide');
           document.getElementById('congratulations').classList.toggle('hide');
           document.getElementById('congratulations').classList.toggle('congratulations');
       }
    }



