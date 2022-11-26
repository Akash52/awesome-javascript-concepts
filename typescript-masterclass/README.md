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

### Generic Types & keyof

```ts
const person = {
  name: "Max",
  age: 30,
};

type Person = typeof person;
type PersonKeys = keyof Person; // "name" | "age"
type PersonTypes = Person[PersonKeys]; // "Max" | 30

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, "name");

const anotherPerson: Person = {
  name: "Manu",
  age: 31,
};
```

### Mapped type & Generic

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
};

function freeze<T>(obj: T): Readonly<T> {
  return Object.freeze(obj);
}

const newPerson = freeze(person);

newPerson.age = 25; // Error: cannot assign to 'age' because it is a read-only property.
```

### Partial Mapped type

```ts
interface Person {
  name: string;
  age: number;
}

// interface PartialPerson {
//   name?: string;
//   age?: number;
// }

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

function updatePerson(person: Person, fieldsToUpdate: Partial<Person>) {
  return { ...person, ...fieldsToUpdate };
}

const person: Person = {
  name: "John",
  age: 30,
};

const updatedPerson = updatePerson(person, { age: 52 });
console.log(updatedPerson);
```

### Required Mapped type

```ts
interface Person {
  name: string;
  age?: number;
}

function printAge(person: Required<Person>) {
  return `${person.name} is ${person.age} years old.`;
}

const person: Required<Person> = {
  name: "John",
  age: 30,
};

const age = printAge(person);
```
