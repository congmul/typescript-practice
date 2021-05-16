const userName = 'Jehyun';
// userName = 3;

console.log(userName);

const button = document.querySelector('button')!;  // The exclamation mark means a developer knows there is a button element.( The value is not null )

function clickHandler(message: string, userNum01: number){
    console.log("Clikced!", message, userNum01);
} 

button.addEventListener('click', clickHandler.bind(null, 'Hi', 10)); // bind - first Arg : What we want to bind into.