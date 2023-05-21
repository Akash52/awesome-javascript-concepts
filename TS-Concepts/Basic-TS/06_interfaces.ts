//Interface ?
//Interface is used to define the shape of the data that is being returned.


interface Vehicle {
    name:string;
    year:number;
    broken:boolean;
    summary():string;
}


const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary():string {
        return `Name : ${this.name}`;
    }
};

//these syntaxes is so long, we can use interfaces to shorten it.

// const printVehicle = (vehicle:{name:string;year:number;broken:boolean}):void => {
//     console.log(`Name : ${vehicle.broken}`);
//     console.log(`Year : ${vehicle.name}`);
//     console.log(`Broken : ${vehicle.year}`);
// };

// printVehicle(oldCivic);

const printVehicle = (vehicle:Vehicle):void => {
    console.log(`Name : ${vehicle.broken}`);
    console.log(`Year : ${vehicle.name}`);
    console.log(`Broken : ${vehicle.year}`);
    console.log(`Summary : ${vehicle.summary()}`);
};

printVehicle(oldCivic);

//In Interface we can use any types.

interface Reportable {
    summary():string;
}

const oldCivice = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary():string {
        return `Name : ${this.name}`;
    }
};

//Code reuse with interfaces.

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary():string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item:Reportable):void => {
    console.log(`Summary : ${item.summary()}`);
}

printSummary(oldCivice);
printSummary(drink);

