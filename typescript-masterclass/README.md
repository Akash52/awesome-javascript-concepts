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

### Type this keyword

```html
<div class="app">
  <a href="#" class="click">Click me!</a>
</div>
```

```js
const elem = document.querySelector(".click");

function handleClick(this: HTMLAnchorElement, event: Event) {
  event.preventDefault();
  console.log(this.href);
}

elem.addEventListener("click", handleClick, false);
```

//Type Query

```js
const person = {
  name: "Max",
  age: 30,
};

type Person = typeof person;

const anotherPerson: Person = {
  name: "Manu",
  age: 31,
};
```

//Type keyof

```js
const person = {
name: "Max",
age: 30,
};

type Person = typeof person;
type PersonKeys = keyof Person; // "name" | "age"

type PersonTypes = Person[PersonKeys]; // "Max" | 30

const anotherPerson: Person = {
name: "Manu",
age: 31,
};

```
