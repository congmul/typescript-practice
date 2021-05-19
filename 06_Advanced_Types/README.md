# Advanced Types
## Intersection Types
- this allow you to combine other types
```js
type Amdin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Amdin & Employee;   //Intersection types

const e1: ElevatedEmployee = {
    name : 'Max',
    privileges: ['created-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;  //Intersection types
```
## Type Guards
- It allows us utilize the flexibility union types gives us.
```js
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){ // Type Guard
        return a.toString() + b.toString();
    }
    return a + b;
}


function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if('loadCargo' in vehicle){   // Type Guard
        vehicle.loadCargo(1000);
    }
}
```
## Discriminated Unions
- Give a type to check
## Type Casting
- Type Casting - Value does not exist on TypeScript becasue this generic type, which basically is any HTMLType
- So you would need to tell TepeScript that actually what we select here is not just not null.
```js

const userinputElement = document.getElementById('user-input') as  HTMLInputElement;
or 
const userinputElement = <HTMLInputElement>document.getElementById('user-input');

userinputElement.value = 'Hi there!';

```
## Function Overloads
```js
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
```