//Pure Functions

//f(x) = x + 1

const f = (x) => x + 1;

//Ex 1 - Global State

const COST_OF_ITEM = 17;

const cartTotal = (quantity) => {
  COST_OF_ITEM * quantity;
};
// console.log(cartTotal(2));
// console.log(cartTotal(2));

//Ex. 2 - Same input , different output

const generateID = () => Math.floor(Math.random() * 10000);

// console.log(generateID());
// console.log(generateID());
// console.log(generateID());

const createUser = (name, age) => ({
  id: generateID(),
  name,
  age,
});

// console.log(createUser('Akash', 33));
// console.log(createUser('Akash', 33));
// console.log(createUser('Akash', 33));

//Ex. 3 -  Side Effects #1

let id = 0;

const createFoodItem = (name) => ({
  id: ++id,
  name,
});

// console.log(createFoodItem('CheeseBurger'));
// console.log(createFoodItem('Sandwich'));

//Ex . 4 - Side Effects #2 - Outside World

const logger = (msg) => {
  console.log(msg);
};

logger('Hi Jhon');
logger('Hi');
