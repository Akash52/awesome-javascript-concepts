```
//DOM (Document object Model)

//Single Element Selector
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1"));

//Multiple Element Selector

console.log(document.querySelectorAll(".item"));

//Work with Event

const btn = document.querySelector(".btn");
btn.style.background = "red";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#ccc";
  console.log("click");
});

//Work with form

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please Enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
  }
}
```
