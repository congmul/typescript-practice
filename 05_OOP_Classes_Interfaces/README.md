# Object-oriented Programming (OOP)

## Classes & Instances
#### Classes
 - Blueprints for objects (theoretical definition)
 - Define how objects look like, which properties and methods they have
 - Classes make creation of multiple, similar objects much easier

#### Objects 
 - The things you work with in code
 - Insctacnes of classes(=based on classes)
 - Class-based creation is an alternative to using object literals

## This
 ```js
class DepartmentWithFunc {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    describe(this: DepartmentWithFunc) {
        console.log("Department: " + this.name)
    }
}
 ```
## Static method
- A method you call directly on a class, not on an object created based on it.

## abstract methods
- it can be declared in abstract class
- Prevent child classes to complete missing behaviour(Abstract method).
- * abstract class cannot be instantiated but has to be extended.

## Interfaces
- Interfaces describes the structure of an Object
- Unlike a class, interfaces will not be used  as a blueprint
- Just find a structure, not the assigned value
- Can use an interface as a type
- User-case : You want to create "contract" that forces an implementing class to have certain methods or properties.

```js
interface Named {
  readonly name: string;   // only use readonly in interface , cannot use private/public
  outputName?: string;    // ? means optional property.
}

interface Greetable extends Named {   // You can also use extends in Interface.
  greet(phrase: string): void;
}
```