import '../css/main.scss';
import {RandomGenerator} from './random-generator';

const randomInteger = document.querySelector('#randomInteger');
const randomRange = document.querySelector('#randomRange');
const outputParagraph = document.querySelector('#outputParagraph');

randomInteger.addEventListener('click',outputRandomInt);
randomRange.addEventListener('click',outputRandomRange);

function outputRandomInt(){
    outputParagraph.textContent = RandomGenerator.randomInteger();
}

function outputRandomRange(){
    outputParagraph.textContent = RandomGenerator.randomRange(1,500);
}
