//JavaScript DOM

#### DOM Nodes

```js
import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
<h1>Hell World!</h1>
`;

//html
console.log(document.documentElement);
console.dir(document.documentElement);

//<head>
console.log(document.head);

//<body>
console.dir(document.body);

//rerive the constructor name
console.log(document.body.constructor.name);

//looking at the prototype chain
console.log(document.body instanceof HTMLBodyElement);
console.log(document.body instanceof HTMLElement);
console.log(document.body instanceof Element);
console.log(document.body instanceof EventTarget);

/*
- NodeTypes
1.Element
2.Attribute
3.Text
4.CDATA section
5.Entity reference
6.Entity
7.Processing instruction
8.Comment
9.Document
10.Document type
11.Document fragment
12.Notation.
 */

console.log(document.body.nodeType);
console.log(document.nodeType);

//nodeName for any Node Types
console.log(document.nodeName);
//tagName for any Element types
console.log(document.tagName);
```

#### Creating DOM Nodes

```js
const app = document.getElementById("app");

const div = document.createElement("div");
const text = document.createTextNode("DOM!");
const comment = document.createComment("No comment");

div.append(comment);
div.append(text);
div.append(app);

console.log(app, div);
```

#### Changing Content of DOM Elements

```js
const app = document.getElementById("app");
app.innerHTML = `<h1>JS DOM</h1>`;

const h1 = document.createElement("h1");
h1.innerText = "Ultimate JS";
h1.innerText = "Ultimate DOM";

app.append(h1);

console.log(app.innerHTML);
console.log(app.innerText);
console.log(app.textContent);
```

#### innerHTML versus createElement

```js
//Using document.createElement()
function createInputDOM({ label, type = "text" }) {
  const lableEl = document.createElement("label");
  const inputEL = document.createElement("input");
  inputEL.type = type;
  lableEl.innerText = label;
  lableEl.append(inputEL);

  return lableEl;
}

const inputFromDOM = createInputDOM({ label: "Name" });

console.log(inputFromDOM.querySelector("input"));
app.append(inputFromDOM);

//Using string templates
function createInputTemplate({ label, type = "text" }) {
  return `
    <label>
    ${label}
    <input type="${type}">
    </label>
    `;
}

const inputFromTemplate = createInputTemplate({
  label: "Email",
  type: "email",
});

app.innerHTML += inputFromTemplate;
```

#### Document Fragment

```js
const data = ["Earth", "Fire", "Water", "Air"];

const fragment = document.createDocumentFragment();

data.forEach((name) => {
  const li = document.createElement("li");
  li.innerText = name;
  fragment.append(li);
});

app.append(fragment);
```

#### Inserting DOM Elements

```js
const div = document.createElement("div");
const span = document.createElement("span");
const p = document.createElement("p");
const i = document.createElement("i");
const b = document.createElement("b");

div.append(span);
div.prepend(p);
// p.before(i);
p.after(i);

//old way using insertBefore
// i.parentNode.insertBefore(b, i);

//After : old way using insertBefore + nextSibling

i.parentNode.insertBefore(b, i.nextSibling);

console.log(div);
```

#### Inserting DOM as String Templates

```js
app.innerHTML = `<h1>JS DOM</h1>
<ul>
<li>1</li>
</ul>
`;

const ul = app.querySelector("ul");

ul.insertAdjacentHTML("beforebegin", "<p>Before</p>");
ul.insertAdjacentHTML("afterbegin", "<li>First</li>");
ul.insertAdjacentHTML("beforeend", "<p>Last</p>");
ul.insertAdjacentHTML("afterend", "<p>After</p>");
```

#### Replacing DOM Elements

```js
app.innerHTML = `
<h1>
JavaScript Dom
</h1>
<div>
Replace Me!
</div>
`;

const div = app.querySelector("div");

const newDiv = document.createElement("div");
newDiv.innerText = "I have been replaced";

//new way
div.replaceWith(newDiv);

//old way
const anotherDiv = document.createElement("div");
anotherDiv.innerText = "I replace All";

setTimeout(() => {
  newDiv.parentNode.replaceChild(anotherDiv, newDiv);
}, 2000);
```

#### Cloning DOM Elements

```js
app.innerHTML = `
JS
`;

const div = document.createElement("div");
const span = document.createElement("span");

span.innerText = "Can you clone me ?";
div.append(span);

app.append(div);

//cloneNode(flase) only clones the top element

const clone = div.cloneNode();
console.log(clone);

//cloneNode(true) clones all elements and subtrees

const newClone = div.cloneNode(true);
console.log(newClone);

