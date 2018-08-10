import CONSTANTS from '../js/CONSTANTS'
import GameField from "./GameField";

export default class Registration{

    writeName() {
        let str = document.getElementById('name').value;
        if (str.length >= 3) {
            CONSTANTS.nickname.classList.toggle('registration_form');
            CONSTANTS.nickname.classList.toggle('hide');
            CONSTANTS.levels.classList.toggle('hide');
            document.getElementById('hello').innerHTML = 'Hello, ' + document.getElementById('name').value + '!' + '<br>' + 'Select the number of cards.'
        } else {
            document.getElementById('fill_name').innerHTML = 'Please, write your nickname not shorter than 3 symbols!';
        }
    }

    chooseLevel() {
        CONSTANTS.levels.classList.toggle('hide');
        CONSTANTS.skirts.classList.toggle('hide');
    }

    chooseSkirt() {
        document.getElementById('registration').classList.toggle('hide');
        document.getElementById('gameField').classList.toggle('gameField');
        new GameField().createGameField();
    }
}
