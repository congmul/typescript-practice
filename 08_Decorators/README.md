# Decorators

- ```js"experimentalDecorators": true ```on tsconfig.json to Use Decorators
- Decorator need one argument and that is the target of this decorator.
- Decorator is executed when your class is defined.
```js
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
```