app.append(newClone);
```

#### Removing DOM Elements

```js
app.innerHTML = `
<h1>
JS DOM</h1>`;

const div = document.createElement("div");
div.innerText = "I am a message";

app.append(div);

// setTimeout(() => div.remove(), 2500);

//Old Way

setTimeout(() => div.parentNode.removeChild(div), 2500);
```

## Querying and Traversing the DOM

#### Querying DOM Nodes (HTMLCollections)

```js
app.innerHTML = `
<h1>JavaScript DOM</h1>
<ul id="list"></ul>
`;

const data = ["Earth", "Fire", "Water"];
const fragment = document.createDocumentFragment();

data.forEach((item) => {
  const li = document.createElement("li");
  li.className = "list-item";
  li.innerText = item;
  fragment.append(li);
});

//getElementByID : HTMLElement
const ulFromId = document.getElementById("list");
console.log(ulFromId);
ulFromId.append(fragment);

//getElementsByClassName : HTMLCollection
const listItemsFromClassName = ulFromId.getElementsByClassName("list-item");
console.log(listItemsFromClassName);

//getElementByTagName
const listItemsFromTagName = ulFromId.getElementsByTagName("li");
console.log(listItemsFromTagName);

//Demonstrate live collection
const newListItem = document.createElement("li");
newListItem.className = "list-item";
newListItem.innerText = "Air!";
ulFromId.append(newListItem);

//No need to query again!
console.log(listItemsFromClassName);
console.log(listItemsFromTagName);
```

#### Querying DOM Nodes (NodeLists)

```js
app.innerHTML = `
<h1>JavaScript DOM</h1>
<ul id="list"></ul>
`;

const data = ["Earth", "Fire", "Water"];
const fragment = document.createDocumentFragment();

data.forEach((item) => {
  const li = document.createElement("li");
  li.className = "list-item";
  li.innerText = item;
  fragment.append(li);
});

const ulFromQuerySeletor = document.querySelector("ul");
console.log(ulFromQuerySeletor);
ulFromQuerySeletor.append(fragment);

const listItemsFromQSA = ulFromQuerySeletor.querySelectorAll(".list-item");
console.log(listItemsFromQSA);

const newListItem = document.createElement("li");
newListItem.className = "list-item";
newListItem.innerText = "Air";
ulFromQuerySeletor.append(newListItem);

console.log(
  listItemsFromQSA,
  ulFromQuerySeletor.querySelectorAll(".list-item")
);
```

#### Looping over DOM Elements

```js
app.innerHTML = `
<h1>JavaScript DOM</h1>
<ul id="list">
<li>Earth</li>
<li>Fire</li>
<li>Water</li>
<li>Air</li>
</ul>
`;

const listItems = document.querySelectorAll("#list li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i]);
}

for (const item of listItems) {
  console.log(item);
}

[...listItems].forEach((item) => console.log(item));

Array.from(listItems).forEach((item) => console.log(item));
```

#### Finding Child Elements

```js
app.innerHTML = `
<ul id="list">
<li>Earth</li>
<li>Fire</li>
<li>Air</li>
<li>Water</li>
</ul>
`;

const list = document.querySelector("#list");
const selectedIndex = 2;

//querySelectorAll : NodeList
const queryChildren = list.querySelectorAll("li");
console.log(queryChildren[selectedIndex], queryChildren.length);

// .children : HTMLCollection
console.log(list.children[selectedIndex], list.children.length);

//.childNodes : NodeList
console.log(list.childNodes[selectedIndex], list.childNodes.length);

//first/last
console.log(list.firstChild, list.firstElementChild);
console.log(list.lastChild, list.lastElementChild);
```

#### Finding Parent Elements

```js
app.innerHTML = `
<h1>JavaScript DOM</h1>
<div class="item"></div>
`;

const item = document.querySelector(".item");

console.log(item.parentNode);
console.log(item.parentElement);

console.log(item.closest("#app"));
console.log(item.closest("body"));
```

#### Finding Sibling Elements

```js
app.innerHTML = `
<h1>JS DOM</h1>
<ul id="list">
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
</ul>
`;

const listItem = document.querySelector("#list li");
console.log(listItem);

//Any DOM Nodes
console.log(listItem.nextSibling);
console.log(listItem.previousSibling);

//Any Element Nodes
console.log(listItem.nextElementSibling);
console.log(listItem.previousElementSibling);
```

## Attributes, Styles and Classes

#### Element Properties versus HTML Attributes

```js
app.innerHTML = `
<h1>JS DOM</h1>
<input type="text" />
`;

