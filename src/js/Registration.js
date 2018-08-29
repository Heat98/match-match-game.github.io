import CONSTANTS from '../js/CONSTANTS'
import Game from "./Game";
import config from "./config";

export default class Registration {
    constructor() {
        this.writeName();
    }

    writeName() {

        document.getElementById('submit').addEventListener('click', ()=> {

            let nickname = document.getElementById('name').value;

            if (nickname.length >= 3) {
                CONSTANTS.nickname.classList.toggle('registration_form');
                CONSTANTS.nickname.classList.toggle('hide');
                CONSTANTS.levels.classList.toggle('hide');
                document.getElementById('hello').innerHTML = 'Hello, ' + document.getElementById('name').value + '!' + '<br>' + 'Select the number of cards.'
            } else {
                document.getElementById('fill_name').innerHTML = 'Please, write your nickname not shorter than 3 symbols!';
            }

            this.chooseLevel();
        });
    }

    chooseLevel() {
        document.getElementById('levels').addEventListener('click', (event)=> {
            let target = event.target;
            config.push(+target.id);
            if (target.tagName !== 'SPAN') return;
            CONSTANTS.levels.classList.toggle('hide');
            CONSTANTS.skirts.classList.toggle('hide');
            this.chooseSkirt();
        });
    }

    chooseSkirt() {
        document.getElementById('skirt').addEventListener('click', (event)=> {
            let target = event.target;
            config.push(target.src, target.id);
            if (target.tagName !== 'IMG') return;
            document.getElementById('registration').classList.toggle('hide');
            document.getElementById('gameField').classList.toggle('gameField');
            new Game(config[0], config[1], config[2]);
            console.log(config)
        });

    }
}
