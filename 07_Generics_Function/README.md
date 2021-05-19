# Generics Function
## Generics Types
- it is a type which is kind of connected with some other type.
```js
const names: Array<string> = ["Max"]; // Array Type connect to string type.
```

## Generics Function
- In cases where you have a type that actually works together with multiple other possible types
```js
function merge<T, U>(objA: T, objB: U) { 
    return Object.assign(objA, objB);
}
const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
const mergedObj2 = merge({name: 'Max'}, {age: 30});
console.log(mergedObj.hobbies);
console.log(mergedObj.age);
```