const input = document.querySelector("input");
input.value = 2;
console.log(parseInt(input.value, 10));
```

#### Setting and Getting HTML Attributes

```js
app.innerHTML = `
<h1>JS DOM</h1>
<button type="button">
Close Me
</button>
`;

const button = document.querySelector("button");

//SET
button.setAttribute("aria-label", "Close this Modal");

//GET
const value = button.getAttribute("aria-label");
console.log(value);

//.attributes
console.log(button.attributes["aria-label"]);
```

#### Setting and Getting Inline Styles

```js
app.innerHTML = `
<button type="button">
Click Me
</button>
`;

//<button style="padding : 25px;margin:10px 0;">
const button = document.querySelector("button");

//CSSText
button.style.cssText = "padding : 25px; margin: 10px 0px";

//direct property access
button.style.fontSize = "22px";

console.log(button.style.fontSize);
```

#### Setting and Getting Classes

```js
app.innerHTML = `
<h1>JS DOM</h1>
<button type="button" class='one two'>
Click Me!
</button>
`;

const button = document.querySelector("button");

//Old way : Set
button.className += " three";

//Old way : Get
console.log(button.className.split(" "));

//New way : ClassList
//Add
button.classList.add("four");

//remove
button.classList.remove("one");

//Toggle
button.classList.toggle("five");
setTimeout(() => button.classList.toggle("five"), 2500);

//Replace

button.classList.replace("two", "six");
```

## Events and Event Listeners

### Adding Event Listeners and Event Object

```js
app.innerHTML = `
<button type="button">Click Me</button>
`;

const button = document.querySelector("button");

function handleClick(event) {
  console.log(this, event.target);
}

button.addEventListener("click", handleClick);

//arrow functions

button.addEventListener("dblclick", (event) => {
  console.log(this, event.targ, "Double-Clicked");
});
```

#### Removing Event Listeners

```js
app.innerHTML = `
<button type="button">Click Me</button>
`;

const button = document.querySelector("button");

function handleClickOnce(event) {
  console.log(event.target);
  button.removeEventListener("click", handleClickOnce);
}

button.addEventListener("click", handleClickOnce);

button.addEventListener(
  "dblclick",
  () => {
    console.log("Double Click");
  },
  { once: true }
);
```

#### Event Bubbling, Capturing and Propagation

```js
app.innerHTML = `
<h1>JS DOM</h1>
<div class="one">
<div class="two">
<button type="button" class="three">Click Me</button>
</div>
</div>
`;

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

function handleClick(event) {
  //   event.stopPropogation();
  event.stopImmediatePropagation();
  console.log(event.target);
}

one.addEventListener("click", handleClick);
two.addEventListener("click", handleClick);
three.addEventListener("click", handleClick);

three.addEventListener("click", (event) => console.log(event), {
  capture: true,
});
```

#### Preventing Default Event Actions

```js
app.innerHTML = `
<h1>JS DOM</h1>
<form>
    <label>
    Sign-up Email
    <input type="email">
    </label>
    <label>I Agree to the terms
    <input type="checkbox">
    </label>
</form>
`;

const form = document.querySelector("form");
const email = form.querySelector('input[type="email"]');
const checkbox = form.querySelector('input[type="checkbox"]');

function hadleSubmit(event) {
  event.preventDefault();
  console.log(email.value, checkbox.checked);
}

form.addEventListener("submit", hadleSubmit);
```

####

```js
app.innerHTML = `
<h1>JavaScript</h1>
<button type="button">
    Add Item
</button>
<ul id="list">
    <li>Item 1</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>    
`;

const button = document.querySelector("button");
const list = document.querySelector("#list");

function handleClick(event) {
  if (event.target.nodeName.toLowerCase() != "li") {
    return;
  }
  console.log(event.target.innerText);
}

list.addEventListener("click", handleClick);

button.addEventListener("click", () => {
  const items = list.querySelector("li");
  const li = document.createElement("li");
  li.innerText = `Item ${items.length + 1}`;
  list.append(li);
});
```

#### Keyboard Events

```js
app.innerHTML = `
<h1>JS DOM</h1>`;

document.addEventListener("keydown", (event) => {
  //   console.log(event.key, event.code);
  switch (event.key) {
    case "ArrowUp": {
      console.log("Up!");
      event.preventDefault();
      break;
    }
    case "ArrowDown": {
      console.log("Down!");
      event.preventDefault();
      break;
    }
  }
});
```

### Forms and Events

#### Accessing Forms and Elements

```js
app.innerHTML = `
<h1>JavaScript</h1>
<form name="order">
    <label>
    Your Name
    <input type="text" name="fullname">
    </label>
</form>
`;

