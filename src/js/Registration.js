import CONSTANTS from '../js/CONSTANTS'

export default class Registration{

    writeName() {
        if (document.getElementById('name').value !== '') {
            CONSTANTS.nickname.classList.remove('registration_form');
            CONSTANTS.nickname.classList.add('hide');
            CONSTANTS.levels.classList.remove('hide');
            CONSTANTS.levels.classList.add('number_of_blocks');
            CONSTANTS.levels.classList.add('slide_right');
            document.getElementById('hello').innerHTML = 'Hello, ' + document.getElementById('name').value + '!' + '<br>' + 'Select the number of cards.'
        } else {
            document.getElementById('fill_name').innerHTML = 'Please, write your nickname!';
        }
    }

    chooseLevel() {
        CONSTANTS.levels.classList.add('hide');
        CONSTANTS.levels.classList.remove('number_of_blocks');
        CONSTANTS.levels.classList.remove('slide_right');
        CONSTANTS.skirts.classList.remove('hide');
        CONSTANTS.skirts.classList.add('skirt');
        CONSTANTS.skirts.classList.add('slide_right');
    }

    createGameField() {
        alert('NEW GAME!!!');
    }
}
