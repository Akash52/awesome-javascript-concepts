//Classes in TypeScript
//Classes are a way to create a blueprint for creating objects.

class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

//  const vehicle = new Vehicle();
//  vehicle.drive();
//  vehicle.honk();

//Inherit

class Car extends Vehicle {}

const car = new Car();
car.drive();
car.honk();
