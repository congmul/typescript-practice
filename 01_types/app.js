// Assign number type argument.
// The core primitive types in TypeScript are all lowercase!
//Basic Variable - number, boolean, string
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = '5';
var number2 = 2.8;
// Declare variable with type;
var number3;
var printResult = true;
var resultPhrase = 'Result is: ';
// We can't assign number to a variable of string type
// resultPhrase = 5;
// parseInt by +
add(+number1, number2, printResult, resultPhrase);
// Variable - Object
// Better Synctax than them below.
var person = {
    name: 'Maximilian',
    age: 30
};
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
var person_array = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
// Declare array
var favoriteActivities;
// favoriteActivities = 'Sports';  error because favoriteActivities is array
favoriteActivities = ["sports"];
console.log(person_array);
// iteration
for (var _i = 0, _a = person_array.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
// Variable - Tuple
var person_tuple = {
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
(function (Role) {
    Role["ADMIN02"] = "amdin";
    Role[Role["READ_ONLY02"] = 100] = "READ_ONLY02";
    Role[Role["AUTHOR02"] = 200] = "AUTHOR02";
})(Role || (Role = {}));
; // Be able to assign numbers or Names;
var person_enum = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person_enum.role === Role.ADMIN) {
    console.log("AMDIN");
}
// The same as above example
if (person_enum.role === 0) {
    console.log("AMDIN");
}
// Declare flexible type of array - any
var anyTypeArray;
anyTypeArray = ["text", 1];
// Variable Union type
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine("Max", "Anna");
console.log(combineNames);
// Variable Literal type
function combineLiteral(input1, input2, resultConversion) {
    var result;
    if (resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineLiteralAges = combineLiteral(30, 26, 'as-number');
console.log(combineLiteralAges);
var combineLiteralStringAges = combineLiteral('30', '26', 'as-number');
console.log(combineLiteralStringAges);
var combineLiteralNames = combineLiteral("Max", "Anna", 'as-text');
console.log(combineLiteralNames);
var myVar; // Ex
var u1 = { name: 'Max', age: 30 }; // Ex
// Function- Return type, Last argument after colon
function addFunction(n1, n2) {
    return n1 + n2;
}
function printResult02(num) {
    return 'Result: ' + num;
}
console.log(printResult02(addFunction(2, 3)));
// assign Function Data type to a Variable
// let combinedValues02: Function; 
var combinedValues02; //Two Argument and Return Type
combinedValues02 = addFunction;
// combinedValues02 = printResult02;    // ERROR because printResult02 has one argument
console.log(combinedValues02(8, 8));
// CallBack Function 
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) { console.log(result); });
// unknown type - unknown is the better choice over any.
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never type for return
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!: ', 500);
