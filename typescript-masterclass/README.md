### Call Apply & Bind on Functions in JavaScript

```js
//Object literal

const myObject = {
  myFunction: function () {
    console.log("Object literal ::: ", this);
  },
};

myObject.myFunction();

//Function

function myFunction(...text: string[]) {
  console.log("Function ::: ", this, text);
}

const bindFunction = myFunction.bind(myObject);
bindFunction("Hello", "World");
bindFunction("123", "456");
myFunction.call(myObject, "Hello", "World");
myFunction.apply(myObject, ["Hello", "World"]);
```
