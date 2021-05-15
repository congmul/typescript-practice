// Assign number type argument.
// The core primitive types in TypeScript are all lowercase!

//Basic Variable - number, boolean, string
function add(n1: number, n2: number, showResult: boolean, phrase: string){

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }else{
        return result;
    }
}

const number1 = '5';
const number2 = 2.8;

// Declare variable with type;
let number3: number;

const printResult = true;
let resultPhrase = 'Result is: ';

// We can't assign number to a variable of string type
// resultPhrase = 5;

// parseInt by +
add(+number1, number2, printResult, resultPhrase);



// Variable - Object

// Better Synctax than them below.
const person = {
    name: 'Maximilian',
    age: 30,

}

// const person: object = {
//     name: 'Maximilian',
//     age: 30
// }
// console.log(person.name); Error because {} Didn't explain about properties.

// The same as above person
// const person: {} = {
//     name: 'Maximilian',
//     age: 30
// }
// console.log(person.name); Error because {} Didn't explain about properties.


// The same as above person but assign types to properties.
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Maximilian',
//     age: 30
// }

console.log(person.name);


// Variable - Array
const person_array = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
}

// Declare array
let favoriteActivities: string[];
// favoriteActivities = 'Sports';  error because favoriteActivities is array
favoriteActivities = ["sports"];

console.log(person_array);

// iteration
for (const hobby of person_array.hobbies) {
    console.log(hobby);
}

// Variable - Tuple
const person_tuple:{
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tuple type
} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // Tuple : First - numeric identifier / Second - String identifier
};


// person_tuple.role.push('admin'); Works even if this is tuple
// person_tuple.role[1] = 10;  ERROR
// person_tuple.role = [0, 'admin', 'user']; ERROR 

console.log("person_tuple : ", person_tuple);


// Variable - Enum

// Generally global variable in Javascript
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Role { ADMIN02 = "amdin", READ_ONLY02 = 100, AUTHOR02 = 200 }; // Be able to assign numbers or Names;

const person_enum = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

if(person_enum.role === Role.ADMIN){
    console.log("AMDIN")
}

// The same as above example
if(person_enum.role === 0){
    console.log("AMDIN")
}

// Declare flexible type of array - any
let anyTypeArray: any[];
anyTypeArray = ["text", 1];



// Variable Union type
function combine(input1: number | string, input2: number | string){
    let result: any;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combineAges = combine(30, 26)
console.log(combineAges);

const combineNames = combine("Max", "Anna")
console.log(combineNames);



// Variable Literal type
function combineLiteral(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'){
    let result: any;
    if(resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineLiteralAges = combineLiteral(30, 26, 'as-number')
console.log(combineLiteralAges);

const combineLiteralStringAges = combineLiteral('30', '26', 'as-number')
console.log(combineLiteralStringAges);

const combineLiteralNames = combineLiteral("Max", "Anna", 'as-text')
console.log(combineLiteralNames);

// Variable Custom type
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
let myVar:Combinable; // Ex

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // Ex


// Function- Return type, Last argument after colon
function addFunction(n1: number, n2: number): number { 
    return n1 + n2;
}

function printResult02(num: number): string {
    return 'Result: ' + num;
}

console.log(printResult02(addFunction(2, 3)));


// assign Function Data type to a Variable
// let combinedValues02: Function; 
let combinedValues02: (a: number, b:number) => number;         //Two Argument and Return Type

combinedValues02 = addFunction;
// combinedValues02 = printResult02;    // ERROR because printResult02 has one argument
console.log(combinedValues02(8, 8));



// CallBack Function 
function addAndHandle(n1: number, n2:number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {console.log(result)});



// unknown type - unknown is the better choice over any.
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput === 'string') {
    userName = userInput;
}



// never type for return
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
    // while (ture) {}  infinit loop also never return
}

generateError('An error occured!: ', 500);