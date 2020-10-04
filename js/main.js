import playSound from './playSound.js';
import removeTransition   from './removeTransition.js';

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);