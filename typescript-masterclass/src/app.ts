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