const form = document.forms.order;

const { fullname } = form.elements;

function handleInput(event) {
  //accessing value
  console.log(event.target.value);
}

fullname.addEventListener("input", handleInput);

console.log(fullname);
```

#### Form Submit Event and FormData

```js
app.innerHTML = `
<h1>JavaScript</h1>
<form name="order">
    <label>
    Your Name
    <input type="text" name="fullname">
    </label>
    <label>
        Which pizza would you like ?
        <select name="pizza">
            <option value="xyz">xyz</option>
            <option value="xya">xya</option>
            <option value="xyb">xyb</option>
        </select>
    </label>
    <button type="submit">
        Submit
    </button>
</form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  console.log(new FormData(event.target));
}

function handleFormData(event) {
  console.log([...event.formData]);
  console.log([...event.formData.values()]);
  const entries = event.formData.entries();
  for (const entry of entries) {
    console.log(entry);
  }
}

form.addEventListener("submit", handleSubmit);
form.addEventListener("formdata", handleFormData);
```

#### Transforming FormData for the Server

```js
app.innerHTML = `
<h1>JavaScript</h1>
<form name="order">
    <label>
    Your Name
    <input type="text" name="fullname">
    </label>
    <label>
        Which pizza would you like ?
        <select name="pizza">
            <option value="xyz">xyz</option>
            <option value="xya">xya</option>
            <option value="xyb">xyb</option>
        </select>
    </label>
    <div>
      What size?
      <label>
        small
        <input type="radio" name="size" value="small" checked>
      </label>
      <label>
        medium
        <input type="radio" name="size" value="medium">
      </label>
      <label>
        large
        <input type="radio" name="size" value="large">
      </label>
    </div>
    <label>
      Quantity
      <input type="number" name="quantity" value="1">
    </label>
    <button type="submit">
        Submit
    </button>
</form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  //query String
  const asString = new URLSearchParams(formData).toString();
  console.log(asString);
  //JSON
  const asJSON = JSON.stringify(Object.fromEntries(formData));
  console.log(asJSON);
}

form.addEventListener("submit", handleSubmit);
```

#### Posting FormData via Fetch API

```js
app.innerHTML = `
<h1>JavaScript</h1>
<form name="order">
    <label>
    Your Name
    <input type="text" name="fullname">
    </label>
    <label>
        Which pizza would you like ?
        <select name="pizza">
            <option value="xyz">xyz</option>
            <option value="xya">xya</option>
            <option value="xyb">xyb</option>
        </select>
    </label>
    <div>
      What size?
      <label>
        small
        <input type="radio" name="size" value="small" checked>
      </label>
      <label>
        medium
        <input type="radio" name="size" value="medium">
      </label>
      <label>
        large
        <input type="radio" name="size" value="large">
      </label>
    </div>
    <label>
      Quantity
      <input type="number" name="quantity" value="1">
    </label>
    <button type="submit">
        Submit
    </button>
</form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  //query String
  const asString = new URLSearchParams(formData).toString();
  console.log(asString);
  //JSON
  const asJSON = JSON.stringify(Object.fromEntries(formData));
  console.log(asJSON);

  fetch("/fakeapi", {
    method: "post",
    headers: {
      //   "Content-Type": "application/x-www-form-urlencoded",
      "Content-Type": "application/json",
    },
    // body: asString,
    body: asJSON,
  });
}

form.addEventListener("submit", handleSubmit);
```

#### Handling Input Elements

```js
app.innerHTML = `
<h1>JavaScript</h1>
<form name="example">
    <input type="text" name="myInput" value="Hello">
</form>
`;

const form = document.forms.example;
const input = form.myInput;

//1. Properties that are useful
console.dir(input);
//Set
input.value = "GoodBye";
// input.readOnly = true;
// input.disabled = true;

//Get
console.log(input.value);

//2. Events
//other events : cut ,copy and paste
input.addEventListener("focus", () => console.log("Foucs"));
input.addEventListener("blur", () => console.log("Blur"));
input.addEventListener("input", () => console.log("Input"));
input.addEventListener("change", () => console.log("Change"));

//3. Methods
//focus an input

input.focus();
setTimeout(() => input.blur(), 2500);
```

#### Handling Radio Input Elements

