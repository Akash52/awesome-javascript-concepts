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

### Arrow Function

```js
class MyClass {
  myMethod() {
    const foo = 123;
    console.log("1", this);
    //with arrow function
    setTimeout(() => {
      console.log("2", this);
    }, 0);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
```
