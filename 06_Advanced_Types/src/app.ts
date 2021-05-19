// Intersection types
type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}
//Intersection types
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name : 'Max',
    privileges: ['created-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
//Intersection types
type Universal = Combinable & Numeric;


function add(a: Combinable, b: Combinable){
    // Type Guard
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}


type UnknownEmployee =  Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);
    // Check if there is privileges property
    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }   
    if('startDate' in emp){
        console.log('Privileges: ' + emp.startDate);
    }   
    
}

printEmployeeInformation(e1);

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo ...' + amount);
    }

}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions
interface Bird {
    type: 'bird';          // Store their type
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';          // Store their type
    runningSpped: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    let speed;
    switch (animal.type){
        case 'bird': 
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpped;
            break;
    }

    console.log('Moving at speed: ' + speed);
}
moveAnimal({type: 'bird', flyingSpeed: 10});

// Type Casting - Value does not exist on TypeScript becasue this generic type, which basically is any HTMLType
// So you would need to tell TepeScript that actually what we select here is not just not null.

const userinputElement = <HTMLInputElement>document.getElementById('user-input');
// const userinputElement = document.getElementById('user-input') as  HTMLInputElement;

userinputElement.value = 'Hi there!';


// Index Properties example
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
    // id: string;     // Predefiend properties which have to be the same as below type.
    [prop: string]: string;  // [set property type]: set value type; - Index Properties
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};

// Function Overload
function add02(a: number, b: number): number;
function add02(a: string, b: string): string;
function add02(a: number, b: string): string;
function add02(a: string, b: number): string;
function add02(a: Combinable, b: Combinable){
    // Type Guard
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add02("Max", 'test');
result.split(' ');



// Optional Chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company'}
};
console.log(fetchedUserData?.job?.title); // Check if the property exist or not.

// Nullish Coalescing
const userInput = null;
const storeData = userInput || 'DEFAUlT';
console.log(storeData);