```js
app.innerHTML = `
<h1>JavaScript</h1>
<form name="example">
<div class="container">
    <input type="radio" id="red" name="color" value="red" checked>
    <label for="red">Red</label>

    <input type="radio" id="blue" name="color" value="blue">
    <label for="blue">Blue</label>

    <input type="radio" id="green" name="color" value="green">
    <label for="green">Green</label>
</div>
</form>
`;

const form = document.forms.example;
const radios = [...form.elements.color];

//1. Properties that are useful
radios.forEach((radio) => {
  console.log(radio.value);
  console.log(radio.checked);
});

//2. Events

const container = form.querySelector(".container");

container.addEventListener("change", () => {
  const checked = radios.find((radio) => radio.checked).value;
  console.log(checked);
});
```

#### Handling Checkbox Input Elements

```js
app.innerHTML = `
<h1>JavaScript</h1>
    <input type="checkbox" id="checkbox">
    <label for="checkbox">Subscribe to Newsletter</label>
`;

const checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    alert("You have subscribed to the newsletter.");
  } else {
    alert("You have unsubscribed from the newsletter.");
  }
});
```

#### Handling Select Elements

```js
app.innerHTML = `
<h1>JavaScript</h1>
<select id="colors">
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</select>
`;

const select = document.querySelector("#colors");
select.addEventListener("change", function () {
  const selectedOption = select.options[select.selectedIndex];
  console.log(selectedOption.value);
});
```

## Project Build

#### Structuring our HTML Template

```js
app.innerHTML = `
<div class="todos">
<div class="todos-header">
<h3 class="todos-title">Todo List</h3>
<div>
    <p>You have <span class="todos-count"></span></p>
    <button type="button" class="todos-clear" style="display:none;">
        Clear Completed
    </button>
</div>
</div>
<form class="todos-form" name="todos">
    <input type="text" placeholder="What's next ?" name="todo">
</form>
<ul class="todos-list">
<li></li>
</ul>
</div>
`;
```

#### State Initialization and Submit Events

```js
//State

let todos = [];

//Selectors

const form = document.forms.todos;
const input = form.elements.todo;

//functions
function addTodo(event) {
  event.preventDefault();
  const label = input.value.trim();
  const complete = false;
  todos = [
    ...todos,
    {
      label,
      complete,
    },
  ];
  console.log(todos);
  input.value = "";
}

//init
function init() {
  //Add Todo
  form.addEventListener("submit", addTodo);
}
init();
```

####

```js
function renderTodos(todos) {
  let todoString = "";
  todos.forEach((todo, index) => {
    todoString += `
    <li data-id="${index}">
        <input type="checkbox">
        <span>${todo.label}</span>
        <button type="button"></button>
    </li>
    `;
  });
  list.innerHTML = todoString;
}
```

#### Updating State via Event Delegation

```js
//State

let todos = [];

//Selectors
const root = document.querySelector(".todos");
const list = root.querySelector(".todos-list");
const count = root.querySelector(".todos-count");
const form = document.forms.todos;
const input = form.elements.todo;

//functions
function renderTodos(todos) {
  let todoString = "";
  todos.forEach((todo, index) => {
    todoString += `
    <li data-id="${index}"${todo.complete ? ' class="todos-complete"' : ""} >
        <input type="checkbox"${todo.complete ? " checked" : ""}>
        <span>${todo.label}</span>
        <button type="button"></button>
    </li>
    `;
  });
  list.innerHTML = todoString;
  count.innerText = todos.filter((todo) => !todo.complete).length;
}

function updateTodo(event) {
  const id = parseInt(event.target.parentNode.getAttribute("data-id"), 10);
  const complete = event.target.checked;
  todos = todos.map((todo, index) => {
    if (index === id) {
      return {
        ...todo,
        complete,
      };
    }
    return todo;
  });
  console.log(todos);
  renderTodos(todos);
}

function addTodo(event) {
  event.preventDefault();
  const label = input.value.trim();
  const complete = false;
  todos = [
    ...todos,
    {
      label,
      complete,
    },
  ];
  renderTodos(todos);
  input.value = "";
}

//init
function init() {
  //Add Todo
  form.addEventListener("submit", addTodo);
  //Update Todo
  list.addEventListener("change", updateTodo);
}
init();
```

#### Deleting Items from State

```js
function deleteTodo(event) {
  if (event.target.nodeName.toLowerCase() != "button") {
    return;
  }
  const id = parseInt(event.target.parentNode.getAttribute("data-id"), 10);
  const label = event.target.previousElementSibling.innerText;
  if (window.confirm(`Delete ${label}?`)) {
    todos = todos.filter((todo, index) => index !== id);
    renderTodos(todos);
  }
}
```
