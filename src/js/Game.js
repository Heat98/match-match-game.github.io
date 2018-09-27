import Card from '../js/Card'

export default class Game {

    constructor(cardsNumber, backPath, frontId) {
        this.card =  new Card(cardsNumber, backPath, frontId);
        this.openCard();
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

    compareCard(){
           if(this.comparisonArray[0].id === this.comparisonArray[1].id) {
               this.comparisonArray.forEach((card)=>{
                   setTimeout(()=>{
                       card.classList.add('skip');
                   },1000);
               });
           } else {
               this.card.cardsArray.forEach((card) => {
                   setTimeout(()=>{
                       card.classList.remove('rotate');
                   },1000)
               });
           }
       }
    }



