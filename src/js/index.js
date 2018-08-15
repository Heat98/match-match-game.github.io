import style from '../styles/style.css'
import font from '../styles/fonts.css'
import config from '../js/config'
import Registration from '../js/Registration'

let registration = new Registration();

document.getElementById('submit').addEventListener('click', ()=> {
    registration.writeName();
});

document.getElementById('levels').addEventListener('click', (event)=> {
    let target = event.target;
    config.push(+target.id);
    if (target.tagName !== 'SPAN') return;
    registration.chooseLevel();
});

document.getElementById('skirt').addEventListener('click', (event)=> {
    let target = event.target;
    config.push(target.src, target.id);
    if (target.tagName !== 'IMG') return;
    registration.chooseSkirt();
    console.log(config)
});
