function Logger(constructor: Function) {    // First Decorator
    console.log('Logging...');
    console.log(constructor);
}

@Logger // Call Decorator
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Person();

console.log(pers);

// Decorator Factory
function Logger02(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger02('LOGGING - PERSON') // Call Decorator Factory
class Person02 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers02 = new Person02();

console.log(pers02);


// Template Decorator Factory
function WithTemplate(template: string, hookId: string){
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        console.log("Rendering Template")
        const p = new constructor();
        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

@Logger02("LOGGING")    // Multiple Decorators - run decorators by bottom up
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person03 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...')
    }
}

const pers03 = new Person03();

console.log(pers03);


// Property Decorator
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator!');
    console.log(target, propertyName);

}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {

    @Log                    // Property Decorator
    title: string;
    private _price: number;
    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }else{
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

