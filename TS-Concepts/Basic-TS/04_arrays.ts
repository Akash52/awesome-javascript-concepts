
//Array in TypeScript

const cars:string[] = ["Ford", "Chevy", "Honda"];

//Type inference for Arrays
const bikes = ["Suzuki", "Yamaha", "Kawasaki"];

//Type script doesn't know empty type of the array.
const carMakers = []; //Any

//2d Array
const carsByMake: string[][] = [["F150"], ["Corvette"], ["Camaro"]];

//Help with inference when extracting values from an array

const bike = bikes[0];
const myBike = bikes.pop();

//Prevent incompatible values

bikes.push(100);



bikes.map((bike: string) => {
    return bike.toUpperCase();
    });

    //Flexible types
    const importantDate: (Date | string)[] = [];
    importantDate.push("2030-10-10");
    importantDate.push(new Date());
    importantDate.push("2030-10-10");


    










