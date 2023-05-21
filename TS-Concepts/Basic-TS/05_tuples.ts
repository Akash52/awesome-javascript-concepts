//TypeScript Tuples
//Tuples in TypeScript are arrays that can have multiple types of values.

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
};

const pepsi: [string, boolean, number] = ["brown", true, 40];

//Typescript aliases is a way to create a short name for a type.

//For creating an alias, use the type keyword.

type Drink = [string, boolean, number];

const cocaCola: Drink = ["brown", true, 30];
const sprite: Drink = ["clear", true, 30];
const ThumsUp: Drink = ["brown", true, 40];

//Tuples problem code readability

const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};





