"use strict";
const userName = 'Jehyun';
console.log(userName);
const button = document.querySelector('button');
function clickHandler(message, userNum01) {
    console.log("Clikced!" + message + userNum01);
}
button.addEventListener('click', clickHandler.bind(null, 'Hi', 10));
