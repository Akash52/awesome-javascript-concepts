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

### Pick Mapped type

```ts
interface Person {
  name: string;
  age: number;
  location: string;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

function pick<T, K extends keyof T>(obj: T, keys: K[]): My
Pick<T, K> {
  return keys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: obj[key],
    };
  }, {} as MyPick<T, K>);
}

const person: Person = {
  name: "John",
  age: 30,
  location: "USA",
};

const nameAndAgeOnly = pick(person, ["name", "age"]);

console.log(nameAndAgeOnly);

Example 2 : Pick Mapped type

interface Person {
  name: string;
  age?: number;
  address: {};
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const person: Pick<Person, "name" | "age"> = {
  name: "John",
  age: 30,
};


```

### Record mapped type

```ts
let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
  current: string;
  next: string;
}

const item: Record<keyof TrackStates, string> = {
  current: "abc23ds",
  next: "dsfsdflink3",
};

//Number are coerced to string
dictionary[0] = item;
```

### Typeguard in TS

```ts
class Song {
  constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
  if (typeof item.duration === "string") {
    return item.duration;
  }
  const { duration } = item;
  const minutes = Math.floor(duration / 60000);
  const seconds = (duration / 1000) % 60;
  return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(
  new Song("Wonderful Wonderful", "05:30")
);
console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(
  new Song("Wonderful Wonderful", 330000)
);

console.log(songDurationFromMS);
```
