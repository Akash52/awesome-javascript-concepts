//Function

function myFunction() {
  console.log("Function ::: ", this);
}

myFunction();

//Object literal

const myObject = {
  myFunction: function () {
    console.log("Object literal ::: ", this);
  },
};

myObject.myFunction();

//Classes

class MyClass {
  myFunction() {
    console.log("Class ::: ", this);
  }
}

const myClass = new MyClass();
myClass.myFunction();
