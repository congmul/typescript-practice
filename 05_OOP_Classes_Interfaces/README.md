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

## abstract methods
- it can be declared in abstract class
- Prevent child classes to complete missing behaviour(Abstract method).