# REACT with TypeScript

## Props
- To receive some props inside of each child component, Define an interface inside of the Child component.
- The interface is going to define exactly what props we exprect our child component to receive.
- FIRST The interface can check if we provide the correct props to Child when we show it in Parent.
- SECOND The interface can check if we use the correctly named + typed props in Child.
- *DownSide : TypeScript doesn't know if Child component is React component, so It can't use default Type and method.
```js
export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
};
```

### Props - React.FC<ChildProps>  : React.FunctionComponent
- Tell TypeScript that Child will be a React Function component. It means that we might have some additional properties assigned to it. such as props types, context types, display name.
- Tell Typescript that Child component is going to receive a props object of type ChildProps which is set of angle bracket.
- * It can receive children contents automatically
