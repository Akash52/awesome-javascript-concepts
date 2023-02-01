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
