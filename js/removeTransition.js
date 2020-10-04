export default function removeTransition(e){

    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');

};