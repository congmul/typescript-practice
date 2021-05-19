// Generic Type, it requires one type argument - That is, Array Type connect to string type.
// const names: Array<string> = ["Max"];
// const names02: string[] = ["Max"];
// names[0].split(' ')
// names02[0].split(' ')

// // Promise Type
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// })

// Generic Function
// function merge(objA: object, objB: object) {  // It makes an error on line 25.
// Use Identifier to declare specific Type. Typically, Start T, then you can use Alphabet from T. (ex T, U, V, W,..)
// It means objA and objB can be of different types. *intersection type function
function merge<T, U>(objA: T, objB: U) { 
    return Object.assign(objA, objB);
}
const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
const mergedObj2 = merge({name: 'Max'}, {age: 30});
console.log(mergedObj.hobbies);
console.log(mergedObj.age);

// Type Constraint 
// extends object means this function has to have an obejct.
function merge03<T extends object, U extends number>(objA: T, objB: U) { 
    return Object.assign(objA, objB);
}
const mergedObj03 = merge03({name: 'Max', hobbies: ['Sports']}, 30);
console.log(mergedObj03)

//Another Generic function
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 0){
        descriptionText = 'Got 1 element.'
    } else if ( element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));


// Keyof 
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Max'}, 'name'));


// Generic Classes
class DataStorage<T extends string | number | boolean> {  // To prevent error when assigned obj
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Menu");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Menu'});

// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());



// Utility Types - extra type safety or extra flexibility
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// the methods do not work because of Readonly
// names.push('Manu');
// names.pop();