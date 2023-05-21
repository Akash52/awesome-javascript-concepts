//Object destructuring

const profile = {
    name: "Alex",
    age: 20,
    coords: {
      lat: 0,
      lng: 15,
    },
  
    setAge(age: number): void {
      this.age = age;
    },
  };
  
  //If we want to destructure multiple properties from an object, we can use the following syntax:
  const { age , name }: { age: number,name:string } = profile;
  
  //These Create Problems Whene Deifferent Types are used.
  // const {age , name }:number = profile;
  
  const {
    coords: { lat, lng },
  }: { coords: { lat: number; lng: number } } = profile;