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
