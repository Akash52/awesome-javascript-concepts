### 01 let and const

```js
what is defferent between let and const
- let is block scoped
- const is block scoped
- const is immutable
- let is mutable

const name = 'John';
name = 'John';
console.log(name);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

console.log(checkScope());

function checkPass(password) {
  'use strict';
  if (password.length < 8) {
    return 'Password must be longer than 8 characters';
  }
  if (password.search(/[a-z]/) === -1) {
    return 'Password must contain at least one lowercase character';
  }
  if (password.search(/[A-Z]/) === -1) {
    return 'Password must contain at least one uppercase character';
  }
  if (password.search(/[0-9]/) === -1) {
    return 'Password must contain at least one number';
  }
  return 'Password is valid';
}

console.log(checkPass('Adfs1afafsf'));
```
