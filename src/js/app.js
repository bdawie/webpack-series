import '../css/main.css';
import '../css/input-elements.css';

import {buttonEl,paragraphEl} from './dom-loader';

let show = true;

buttonEl.addEventListener('click',toggleParagrap);

function toggleParagrap(){
    show = !show;
    onClickChange();
}

function onClickChange(){
    if(show){
        paragraphEl.style.display='block';
    } else{
        paragraphEl.style.display = 'none';
    }
}