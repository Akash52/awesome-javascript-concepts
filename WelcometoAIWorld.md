## Understanding Prototypes and Prototype Chains in JavaScript
JavaScript's inheritance model is fundamentally different from classical object-oriented languages like Java or C++. Instead of classes, JavaScript uses prototypes as the foundation for inheritance. Let's break down how this works in everyday terms with practical examples.

## What Are Prototypes?
In JavaScript, every object has an internal link to another object called its prototype. When you try to access a property or method that doesn't exist on an object, JavaScript automatically looks for it in the object's prototype, and if not found there, it continues up the prototype chain.

```js
// Create a simple object
const animal = {
  eats: true,
  sleep() {
    console.log('Zzz...');
  }
};

// Create another object with animal as its prototype
const rabbit = Object.create(animal);
rabbit.jumps = true;

// Accessing properties
console.log(rabbit.jumps); // true (own property)
console.log(rabbit.eats);  // true (inherited from animal)
rabbit.sleep();           // Zzz... (method inherited from animal)
```

## The Prototype Chain
The prototype chain is the series of linked objects that JavaScript traverses when looking for a property. This chain ends when it reaches an object with a null prototype (typically Object.prototype).

```js
// A simple visualization of the prototype chain
const grandparent = { lastName: 'Smith' };
const parent = Object.create(grandparent);
parent.firstName = 'John';
const child = Object.create(parent);
child.name = 'Junior';

console.log(child.name);       // 'Junior' - own property
console.log(child.firstName);  // 'John' - from parent
console.log(child.lastName);   // 'Smith' - from grandparent

// Check the prototype chain
console.log(Object.getPrototypeOf(child) === parent);       // true
console.log(Object.getPrototypeOf(parent) === grandparent); // true
```

## Property Shadowing
When a property exists on both an object and its prototype, the object's own property takes precedence. This is called property shadowing.

```js
const vehicle = {
  type: 'Vehicle',
  getType() {
    return this.type;
  }
};

const car = Object.create(vehicle);
car.type = 'Car'; // Shadows the 'type' property from vehicle

console.log(car.getType()); // 'Car' - uses car's own 'type' property
console.log(vehicle.getType()); // 'Vehicle' - uses vehicle's 'type' property
```

## Checking and Modifying Prototypes
JavaScript provides several ways to work with prototypes:
```js
// Creating an object with a specific prototype
const animal = { eats: true };
const dog = Object.create(animal);

// Checking an object's prototype
console.log(Object.getPrototypeOf(dog) === animal); // true

// Checking if a property is an object's own (not inherited)
console.log(dog.hasOwnProperty('eats')); // false
console.log(animal.hasOwnProperty('eats')); // true

// Setting an object's prototype (ES6+)
const cat = {};
Object.setPrototypeOf(cat, animal); // Sets animal as cat's prototype
console.log(cat.eats); // true
```

## Performance Considerations
Modifying prototypes at runtime can impact performance because JavaScript engines optimize based on stable prototype structures:
```js
// Avoid doing this in performance-critical code
Array.prototype.customMethod = function() {
  // This affects ALL arrays and can slow down your application
};

// Better approach: extend without modifying built-in prototypes
const enhancedArray = {
  customMethod: function(array) {
    // Implementation that works on the provided array
  }
};
```

## Object Creation with Prototypes in JavaScript
Let's explore the various ways to create objects with specific prototypes in JavaScript, focusing on practical applications and performance considerations.

### Using Object.create() for Prototype Assignment
Object.create() is a powerful method that creates a new object with a specified prototype object. This gives you direct control over the prototype chain without using constructors.

```JS
// Create a base prototype object with shared functionality
const vehiclePrototype = {
  start() {
    console.log('Engine started');
  },
  stop() {
    console.log('Engine stopped');
  }
};

// Create a new object with vehiclePrototype as its prototype
const car = Object.create(vehiclePrototype);
car.type = 'Sedan'; // Add own property

// The method is accessed via the prototype chain
car.start(); // Engine started

// Verify that start is not an own property
console.log(car.hasOwnProperty('start')); // false
console.log(car.hasOwnProperty('type')); // true
```

# Memory Efficiency with Shared Prototypes
When multiple objects need to share behavior, placing methods on a prototype is more memory-efficient than duplicating them on each instance:

```js
// Inefficient approach - each object gets its own copy of methods
function createCarInefficient(type) {
  return {
    type,
    start() { console.log('Engine started'); },
    stop() { console.log('Engine stopped'); }
  };
}

// Efficient approach - methods are shared via prototype
const carMethods = {
  start() { console.log('Engine started'); },
  stop() { console.log('Engine stopped'); }
};

function createCarEfficient(type) {
  const car = Object.create(carMethods);
  car.type = type;
  return car;
}

// Create 1000 cars with each approach
const inefficientCars = Array.from({ length: 1000 }, () => createCarInefficient('Sedan'));
const efficientCars = Array.from({ length: 1000 }, () => createCarEfficient('Sedan'));
// The efficient approach uses significantly less memory

```

## Avoiding Mutable State on Prototypes
A common pitfall is placing mutable data on prototypes, which can lead to unexpected behavior:

```js
// BAD PRACTICE: Mutable data on prototype
function BadCar() {}
BadCar.prototype.features = ['GPS']; // Shared array - will be modified by all instances

const car1 = new BadCar();
const car2 = new BadCar();

car1.features.push('Bluetooth');
console.log(car2.features); // ['GPS', 'Bluetooth'] - Unexpectedly modified!

// GOOD PRACTICE: Keep mutable state on instances
function GoodCar() {
  this.features = ['GPS']; // Each instance gets its own array
}

const car3 = new GoodCar();
const car4 = new GoodCar();

car3.features.push('Bluetooth');
console.log(car4.features); // ['GPS'] - Not affected

```

## Function Constructors and Prototypes
Every JavaScript function has a prototype property that becomes the prototype for objects created with the new keyword:

```js
function User(name) {
  this.name = name;
}

// Add methods to the prototype
User.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

// Create instances
const user1 = new User('Alice');
const user2 = new User('Bob');

console.log(user1.greet()); // "Hello, I'm Alice"
console.log(user2.greet()); // "Hello, I'm Bob"

// Add a method to the prototype after instances are created
User.prototype.sayGoodbye = function() {
  return `Goodbye from ${this.name}`;
};

// All existing instances get the new method
console.log(user1.sayGoodbye()); // "Goodbye from Alice"
```

## Dynamic Prototype Manipulation
While possible, dynamically changing an object's prototype should be used sparingly due to performance implications:

```js
// Two different behavior sets
const flyingBehavior = {
  fly() { console.log('Flying high!'); }
};

const swimmingBehavior = {
  swim() { console.log('Swimming deep!'); }
};

// Create an object with initial behavior
const animal = Object.create(flyingBehavior);
animal.name = 'Eagle';
animal.fly(); // Flying high!

// Dynamically change behavior based on conditions
function adaptToEnvironment(animal, environment) {
  if (environment === 'water') {
    Object.setPrototypeOf(animal, swimmingBehavior);
  } else {
    Object.setPrototypeOf(animal, flyingBehavior);
  }
}

adaptToEnvironment(animal, 'water');
animal.swim(); // Swimming deep!

// WARNING: Frequent changes to an object's prototype can hurt performance

```

## Factory Functions for Consistent Object Creation
Factory functions provide a clean way to create objects with consistent prototypes:

```js
// A factory function that creates objects with controlled prototype chains
function createPerson(name, age, extraProperties = {}) {
  // Base prototype with shared methods
  const personPrototype = {
    introduce() {
      return `Hi, I'm ${this.name}, ${this.age} years old`;
    },
    celebrateBirthday() {
      this.age++;
      return `Happy ${this.age}th birthday, ${this.name}!`;
    }
  };
  
  // Create the person object with the prototype
  const person = Object.create(personPrototype);
  
  // Add own properties
  person.name = name;
  person.age = age;
  
  // Add any extra properties
  Object.keys(extraProperties).forEach(key => {
    person[key] = extraProperties[key];
  });
  
  return person;
}

const john = createPerson('John', 30, { occupation: 'Developer' });
console.log(john.introduce()); // "Hi, I'm John, 30 years old"
console.log(john.occupation); // "Developer"

```

## Performance Considerations
The depth of the prototype chain affects property lookup performance:

```js
// A shallow prototype chain (faster lookups)
const shallowProto = { method() { return 'result'; } };
const shallowObj = Object.create(shallowProto);

// A deep prototype chain (slower lookups)
const level3 = { method() { return 'result'; } };
const level2 = Object.create(level3);
const level1 = Object.create(level2);
const deepObj = Object.create(level1);

// Performance testing function
function testLookupPerformance(obj, iterations = 1000000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    obj.method();
  }
  return performance.now() - start;
}

// In real applications, shallow chains perform better
// especially for frequently accessed properties

```

## Checking Property Ownership
When working with prototype chains, it's important to distinguish between own and inherited properties:

```js
const proto = { inherited: true };
const obj = Object.create(proto);
obj.own = true;

// Check if a property exists on the object or its prototype chain
console.log('own' in obj); // true
console.log('inherited' in obj); // true

// Check if a property is an own property (not inherited)
console.log(obj.hasOwnProperty('own')); // true
console.log(obj.hasOwnProperty('inherited')); // false

// Iterating only over own properties
const ownProps = Object.keys(obj); // ['own']
console.log(ownProps);

// Iterating over all enumerable properties (including inherited)
for (const key in obj) {
  console.log(key); // 'own', then 'inherited'
}

// Iterating over all enumerable properties but filtering out inherited ones
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // only 'own'
  }
}
```

## Advanced JavaScript Object Creation Techniques
Let's continue exploring advanced JavaScript object creation patterns, focusing on performance optimizations, constructor patterns, and the versatility of Object.create().

## Inline Caching and Performance Optimization
Modern JavaScript engines use inline caching to optimize property lookups in the prototype chain:

```JS
// JavaScript engines optimize property access patterns
function createPerson(name) {
  // Consistent property initialization helps V8 optimize
  this.name = name;
  this.created = Date.now();
}

// Methods on prototype are better for performance
createPerson.prototype.getName = function() {
  return this.name;
};

// Creating many objects with the same "shape"
const people = [];
for (let i = 0; i < 1000; i++) {
  people.push(new createPerson(`Person ${i}`));
}

// Accessing properties in a consistent way helps inline caching
people.forEach(person => {
  person.getName();
});

// AVOID: Adding properties dynamically after creation
// This breaks the object's "hidden class" and hurts performance
// people[0].newProperty = 'value';

```

## Constructor Functions and the new Keyword
The new keyword performs several operations when used with a constructor function:

```JS

function Vehicle(type, color) {
  // 'this' is bound to a new object that inherits from Vehicle.prototype
  this.type = type;
  this.color = color;
  
  // If no explicit return value is provided, 'this' is returned automatically
}

Vehicle.prototype.getDescription = function() {
  return `A ${this.color} ${this.type}`;
};

const car = new Vehicle('car', 'blue');
console.log(car.getDescription()); // "A blue car"

// What happens behind the scenes with 'new':
function createNewInstance(Constructor, ...args) {
  // 1. Create a new object with the constructor's prototype
  const instance = Object.create(Constructor.prototype);
  
  // 2. Call the constructor with 'this' bound to the new object
  const result = Constructor.apply(instance, args);
  
  // 3. Return the new object unless the constructor returns an object
  return (typeof result === 'object' && result !== null) ? result : instance;
}

// This would be equivalent to using 'new'
const manualCar = createNewInstance(Vehicle, 'car', 'red');
console.log(manualCar.getDescription()); // "A red car"

```

# Constructor Safety Patterns
Protect against forgetting the new keyword:

```JS
function SafeConstructor(name) {
  // Ensure 'new' was used
  if (!(this instanceof SafeConstructor)) {
    return new SafeConstructor(name);
  }
  
  this.name = name;
}

// Works with 'new'
const instance1 = new SafeConstructor('Instance 1');
console.log(instance1.name); // "Instance 1"

// Also works without 'new'
const instance2 = SafeConstructor('Instance 2');
console.log(instance2.name); // "Instance 2"

```

## Private Variables with Constructors
Use closures to create private variables:

```js
function Counter() {
  // Private variable - not accessible outside the constructor
  let count = 0;
  
  // Public methods that can access the private variable
  this.increment = function() {
    return ++count;
  };
  
  this.decrement = function() {
    return --count;
  };
  
  this.getCount = function() {
    return count;
  };
}

const counter = new Counter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.count);       // undefined - private variable

```


## Constructor Inheritance Patterns
Implement inheritance between constructor functions:

```js
// Base constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  return "Some generic sound";
};

// Derived constructor
function Dog(name, breed) {
  // Call the parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Set up the prototype chain
Dog.prototype = Object.create(Animal.prototype);
// Fix the constructor property
Dog.prototype.constructor = Dog;

// Override a method
Dog.prototype.makeSound = function() {
  return "Woof!";
};

// Add a new method
Dog.prototype.fetch = function() {
  return `${this.name} is fetching the ball!`;
};

const rex = new Dog('Rex', 'German Shepherd');
console.log(rex.name);        // "Rex"
console.log(rex.breed);       // "German Shepherd"
console.log(rex.makeSound()); // "Woof!"
console.log(rex.fetch());     // "Rex is fetching the ball!"
console.log(rex instanceof Dog);    // true
console.log(rex instanceof Animal); // true
```

## Advanced Object.create() Patterns
Object.create() offers more control over object creation than constructors:

```js
// Create an object with null prototype (no inherited properties)
const pureObject = Object.create(null);
pureObject.data = 'Some data';
console.log(pureObject.toString); // undefined - no inherited methods

// Create an object with custom properties using descriptors
const person = Object.create(Object.prototype, {
  name: {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
  },
  // Read-only property
  id: {
    value: 'abc123',
    writable: false,
    enumerable: true,
    configurable: false
  }
});

console.log(person.name); // "John"
person.name = 'Jane';
console.log(person.name); // "Jane"

// Trying to change a read-only property (fails silently in non-strict mode)
person.id = 'xyz789';
console.log(person.id); // Still "abc123"

```

## Multi-level Inheritance with Object.create()
Create complex inheritance chains without constructors:

```js
// Base object with shared methods
const entityMethods = {
  init(id, name) {
    this.id = id;
    this.name = name;
    return this;
  },
  identify() {
    return `Entity: ${this.name} (ID: ${this.id})`;
  }
};

// Mid-level object that inherits from entityMethods
const characterMethods = Object.create(entityMethods);
characterMethods.setHealth = function(health) {
  this.health = health;
  return this;
};
characterMethods.status = function() {
  return `${this.name} has ${this.health} health`;
};

// Specialized object that inherits from characterMethods
const playerMethods = Object.create(characterMethods);
playerMethods.levelUp = function() {
  this.level = (this.level || 1) + 1;
  return this;
};
playerMethods.getLevel = function() {
  return `Level ${this.level || 1}`;
};

// Create a player instance
const player = Object.create(playerMethods)
  .init('p1', 'Hero')
  .setHealth(100);

player.levelUp();

console.log(player.identify()); // "Entity: Hero (ID: p1)"
console.log(player.status());   // "Hero has 100 health"
console.log(player.getLevel()); // "Level 2"
```

## Mixins with Object.create()
Implement mixins to share behavior across different object hierarchies:

```js
// Mixin objects with specialized behaviors
const loggingMixin = {
  log(message) {
    console.log(`[LOG] ${message}`);
  },
  warn(message) {
    console.log(`[WARN] ${message}`);
  },
  error(message) {
    console.log(`[ERROR] ${message}`);
  }
};

const storageMixin = {
  save(key, data) {
    console.log(`Saving ${key}: ${JSON.stringify(data)}`);
    // In a real app, this would use localStorage or similar
  },
  load(key) {
    console.log(`Loading data for key: ${key}`);
    // In a real app, this would retrieve from storage
    return { dummy: 'data' };
  }
};

// Function to apply mixins to an object
function applyMixins(target, ...mixins) {
  mixins.forEach(mixin => {
    Object.keys(mixin).forEach(key => {
      // Don't override existing methods
      if (!target[key]) {
        target[key] = mixin[key];
      }
    });
  });
  return target;
}

// Create a base object
const userService = {
  getUser(id) {
    return { id, name: 'User ' + id };
  }
};

// Apply mixins to enhance functionality
applyMixins(userService, loggingMixin, storageMixin);

// Now userService has methods from both mixins
userService.log('Initializing user service');
const user = userService.getUser(123);
userService.save('user123', user);
```

Classical vs. Prototypal Inheritance in JavaScript
Let's continue exploring the differences between classical and prototypal inheritance in JavaScript, focusing on practical applications and advanced patterns.

Simulating Classical Inheritance with Object.create()
Object.create() provides a clean way to establish inheritance hierarchies without constructor overhead:

```js
// Base object with shared functionality
const Shape = {
  init(type) {
    this.type = type;
    return this;
  },
  
  describe() {
    return `This is a ${this.type}`;
  },
  
  getArea() {
    return 'Area calculation not implemented for this shape';
  }
};

// Create a Circle prototype that inherits from Shape
const Circle = Object.create(Shape);

// Override and extend methods
Circle.init = function(radius) {
  // Call the parent's init method
  Shape.init.call(this, 'circle');
  this.radius = radius;
  return this;
};

Circle.getArea = function() {
  return Math.PI * this.radius * this.radius;
};

// Create a Rectangle prototype that also inherits from Shape
const Rectangle = Object.create(Shape);

Rectangle.init = function(width, height) {
  Shape.init.call(this, 'rectangle');
  this.width = width;
  this.height = height;
  return this;
};

Rectangle.getArea = function() {
  return this.width * this.height;
};

// Create instances
const myCircle = Object.create(Circle).init(5);
const myRectangle = Object.create(Rectangle).init(4, 6);

console.log(myCircle.describe());    // "This is a circle"
console.log(myCircle.getArea());     // 78.53981633974483

console.log(myRectangle.describe()); // "This is a rectangle"
console.log(myRectangle.getArea());  // 24

```

Modular Object Composition with Object.create()
Create reusable modules that can be composed together:

```js
// Core functionality module
const core = {
  init(id) {
    this.id = id;
    this.createdAt = new Date();
    return this;
  },
  
  getId() {
    return this.id;
  },
  
  getCreationTime() {
    return this.createdAt;
  }
};

// Logging functionality module
const logger = {
  log(message) {
    console.log(`[${this.id}] ${message}`);
    return this;
  },
  
  warn(message) {
    console.log(`[${this.id}] WARNING: ${message}`);
    return this;
  },
  
  error(message) {
    console.error(`[${this.id}] ERROR: ${message}`);
    return this;
  }
};

// Data persistence module
const persistence = {
  save(data) {
    console.log(`Saving data for ${this.id}: ${JSON.stringify(data)}`);
    this.lastSaved = new Date();
    return this;
  },
  
  getLastSaveTime() {
    return this.lastSaved || null;
  }
};

// Function to create a module with specific capabilities
function createModule(id, ...capabilities) {
  // Start with the core module
  const module = Object.create(core).init(id);
  
  // Add each capability
  capabilities.forEach(capability => {
    Object.keys(capability).forEach(key => {
      if (typeof capability[key] === 'function') {
        module[key] = capability[key];
      }
    });
  });
  
  return module;
}

// Create a module with logging and persistence capabilities
const userModule = createModule('user-service', logger, persistence);

userModule.log('Module initialized');
userModule.save({ users: ['Alice', 'Bob'] });
console.log(`Last saved: ${userModule.getLastSaveTime()}`);
```


Cloning Objects While Preserving the Prototype Chain
Create copies of objects that maintain their prototype relationships:

```js
function cloneWithPrototype(obj) {
  // Create a new object with the same prototype
  const clone = Object.create(Object.getPrototypeOf(obj));
  
  // Copy own properties
  const props = Object.getOwnPropertyNames(obj);
  props.forEach(prop => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    Object.defineProperty(clone, prop, descriptor);
  });
  
  return clone;
}

// Base prototype
const animal = {
  makeSound() {
    return `${this.name} makes a sound`;
  }
};

// Create an object
const dog = Object.create(animal);
dog.name = 'Rex';
dog.breed = 'German Shepherd';

// Clone the object
const clonedDog = cloneWithPrototype(dog);
clonedDog.name = 'Max';

console.log(dog.makeSound());     // "Rex makes a sound"
console.log(clonedDog.makeSound()); // "Max makes a sound"

// Verify the prototype relationship is preserved
console.log(Object.getPrototypeOf(clonedDog) === animal); // true

```

Classical vs. Prototypal Inheritance: Key Differences
Let's compare the two inheritance models with practical examples:

```JS
// Classical inheritance style (using constructor functions)
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.getType = function() {
  return this.type;
};

function Car(type, make, model) {
  // Call parent constructor
  Vehicle.call(this, type);
  this.make = make;
  this.model = model;
}

// Set up inheritance
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Add methods to Car
Car.prototype.getDetails = function() {
  return `${this.make} ${this.model} (${this.getType()})`;
};

const myCar = new Car('sedan', 'Toyota', 'Camry');
console.log(myCar.getDetails()); // "Toyota Camry (sedan)"

// Prototypal inheritance style (using Object.create)
const vehicleProto = {
  init(type) {
    this.type = type;
    return this;
  },
  
  getType() {
    return this.type;
  }
};

const carProto = Object.create(vehicleProto);

carProto.init = function(type, make, model) {
  // Call parent init
  vehicleProto.init.call(this, type);
  this.make = make;
  this.model = model;
  return this;
};

carProto.getDetails = function() {
  return `${this.make} ${this.model} (${this.getType()})`;
};

const myProtoCar = Object.create(carProto).init('SUV', 'Honda', 'CR-V');
console.log(myProtoCar.getDetails()); // "Honda CR-V (SUV)"

```

Flexible Behavior Composition with Prototypal Inheritance
One of the strengths of prototypal inheritance is the ability to compose behaviors flexibly:

```js
// Behavior objects
const swimmer = {
  swim() {
    return `${this.name} is swimming`;
  }
};

const flyer = {
  fly() {
    return `${this.name} is flying`;
  }
};

const runner = {
  run() {
    return `${this.name} is running`;
  }
};

// Function to compose behaviors
function composeCreature(name, ...behaviors) {
  // Create a base creature
  const creature = {
    name,
    describe() {
      return `This is ${this.name}, who can ${this.abilities.join(' and ')}`;
    }
  };
  
  // Add abilities description
  creature.abilities = [];
  
  // Add each behavior
  behaviors.forEach(behavior => {
    const methodNames = Object.keys(behavior).filter(
      key => typeof behavior[key] === 'function'
    );
    
    methodNames.forEach(method => {
      creature[method] = behavior[method];
      // Add to abilities list (remove 'can' prefix if exists)
      creature.abilities.push(method);
    });
  });
  
  return creature;
}

// Create different creatures with different ability combinations
const duck = composeCreature('Donald', swimmer, flyer);
const penguin = composeCreature('Pingu', swimmer, runner);
const eagle = composeCreature('Eddie', flyer, runner);

console.log(duck.describe());    // "This is Donald, who can swim and fly"
console.log(duck.swim());        // "Donald is swimming"
console.log(duck.fly());         // "Donald is flying"

console.log(penguin.describe()); // "This is Pingu, who can swim and run"
console.log(eagle.describe());   // "This is Eddie, who can fly and run"

```



Performance Considerations in Prototype Chain Design
The depth and structure of prototype chains affect performance:

```js
// Performance test function
function measurePropertyAccess(obj, propName, iterations = 1000000) {
  const start = performance.now();
  
  for (let i = 0; i < iterations; i++) {
    const val = obj[propName];
  }
  
  return performance.now() - start;
}

// Create objects with different prototype chain depths
const level1 = { prop: 'level1' };
const level2 = Object.create(level1);
const level3 = Object.create(level2);
const level4 = Object.create(level3);
level4.ownProp = 'own';

// Compare access times
console.log('Accessing own property:');
const ownTime = measurePropertyAccess(level4, 'ownProp');
console.log(`Time: ${ownTime}ms`);

console.log('Accessing property from level 1 (deepest):');
const level1Time = measurePropertyAccess(level4, 'prop');
console.log(`Time: ${level1Time}ms`);

// Best practices for performance:
// 1. Keep prototype chains shallow when possible
// 2. Put frequently accessed properties directly on objects
// 3. Maintain consistent object shapes
// 4. Avoid dynamically modifying prototypes of existing objects

```

Encapsulation in Prototypal vs. Classical Models
JavaScript doesn't have built-in private members, but we can achieve encapsulation in both models:

```js

// Classical-style encapsulation using closures
function Counter() {
  // Private variable
  let count = 0;
  
  // Public interface
  this.increment = function() {
    return ++count;
  };
  
  this.decrement = function() {
    return --count;
  };
  
  this.getCount = function() {
    return count;
  };
}

const counter1 = new Counter();
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2
console.log(counter1.getCount());  // 2

// Prototypal-style encapsulation using factory functions
function createProtectedObject() {
  // Private data
  const privateData = new WeakMap();
  
  // Prototype with methods
  const proto = {
    getData() {
      return privateData.get(this);
    },
    
    setData(data) {
      privateData.set(this, data);
    }
  };
  
  // Create and return the object
  return Object.create(proto);
}

const obj1 = createProtectedObject();
obj1.setData({ secret: 'value' });
console.log(obj1.getData()); // { secret: 'value' }

// The private data is not directly accessible
console.log(obj1.privateData); // undefined

```

Mixins and Advanced Object Composition in JavaScript
Let's continue exploring mixins and their role in JavaScript object composition, focusing on runtime modification, method augmentation, and practical implementation patterns.

Runtime Modification with Prototypal Inheritance
JavaScript's prototypal inheritance allows for dynamic modification of objects at runtime:

// Constructor function
function Gadget(name) {
  this.name = name;
}

// Initial prototype method
Gadget.prototype.identify = function() {
  return `Gadget: ${this.name}`;
};

// Create an instance
const device = new Gadget("Widget");
console.log(device.identify()); // "Gadget: Widget"

// Dynamically extend the prototype - affects all instances
Gadget.prototype.describe = function() {
  return `This is the ${this.name} gadget.`;
};

// The existing instance now has access to the new method
console.log(device.describe()); // "This is the Widget gadget."

// We can even modify built-in prototypes (though this is generally discouraged)
// Add a method to all arrays
Array.prototype.first = function() {
  return this.length > 0 ? this[0] : undefined;
};

const numbers = [1, 2, 3];
console.log(numbers.first()); // 1


```js
// Constructor function
function Gadget(name) {
  this.name = name;
}

// Initial prototype method
Gadget.prototype.identify = function() {
  return `Gadget: ${this.name}`;
};

// Create an instance
const device = new Gadget("Widget");
console.log(device.identify()); // "Gadget: Widget"

// Dynamically extend the prototype - affects all instances
Gadget.prototype.describe = function() {
  return `This is the ${this.name} gadget.`;
};

// The existing instance now has access to the new method
console.log(device.describe()); // "This is the Widget gadget."

// We can even modify built-in prototypes (though this is generally discouraged)
// Add a method to all arrays
Array.prototype.first = function() {
  return this.length > 0 ? this[0] : undefined;
};

const numbers = [1, 2, 3];
console.log(numbers.first()); // 1

```

Method Augmentation with Super Calls
Implement a pattern for calling "super" methods in the prototype chain:

```JS
// Helper function to call a method on the prototype
function callSuper(obj, methodName, ...args) {
  const proto = Object.getPrototypeOf(obj);
  if (proto && typeof proto[methodName] === 'function') {
    return proto[methodName].apply(obj, args);
  }
  return undefined;
}

// Base logger object
const baseLogger = {
  log(message) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] ${message}`;
  }
};

// Enhanced logger that extends the base functionality
const enhancedLogger = Object.create(baseLogger);
enhancedLogger.log = function(message) {
  // Call the "super" method
  const baseResult = callSuper(this, 'log', message);
  // Add our enhancement
  return `${baseResult} [LEVEL: INFO]`;
};

// Debug logger that further extends functionality
const debugLogger = Object.create(enhancedLogger);
debugLogger.log = function(message) {
  // Call the "super" method (which will in turn call its super)
  const enhancedResult = callSuper(this, 'log', message);
  // Add debug-specific information
  return `DEBUG: ${enhancedResult}`;
};

console.log(baseLogger.log('System started'));
// "[2023-05-15T12:34:56.789Z] System started"

console.log(enhancedLogger.log('User logged in'));
// "[2023-05-15T12:34:56.789Z] User logged in [LEVEL: INFO]"

console.log(debugLogger.log('Loading configuration'));
// "DEBUG: [2023-05-15T12:34:56.789Z] Loading configuration [LEVEL: INFO]"

```

Advanced Mixin Implementation Patterns
Let's explore more sophisticated mixin patterns that address common challenges:

```js
// A more robust mixin implementation that handles property conflicts
function applyMixin(target, mixin, options = {}) {
  const { override = true, prefix = '', exclude = [] } = options;
  
  Object.keys(mixin).forEach(key => {
    // Skip excluded properties
    if (exclude.includes(key)) return;
    
    // Handle naming conflicts
    const targetKey = prefix ? `${prefix}${key.charAt(0).toUpperCase()}${key.slice(1)}` : key;
    
    // Check if property already exists and we're not overriding
    if (targetKey in target && !override) {
      console.warn(`Property '${targetKey}' already exists on target and won't be overridden`);
      return;
    }
    
    // Copy the property descriptor to preserve getters/setters
    const descriptor = Object.getOwnPropertyDescriptor(mixin, key);
    Object.defineProperty(target, targetKey, descriptor);
  });
  
  return target;
}

// Example mixins
const loggable = {
  log(message) {
    console.log(`[${this.name || 'Unknown'}] ${message}`);
  },
  warn(message) {
    console.warn(`[${this.name || 'Unknown'}] WARNING: ${message}`);
  },
  error(message) {
    console.error(`[${this.name || 'Unknown'}] ERROR: ${message}`);
  }
};

const storable = {
  save() {
    console.log(`Saving ${this.name || 'item'} to storage`);
    return true;
  },
  load() {
    console.log(`Loading ${this.name || 'item'} from storage`);
    return { data: 'mock data' };
  }
};

// Create an object and apply mixins
const user = { name: 'John', id: 123 };

// Apply loggable mixin with default options
applyMixin(user, loggable);

// Apply storable mixin with a prefix to avoid conflicts
applyMixin(user, storable, { prefix: 'storage' });

user.log('Profile updated');  // "[John] Profile updated"
user.storageSave();          // "Saving John to storage"

```

Functional Mixins
Functional mixins are factory functions that add properties and methods to an object:

```js
// Functional mixin pattern
function withLogging(target) {
  target.log = function(message) {
    console.log(`[${this.name || 'Unknown'}] ${message}`);
    return this;
  };
  
  target.warn = function(message) {
    console.warn(`[${this.name || 'Unknown'}] WARNING: ${message}`);
    return this;
  };
  
  target.error = function(message) {
    console.error(`[${this.name || 'Unknown'}] ERROR: ${message}`);
    return this;
  };
  
  return target;
}

function withStorage(target) {
  target.save = function() {
    console.log(`Saving ${this.name || 'item'} to storage`);
    return this;
  };
  
  target.load = function() {
    console.log(`Loading ${this.name || 'item'} from storage`);
    return this;
  };
  
  return target;
}

function withEvents(target) {
  // Private events collection
  const events = {};
  
  target.on = function(event, handler) {
    events[event] = events[event] || [];
    events[event].push(handler);
    return this;
  };
  
  target.off = function(event, handler) {
    if (!events[event]) return this;
    
    if (handler) {
      events[event] = events[event].filter(h => h !== handler);
    } else {
      delete events[event];
    }
    
    return this;
  };
  
  target.trigger = function(event, ...args) {
    if (!events[event]) return this;
    
    events[event].forEach(handler => {
      handler.apply(this, args);
    });
    
    return this;
  };
  
  return target;
}

// Compose multiple mixins into a single factory function
function createComponent(name) {
  // Start with a base object
  const component = { name };
  
  // Apply mixins
  withLogging(component);
  withStorage(component);
  withEvents(component);
  
  return component;
}

// Create a component with all mixins applied
const userComponent = createComponent('UserProfile');

// Use the mixed-in methods
userComponent
  .log('Component initialized')
  .on('save', () => console.log('Save event triggered'))
  .trigger('save')
  .save();

// Output:
// [UserProfile] Component initialized
// Save event triggered
// Saving UserProfile to storage

```

Stateful Mixins with Private Data
Mixins can maintain private state using closures:


```js
// Mixin that maintains private state
function withCounter() {
  // Private state
  const counters = new WeakMap();
  
  return function(target) {
    // Initialize counter for this target
    counters.set(target, 0);
    
    // Add methods that use the private state
    target.increment = function() {
      const currentCount = counters.get(this);
      counters.set(this, currentCount + 1);
      return this;
    };
    
    target.decrement = function() {
      const currentCount = counters.get(this);
      counters.set(this, currentCount - 1);
      return this;
    };
    
    target.getCount = function() {
      return counters.get(this);
    };
    
    return target;
  };
}

// Create the mixin function
const addCounter = withCounter();

// Apply to different objects
const obj1 = { name: 'Counter 1' };
const obj2 = { name: 'Counter 2' };

addCounter(obj1);
addCounter(obj2);

obj1.increment().increment();
obj2.increment();

console.log(`${obj1.name}: ${obj1.getCount()}`); // "Counter 1: 2"
console.log(`${obj2.name}: ${obj2.getCount()}`); // "Counter 2: 1"

// The counter state is private and not directly accessible
console.log(obj1.counters); // undefined

```

Composable Mixins with Method Chaining
Create a system for composing mixins with method chaining:

```js
// Base factory function
function createObject(name) {
  return {
    name,
    toString() {
      return `[Object ${this.name}]`;
    }
  };
}

// Mixin factories
const withTimestamps = (target) => {
  target.createdAt = new Date();
  
  target.getCreationTime = function() {
    return this.createdAt;
  };
  
  target.updateTimestamp = function() {
    this.updatedAt = new Date();
    return this;
  };
  
  return target;
};

const withVersioning = (target) => {
  target.version = 1;
  
  target.incrementVersion = function() {
    this.version++;
    return this;
  };
  
  target.getVersion = function() {
    return this.version;
  };
  
  return target;
};

const withLogging = (target) => {
  target.log = function(message) {
    console.log(`[${this.name} v${this.version}] ${message}`);
    return this;
  };
  
  return target;
};

// Compose function that applies mixins in sequence
function compose(...mixins) {
  return function(target) {
    return mixins.reduce((result, mixin) => mixin(result), target);
  };
}

// Create a composed mixin
const enhanceObject = compose(
  withTimestamps,
  withVersioning,
  withLogging
);

// Create and enhance an object
const document = enhanceObject(createObject('Document'));

document
  .log('Created document')
  .incrementVersion()
  .updateTimestamp()
  .log('Updated document');

console.log(`Version: ${document.getVersion()}`);
console.log(`Created: ${document.getCreationTime()}`);
console.log(`Updated: ${document.updatedAt}`);

// Output:
// [Document v1] Created document
// [Document v2] Updated document
// Version: 2
// Created: [timestamp]
// Updated: [timestamp]

```

Event Mixin for Cross-Cutting Concerns
Implement a reusable event system that can be mixed into any object:

```JS
// Event mixin that can be applied to any object
const eventMixin = {
  /**
   * Subscribe to an event
   * @param {string} event - Event name
   * @param {function} handler - Event handler
   */
  on(event, handler) {
    // Initialize events storage if needed
    this._events = this._events || {};
    this._events[event] = this._events[event] || [];
    this._events[event].push(handler);
    return this;
  },
  
  /**
   * Unsubscribe from an event
   * @param {string} event - Event name
   * @param {function} [handler] - Event handler (optional)
   */
  off(event, handler) {
    if (!this._events || !this._events[event]) return this;
    
    if (!handler) {
      // Remove all handlers for this event
      delete this._events[event];
    } else {
      // Remove specific handler
      this._events[event] = this._events[event].filter(h => h !== handler);
    }
    
    return this;
  },
  
  /**
   * Emit an event with data
   * @param {string} event - Event name
   * @param {...any} args - Arguments to pass to handlers
   */
  emit(event, ...args) {
    if (!this._events || !this._events[event]) return this;
    
    // Call all handlers
    this._events[event].forEach(handler => {
      try {
        handler.apply(this, args);
      } catch (error) {
        console.error(`Error in event handler for ${event}:`, error);
      }
    });
    
    return this;
  },
  
  /**
   * Subscribe to an event with one-time handling
   * @param {string} event - Event name
   * @param {function} handler - Event handler
   */
  once(event, handler) {
    const onceHandler = (...args) => {
      this.off(event, onceHandler);
      handler.apply(this, args);
    };
    
    return this.on(event, onceHandler);
  }
};

// Apply the mixin to different objects
function applyEventMixin(target) {
  return Object.assign(target, eventMixin);
}

// Example: User object with events
const user = applyEventMixin({
  name: 'John',
  login() {
    console.log(`${this.name} logged in`);
    this.emit('login', { userId: 123, time: new Date() });
    return this;
  },
  logout() {
    console.log(`${this.name} logged out`);
    this.emit('logout', { userId: 123, time: new Date() });
    return this;
  }
});

// Subscribe to events
user.on('login', data => {
  console.log(`Login event at ${data.time}`);
});

user.once('logout', data => {
  console.log(`Logout event at ${data.time} (one-time handler)`);
});

// Trigger events
user.login().logout();

// The one-time handler is removed after first use
user.logout(); // Won't trigger the logout handler again

```


Advanced JavaScript Object Patterns and Performance Optimization
Alternative Mixin Patterns Using Prototypal Delegation
Let's explore more sophisticated mixin patterns that leverage JavaScript's prototype chain:

```js
// Logger mixin with encapsulated functionality
const loggerMixin = {
  log(message) {
    console.log(`[LOG]: ${message}`);
    return this;
  },
  
  error(message) {
    console.error(`[ERROR]: ${message}`);
    return this;
  },
  
  warn(message) {
    console.warn(`[WARNING]: ${message}`);
    return this;
  }
};

// Apply mixin using an intermediary prototype object
function applyMixin(target, mixin) {
  // Create an intermediary object that delegates to the mixin
  const mixinDecorator = Object.create(mixin);
  
  // Copy only the functions to the target
  Object.getOwnPropertyNames(mixin).forEach(function(prop) {
    if (typeof mixin[prop] === "function") {
      target[prop] = mixinDecorator[prop];
    }
  });
  
  return target;
}

// Example service object
const service = {
  serviceName: "DataService",
  
  initialize() {
    this.log(`Initializing ${this.serviceName}`);
    return this;
  }
};

// Apply the mixin
applyMixin(service, loggerMixin);

// Use the mixed-in functionality
service.initialize()
       .log("Service started.")
       .warn("Running in development mode.");


```


Advanced Mixin Management with Conflict Resolution
Create a more robust mixin system that handles property conflicts:

```js
// Utility function to safely merge mixins with conflict detection
function mergeMixins(target) {
  // Start from the second argument (first is the target)
  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i];
    
    Object.getOwnPropertyNames(source).forEach(function(prop) {
      // Check for property conflicts
      if (target.hasOwnProperty(prop)) {
        throw new Error(`Property conflict: ${prop} already exists on target`);
      }
      
      // Copy the property descriptor to preserve getters/setters
      Object.defineProperty(
        target, 
        prop, 
        Object.getOwnPropertyDescriptor(source, prop)
      );
    });
  }
  
  return target;
}

// Example mixins
const loggerMixin = {
  log(message) {
    console.log(`[LOG]: ${message}`);
    return this;
  }
};

const analyticsMixin = {
  track(event) {
    console.log(`Tracking event: ${event}`);
    return this;
  }
};

// Example target object
const dashboard = {
  title: "Sales Dashboard",
  
  render() {
    this.log(`Rendering ${this.title}`);
    this.track("dashboard_view");
    return this;
  }
};

// Apply mixins with conflict detection
try {
  mergeMixins(dashboard, loggerMixin, analyticsMixin);
  dashboard.render();
} catch (error) {
  console.error("Mixin error:", error.message);
}


```

Private State in Mixins Using Closures and WeakMaps
Create mixins with encapsulated private state:

```js
// Cache mixin with private state using WeakMap
const cacheMixin = (function() {
  // Private cache storage - not accessible from outside
  const cacheData = new WeakMap();
  
  return {
    /**
     * Store a value in the cache
     * @param {string} key - Cache key
     * @param {any} value - Value to cache
     */
    cache(key, value) {
      // Initialize cache for this object if needed
      if (!cacheData.has(this)) {
        cacheData.set(this, {});
      }
      
      // Store the value
      cacheData.get(this)[key] = value;
      return this;
    },
    
    /**
     * Retrieve a value from the cache
     * @param {string} key - Cache key
     * @returns {any} The cached value or undefined
     */
    retrieve(key) {
      return cacheData.has(this) ? 
        cacheData.get(this)[key] : 
        undefined;
    },
    
    /**
     * Clear the entire cache or a specific key
     * @param {string} [key] - Optional key to clear
     */
    clearCache(key) {
      if (!cacheData.has(this)) return this;
      
      if (key === undefined) {
        // Clear entire cache
        cacheData.delete(this);
      } else {
        // Clear specific key
        delete cacheData.get(this)[key];
      }
      
      return this;
    }
  };
})();

// Example resource object
const resource = {
  resourceName: "DataResource",
  
  fetchData(id) {
    // Check cache first
    const cached = this.retrieve(id);
    if (cached) {
      console.log(`Cache hit for ${id}`);
      return cached;
    }
    
    // Simulate API call
    console.log(`Fetching data for ${id}`);
    const data = { id, value: `Data for ${id}`, timestamp: Date.now() };
    
    // Cache the result
    this.cache(id, data);
    
    return data;
  }
};

// Apply the mixin
Object.assign(resource, cacheMixin);

// Use the resource with caching
console.log(resource.fetchData("user-123")); // Will fetch
console.log(resource.fetchData("user-123")); // Will use cache
resource.clearCache("user-123");
console.log(resource.fetchData("user-123")); // Will fetch again


```


Configurable Mixins with Dynamic Behavior
Create mixins that can be configured at runtime:

```js
// Factory function that creates a configurable logger mixin
function configurableLogger(config = {}) {
  const {
    prefix = "[LOG]",
    includeTimestamp = true,
    logLevel = "info"
  } = config;
  
  // Define log levels and their priorities
  const levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };
  
  // Only log if the message's level is >= configured level
  const shouldLog = (messageLevel) => {
    return levels[messageLevel] >= levels[logLevel];
  };
  
  // Format the log message
  const formatMessage = (message) => {
    let result = prefix;
    
    if (includeTimestamp) {
      result += ` [${new Date().toISOString()}]`;
    }
    
    return `${result} ${message}`;
  };
  
  // Return the configured mixin
  return {
    debug(message) {
      if (shouldLog('debug')) {
        console.debug(formatMessage(message));
      }
      return this;
    },
    
    log(message) {
      if (shouldLog('info')) {
        console.log(formatMessage(message));
      }
      return this;
    },
    
    warn(message) {
      if (shouldLog('warn')) {
        console.warn(formatMessage(message));
      }
      return this;
    },
    
    error(message) {
      if (shouldLog('error')) {
        console.error(formatMessage(message));
      }
      return this;
    }
  };
}

// Create different logger configurations
const adminLogger = configurableLogger({
  prefix: "[ADMIN]",
  logLevel: "debug"
});

const userLogger = configurableLogger({
  prefix: "[USER]",
  logLevel: "warn" // Only show warnings and errors
});

// Apply to different panels
const adminPanel = { panel: "Control" };
Object.assign(adminPanel, adminLogger);

const userPanel = { panel: "Dashboard" };
Object.assign(userPanel, userLogger);

// Test the loggers
adminPanel.debug("Debug information");  // Will show
adminPanel.log("Admin panel loaded.");  // Will show
adminPanel.warn("Config outdated.");    // Will show

userPanel.debug("Debug information");   // Won't show (below warn level)
userPanel.log("User dashboard loaded."); // Won't show (below warn level)
userPanel.warn("Session expiring soon."); // Will show
userPanel.error("Failed to load user data."); // Will show
```


ES6 Classes and Their Relationship to Prototypes
Let's explore how ES6 classes work with JavaScript's prototype system:


```js

// ES6 class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
  
  static createAnonymous() {
    return new Person("Anonymous", 0);
  }
}

// Create an instance
const alice = new Person("Alice", 30);
console.log(alice.greet()); // "Hello, my name is Alice."

// Demonstrate that ES6 classes are just syntactic sugar over prototypes
console.log(typeof Person); // "function"
console.log(alice instanceof Person); // true
console.log(Object.getPrototypeOf(alice) === Person.prototype); // true

// Methods are non-enumerable
console.log(Object.keys(alice)); // ["name", "age"]
console.log(Object.getOwnPropertyNames(Person.prototype)); // ["constructor", "greet"]

// We can still manipulate the prototype directly
Person.prototype.introduce = function() {
  return `I'm ${this.name}, ${this.age} years old.`;
};

console.log(alice.introduce()); // "I'm Alice, 30 years old."

// Inheritance with ES6 classes
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
  
  greet() {
    return `${super.greet()} I work as a ${this.position}.`;
  }
  
  getDetails() {
    return `${this.name}, ${this.position}`;
  }
}

const bob = new Employee("Bob", 35, "Developer");
console.log(bob.greet()); // "Hello, my name is Bob. I work as a Developer."

// Verify the prototype chain
console.log(bob instanceof Employee); // true
console.log(bob instanceof Person); // true
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype); // true

```


Performance Implications of Object Creation Patterns
Let's examine different object creation patterns and their performance characteristics:

```js

// Helper function to measure execution time
function benchmark(name, iterations, fn) {
  console.log(`Running benchmark: ${name}`);
  
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn(i);
  }
  const end = performance.now();
  
  console.log(`Time: ${(end - start).toFixed(2)}ms`);
  return end - start;
}

// 1. Constructor function with consistent property order
function Widget(id, name) {
  this.id = id;
  this.name = name;
  this.status = "inactive";
}

Widget.prototype.activate = function() {
  this.status = "active";
  return this;
};

// 2. Constructor with inconsistent property order
function InconsistentWidget(id, name, options) {
  this.id = id;
  this.name = name;
  
  // Conditional properties create inconsistent object shapes
  if (options && options.status) {
    this.status = options.status;
  }
  
  if (options && options.metadata) {
    this.metadata = options.metadata;
  }
}

InconsistentWidget.prototype.activate = function() {
  this.status = "active";
  return this;
};

// 3. Optimized constructor with consistent property order
function OptimizedWidget(id, name, options) {
  this.id = id;
  this.name = name;
  // Always define all properties, even if null
  this.status = (options && options.status) || "inactive";
  this.metadata = (options && options.metadata) || null;
}

OptimizedWidget.prototype.activate = function() {
  this.status = "active";
  return this;
};

// 4. Object.create pattern
const widgetProto = {
  activate() {
    this.status = "active";
    return this;
  }
};

function createWidget(id, name) {
  const widget = Object.create(widgetProto);
  widget.id = id;
  widget.name = name;
  widget.status = "inactive";
  return widget;
}

// 5. Factory function with new objects
function factoryWidget(id, name) {
  return {
    id,
    name,
    status: "inactive",
    activate() {
      this.status = "active";
      return this;
    }
  };
}

// 6. Factory function with shared methods
const sharedMethods = {
  activate() {
    this.status = "active";
    return this;
  }
};

function optimizedFactoryWidget(id, name) {
  return Object.assign(Object.create(sharedMethods), {
    id,
    name,
    status: "inactive"
  });
}

// 7. ES6 Class
class WidgetClass {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.status = "inactive";
  }
  
  activate() {
    this.status = "active";
    return this;
  }
}

// Benchmark each pattern
const ITERATIONS = 1000000;

benchmark("Constructor function", ITERATIONS, (i) => {
  const widget = new Widget(i, `widget-${i}`);
  widget.activate();
});

benchmark("Inconsistent constructor", ITERATIONS, (i) => {
  // Randomly include options to create inconsistent shapes
  const options = i % 2 === 0 ? { status: "pending" } : 
                  i % 3 === 0 ? { metadata: { version: 1 } } : null;
  const widget = new InconsistentWidget(i, `widget-${i}`, options);
  widget.activate();
});

benchmark("Optimized constructor", ITERATIONS, (i) => {
  const options = i % 2 === 0 ? { status: "pending" } : 
                  i % 3 === 0 ? { metadata: { version: 1 } } : null;
  const widget = new OptimizedWidget(i, `widget-${i}`, options);
  widget.activate();
});

benchmark("Object.create", ITERATIONS, (i) => {
  const widget = createWidget(i, `widget-${i}`);
  widget.activate();
});

benchmark("Factory function", ITERATIONS, (i) => {
  const widget = factoryWidget(i, `widget-${i}`);
  widget.activate();
});

benchmark("Optimized factory", ITERATIONS, (i) => {
  const widget = optimizedFactoryWidget(i, `widget-${i}`);
  widget.activate();
});

benchmark("ES6 Class", ITERATIONS, (i) => {
  const widget = new WidgetClass(i, `widget-${i}`);
  widget.activate();
});

// Object pooling for performance-critical applications
class ObjectPool {
  constructor(factory, initialSize = 10) {
    this.factory = factory
// Object pooling for performance-critical applications
class ObjectPool {
  constructor(factory, initialSize = 10) {
    this.factory = factory;
    this.pool = [];
    
    // Pre-populate the pool
    for (let i = 0; i < initialSize; i++) {
      this.pool.push(factory());
    }
  }
  
  acquire() {
    // Return an object from the pool or create a new one if empty
    return this.pool.length > 0 ? this.pool.pop() : this.factory();
  }
  
  release(obj) {
    // Return the object to the pool for reuse
    this.pool.push(obj);
  }
  
  size() {
    return this.pool.length;
  }
}

// Example: Particle system using object pooling
function createParticle() {
  return {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    age: 0,
    active: false,
    
    reset() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.age = 0;
      this.active = false;
      return this;
    },
    
    init(x, y, vx, vy) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.age = 0;
      this.active = true;
      return this;
    },
    
    update(deltaTime) {
      if (!this.active) return false;
      
      this.x += this.vx * deltaTime;
      this.y += this.vy * deltaTime;
      this.age += deltaTime;
      
      // Return true if still active
      return this.age < 3.0; // 3 second lifespan
    }
  };
}

// Create a particle pool
const particlePool = new ObjectPool(createParticle, 100);

// Simulate a particle system update loop
function simulateParticleSystem() {
  const activeParticles = [];
  const deltaTime = 0.016; // ~60fps
  
  // Emit new particles
  for (let i = 0; i < 10; i++) {
    const particle = particlePool.acquire();
    particle.init(
      Math.random() * 500,  // x
      Math.random() * 500,  // y
      (Math.random() - 0.5) * 10,  // vx
      (Math.random() - 0.5) * 10   // vy
    );
    activeParticles.push(particle);
  }
  
  // Update existing particles
  for (let i = activeParticles.length - 1; i >= 0; i--) {
    const particle = activeParticles[i];
    const isActive = particle.update(deltaTime);
    
    if (!isActive) {
      // Return to pool if no longer active
      particle.reset();
      particlePool.release(particle);
      activeParticles.splice(i, 1);
    }
  }
  
  console.log(`Active particles: ${activeParticles.length}, Pool size: ${particlePool.size()}`);
  return activeParticles.length;
}

// Benchmark object pooling vs. creating new objects
function benchmarkPooling() {
  console.log("Benchmarking object pooling vs. new object creation");
  
  // With object pooling
  const startPooling = performance.now();
  for (let i = 0; i < 100; i++) {
    simulateParticleSystem();
  }
  const endPooling = performance.now();
  
  // Reset for comparison
  const activeParticles = [];
  
  // Without object pooling (creating new objects each time)
  const startNoPooling = performance.now();
  for (let i = 0; i < 100; i++) {
    // Emit new particles
    for (let j = 0; j < 10; j++) {
      const particle = {
        x: Math.random() * 500,
        y: Math.random() * 500,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        age: 0,
        active: true,
        
        update(deltaTime) {
          if (!this.active) return false;
          
          this.x += this.vx * deltaTime;
          this.y += this.vy * deltaTime;
          this.age += deltaTime;
          
          return this.age < 3.0;
        }
      };
      activeParticles.push(particle);
    }
    
    // Update existing particles
    const deltaTime = 0.016;
    for (let j = activeParticles.length - 1; j >= 0; j--) {
      const particle = activeParticles[j];
      const isActive = particle.update(deltaTime);
      
      if (!isActive) {
        activeParticles.splice(j, 1);
      }
    }
  }
  const endNoPooling = performance.now();
  
  console.log(`With pooling: ${(endPooling - startPooling).toFixed(2)}ms`);
  console.log(`Without pooling: ${(endNoPooling - startNoPooling).toFixed(2)}ms`);
  console.log(`Improvement: ${((endNoPooling - startNoPooling) / (endPooling - startPooling)).toFixed(2)}x`);
}

benchmarkPooling();

```

Immutable Objects and Performance

```js

// Working with immutable objects for performance and predictability
const createImmutableObject = (data) => {
  return Object.freeze(Object.assign({}, data));
};

// Helper to create a modified copy of an immutable object
const updateImmutable = (immutable, updates) => {
  return Object.freeze(Object.assign({}, immutable, updates));
};

// Example: User record management with immutability
function demonstrateImmutability() {
  console.log("Demonstrating immutable objects");
  
  // Create an immutable user
  const user = createImmutableObject({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    preferences: Object.freeze({
      theme: "dark",
      notifications: true
    })
  });
  
  // Attempting to modify directly will fail (in strict mode) or be ignored
  try {
    user.name = "Jane Doe"; // This will have no effect
    console.log("Current name:", user.name); // Still "John Doe"
    
    // Even nested objects are frozen
    user.preferences.theme = "light"; // This will have no effect
    console.log("Current theme:", user.preferences.theme); // Still "dark"
  } catch (e) {
    console.error("Error modifying immutable:", e);
  }
  
  // Proper way to update an immutable object
  const updatedUser = updateImmutable(user, {
    name: "Jane Doe",
    preferences: Object.freeze({
      ...user.preferences,
      theme: "light"
    })
  });
  
  console.log("Original user:", user.name, user.preferences.theme); // John Doe, dark
  console.log("Updated user:", updatedUser.name, updatedUser.preferences.theme); // Jane Doe, light
  
  // Benchmark immutable vs. mutable updates
  const ITERATIONS = 100000;
  
  // Mutable approach
  const mutableUser = { ...user };
  const startMutable = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    mutableUser.lastAccess = Date.now();
    mutableUser.accessCount = (mutableUser.accessCount || 0) + 1;
  }
  const endMutable = performance.now();
  
  // Immutable approach
  let immutableUser = createImmutableObject(user);
  const startImmutable = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    immutableUser = updateImmutable(immutableUser, {
      lastAccess: Date.now(),
      accessCount: (immutableUser.accessCount || 0) + 1
    });
  }
  const endImmutable = performance.now();
  
  console.log(`Mutable updates: ${(endMutable - startMutable).toFixed(2)}ms`);
  console.log(`Immutable updates: ${(endImmutable - startImmutable).toFixed(2)}ms`);
  console.log(`Ratio: ${((endImmutable - startImmutable) / (endMutable - startMutable)).toFixed(2)}x`);
  
  return { mutableUser, immutableUser };
}

demonstrateImmutability();

```

Hidden Classes and Property Access Optimization

```js

// Demonstrating hidden class optimization in V8
function demonstrateHiddenClasses() {
  console.log("Demonstrating hidden class optimization");
  
  // Case 1: Consistent property initialization order
  function ConsistentPerson(name, age) {
    this.name = name;  // Property 1
    this.age = age;    // Property 2
  }
  
  // Case 2: Inconsistent property initialization
  function InconsistentPerson(name, age) {
    if (name) {
      this.name = name;  // Sometimes property 1
    }
    
    this.age = age;      // Property 1 or 2
    
    if (!name) {
      this.name = "Anonymous";  // Sometimes property 2
    }
  }
  
  // Case 3: Optimized with consistent initialization
  function OptimizedPerson(name, age) {
    // Always initialize properties in the same order
    this.name = name || "Anonymous";
    this.age = age || 0;
  }
  
  // Benchmark creation and property access
  const ITERATIONS = 1000000;
  
  // Consistent initialization
  const startConsistent = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const person = new ConsistentPerson("John", 30);
    const nameAndAge = person.name + person.age;
  }
  const endConsistent = performance.now();
  
  // Inconsistent initialization
  const startInconsistent = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    // Randomly include or exclude name to create inconsistent shapes
    const includeName = i % 2 === 0;
    const person = new InconsistentPerson(includeName ? "John" : null, 30);
    const nameAndAge = person.name + person.age;
  }
  const endInconsistent = performance.now();
  
  // Optimized initialization
  const startOptimized = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    // Same randomness, but optimized initialization
    const includeName = i % 2 === 0;
    const person = new OptimizedPerson(includeName ? "John" : null, 30);
    const nameAndAge = person.name + person.age;
  }
  const endOptimized = performance.now();
  
  console.log(`Consistent initialization: ${(endConsistent - startConsistent).toFixed(2)}ms`);
  console.log(`Inconsistent initialization: ${(endInconsistent - startInconsistent).toFixed(2)}ms`);
  console.log(`Optimized initialization: ${(endOptimized - startOptimized).toFixed(2)}ms`);
  
  // Demonstrate property addition after creation
  function Person() {
    this.name = "John";
    this.age = 30;
  }
  
  const startNormal = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const person = new Person();
    const nameAndAge = person.name + person.age;
  }
  const endNormal = performance.now();
  
  const startDynamic = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const person = new Person();
    // Dynamically add a property - breaks hidden class optimization
    person.email = "john@example.com";
    const nameAndAgeEmail = person.name + person.age + person.email;
  }
  const endDynamic = performance.now();
  
  console.log(`Normal access: ${(endNormal - startNormal).toFixed(2)}ms`);
  console.log(`With dynamic property: ${(endDynamic - startDynamic).toFixed(2)}ms`);
}

demonstrateHiddenClasses();


```

Prototype Chain Optimization

```js

// Demonstrating prototype chain optimization
function demonstratePrototypeChain() {
  console.log("Demonstrating prototype chain optimization");
  
  // Case 1: Shallow prototype chain
  function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.makeSound = function() {
    return "Some generic sound";
  };
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Set up inheritance
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Override method
  Dog.prototype.makeSound = function() {
    return "Woof!";
  };
  
  // Case 2: Deep prototype chain
  function Mammal() {}
  Mammal.prototype.warmBlooded = true;
  
  function Canine() {}
  Canine.prototype = Object.create(Mammal.prototype);
  Canine.prototype.hasFur = true;
  
  function DeepDog(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  
  DeepDog.prototype = Object.create(Canine.prototype);
  DeepDog.prototype.makeSound = function() {
    return "Woof!";
  };
  
  // Benchmark property lookup in different prototype chains
  const ITERATIONS = 1000000;
  
  // Shallow prototype chain
  const dog = new Dog("Rex", "German Shepherd");
  const startShallow = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const sound = dog.makeSound();
    const name = dog.name;
  }
  const endShallow = performance.now();
  
  // Deep prototype chain
  const deepDog = new DeepDog("Rex", "German Shepherd");
  const startDeep = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const sound = deepDog.makeSound();
    const warmBlooded = deepDog.warmBlooded;
  }
  const endDeep = performance.now();
  
  console.log(`Shallow prototype chain: ${(endShallow - startShallow).toFixed(2)}ms`);
  console.log(`Deep prototype chain: ${(endDeep - startDeep).toFixed(2)}ms`);
  
  // Case 3: Dynamic prototype modification (bad practice)
  const startNormal = performance.now();
  for (let i = 0; i < ITERATIONS; i++)
  // Case 3: Dynamic prototype modification (bad practice)
  const startNormal = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const normalDog = new Dog("Buddy", "Labrador");
    const sound = normalDog.makeSound();
  }
  const endNormal = performance.now();
  
  // Create a new dog with dynamically modified prototype
  const startDynamic = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const dynamicDog = new Dog("Buddy", "Labrador");
    
    // Dynamically modify the prototype - extremely bad for performance
    if (i === ITERATIONS / 2) {
      Object.setPrototypeOf(dynamicDog, {
        makeSound: function() {
          return "Modified woof!";
        }
      });
    }
    
    const sound = dynamicDog.makeSound();
  }
  const endDynamic = performance.now();
  
  console.log(`Normal prototype usage: ${(endNormal - startNormal).toFixed(2)}ms`);
  console.log(`With dynamic prototype modification: ${(endDynamic - startDynamic).toFixed(2)}ms`);
  console.log(`Performance penalty: ${((endDynamic - startDynamic) / (endNormal - startNormal)).toFixed(2)}x`);
}

demonstratePrototypeChain();

```

Combining ES6 Classes with Performance Optimization

```js

// Demonstrating ES6 classes with performance optimizations
class Entity {
  constructor(id) {
    this.id = id;
    this.created = Date.now();
    
    // Initialize all possible properties to maintain consistent object shape
    this.modified = null;
    this.data = null;
    this.tags = [];
  }
  
  update(data) {
    this.data = data;
    this.modified = Date.now();
    return this;
  }
  
  addTag(tag) {
    this.tags.push(tag);
    return this;
  }
  
  static create(id) {
    return new Entity(id);
  }
}

// Extending with proper initialization
class User extends Entity {
  constructor(id, username, email) {
    // Call parent constructor first to establish consistent property order
    super(id);
    
    // Add User-specific properties
    this.username = username;
    this.email = email;
    this.lastLogin = null;
    this.isActive = true;
  }
  
  login() {
    this.lastLogin = Date.now();
    return this;
  }
  
  static createGuest() {
    const guestId = `guest-${Date.now()}`;
    return new User(guestId, "Guest", null);
  }
}

// Benchmark ES6 class performance
function benchmarkES6Classes() {
  console.log("Benchmarking ES6 classes with optimizations");
  
  const ITERATIONS = 1000000;
  
  // Test 1: Creating and using optimized class instances
  const startOptimized = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const user = new User(`user-${i}`, `user${i}`, `user${i}@example.com`);
    user.login().addTag("new-user");
    const username = user.username;
  }
  const endOptimized = performance.now();
  
  // Test 2: Creating instances with inconsistent property additions
  const startUnoptimized = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const user = new User(`user-${i}`, `user${i}`, `user${i}@example.com`);
    
    // Add properties conditionally - breaks hidden class optimization
    if (i % 2 === 0) {
      user.preferences = { theme: "dark" };
    }
    
    if (i % 3 === 0) {
      user.role = "admin";
    }
    
    user.login();
    const username = user.username;
  }
  const endUnoptimized = performance.now();
  
  console.log(`Optimized class usage: ${(endOptimized - startOptimized).toFixed(2)}ms`);
  console.log(`Unoptimized class usage: ${(endUnoptimized - startUnoptimized).toFixed(2)}ms`);
  console.log(`Performance difference: ${((endUnoptimized - startUnoptimized) / (endOptimized - startOptimized)).toFixed(2)}x`);
}

benchmarkES6Classes();

```

Property Descriptors and Performance

```js

// Using property descriptors for performance optimization
function demonstratePropertyDescriptors() {
  console.log("Demonstrating property descriptors for performance");
  
  // Case 1: Regular object with standard properties
  function createRegularObject() {
    return {
      id: 1,
      name: "Regular Object",
      getValue() {
        return this.id;
      }
    };
  }
  
  // Case 2: Object with optimized property descriptors
  function createOptimizedObject() {
    const obj = {};
    
    // Define non-configurable, non-enumerable properties for better performance
    Object.defineProperties(obj, {
      id: {
        value: 1,
        writable: true,
        enumerable: false,  // Not enumerable improves for...in performance
        configurable: false // Non-configurable can be optimized better by engines
      },
      name: {
        value: "Optimized Object",
        writable: true,
        enumerable: true,
        configurable: false
      },
      getValue: {
        value: function() {
          return this.id;
        },
        writable: false,
        enumerable: false,
        configurable: false
      }
    });
    
    return obj;
  }
  
  // Case 3: Object with getters/setters (potentially slower)
  function createAccessorObject() {
    return {
      _id: 1,
      get id() {
        return this._id;
      },
      set id(value) {
        this._id = value;
      },
      name: "Accessor Object",
      getValue() {
        return this.id;
      }
    };
  }
  
  // Benchmark different property descriptor approaches
  const ITERATIONS = 1000000;
  
  // Regular object
  const regularObj = createRegularObject();
  const startRegular = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const value = regularObj.getValue();
    regularObj.id = i;
  }
  const endRegular = performance.now();
  
  // Optimized object
  const optimizedObj = createOptimizedObject();
  const startOptimized = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const value = optimizedObj.getValue();
    optimizedObj.id = i;
  }
  const endOptimized = performance.now();
  
  // Accessor object
  const accessorObj = createAccessorObject();
  const startAccessor = performance.now();
  for (let i = 0; i < ITERATIONS; i++) {
    const value = accessorObj.getValue();
    accessorObj.id = i;
  }
  const endAccessor = performance.now();
  
  console.log(`Regular object: ${(endRegular - startRegular).toFixed(2)}ms`);
  console.log(`Optimized object: ${(endOptimized - startOptimized).toFixed(2)}ms`);
  console.log(`Accessor object: ${(endAccessor - startAccessor).toFixed(2)}ms`);
  
  // Benchmark property enumeration
  const startRegularEnum = performance.now();
  for (let i = 0; i < ITERATIONS / 100; i++) {
    const keys = [];
    for (const key in regularObj) {
      keys.push(key);
    }
  }
  const endRegularEnum = performance.now();
  
  const startOptimizedEnum = performance.now();
  for (let i = 0; i < ITERATIONS / 100; i++) {
    const keys = [];
    for (const key in optimizedObj) {
      keys.push(key);
    }
  }
  const endOptimizedEnum = performance.now();
  
  console.log(`Regular object enumeration: ${(endRegularEnum - startRegularEnum).toFixed(2)}ms`);
  console.log(`Optimized object enumeration: ${(endOptimizedEnum - startOptimizedEnum).toFixed(2)}ms`);
}

demonstratePropertyDescriptors();

```

Combining Multiple Optimization Techniques

```js

// Combining multiple optimization techniques for maximum performance
class OptimizedComponent {
  constructor(config = {}) {
    // Initialize all properties upfront with defaults
    this.id = config.id || `component-${Date.now()}`;
    this.type = config.type || "default";
    this.state = config.state || "inactive";
    this.data = config.data || null;
    this.children = [];
    this.parent = null;
    
    // Private data using WeakMap (not enumerable, not on the instance)
    if (!OptimizedComponent._private) {
      OptimizedComponent._private = new WeakMap();
    }
    
    OptimizedComponent._private.set(this, {
      listeners: {},
      lastUpdate: Date.now()
    });
    
    // Freeze the prototype to prevent modifications
    if (!OptimizedComponent._frozen) {
      Object.freeze(OptimizedComponent.prototype);
      OptimizedComponent._frozen = true;
    }
  }
  
  // Methods defined on prototype (shared across instances)
  setState(newState) {
    this.state = newState;
    this._updateTimestamp();
    return this;
  }
  
  addChild(child) {
    if (child instanceof OptimizedComponent) {
      this.children.push(child);
      child.parent = this;
    }
    return this;
  }
  
  on(event, callback) {
    const privateData = OptimizedComponent._private.get(this);
    if (!privateData.listeners[event]) {
      privateData.listeners[event] = [];
    }
    privateData.listeners[event].push(callback);
    return this;
  }
  
  emit(event, ...args) {
    const privateData = OptimizedComponent._private.get(this);
    const listeners = privateData.listeners[event] || [];
    listeners.forEach(callback => callback.apply(this, args));
    return this;
  }
  
  // Private method pattern using underscore prefix
  _updateTimestamp() {
    const privateData = OptimizedComponent._private.get(this);
    privateData.lastUpdate = Date.now();
  }
  
  // Static factory method for object pooling
  static from(config) {
    // Use object pool if available
    if (OptimizedComponent._pool && OptimizedComponent._pool.length > 0) {
      const component = OptimizedComponent._pool.pop();
      
      // Reset and initialize with new config
      component.id = config.id || `component-${Date.now()}`;
      component.type = config.type || "default";
      component.state = config.state || "inactive";
      component.data = config.data || null;
      component.children = [];
      component.parent = null;
      
      // Reset private data
      OptimizedComponent._private.set(component, {
        listeners: {},
        lastUpdate: Date.now()
      });
      
      return component;
    }
    
    // Create new instance if pool is empty
    return new OptimizedComponent(config);
  }
  
  // Return to pool instead of letting garbage collector handle it
  release() {
    // Clear references
    this.children = [];
    this.parent = null;
    this.data = null;
    
    // Add to pool
    if (!OptimizedComponent._pool) {
      OptimizedComponent._pool = [];
    }
    
    OptimizedComponent._pool.push(this);
    return null; // Help caller clear reference
  }
}

// Benchmark the optimized component
function benchmarkOptimizedComponent() {
  console.log("Benchmarking optimized component with combined techniques");
  
  const ITERATIONS = 100000;
  
  // Test creation and basic operations
  const start = performance.now();
  
  for (let i = 0; i < ITERATIONS; i++) {
    // Create component (from pool after first iteration)
    const component = OptimizedComponent.from({
      id: `test-${i}`,
      type: "test"
    });
    
    // Perform operations
    component
      .setState("active")
      .on("update", data => {
        // Event handler
      });
    
    // Add child components
    const child = OptimizedComponent.from({
      id: `child-${i}`,
      type: "child"
    });
    
    component.addChild(child);
    component.emit("update", { timestamp: Date.now() });
    
    // Return to pool
    child.release();
    component.release();
  }
  
  const end = performance.now();
  console.log(`Optimized component operations: ${(end - start).toFixed(2)}ms`);
  console.log(`Average time per component: ${((end - start) / ITERATIONS).toFixed(4)}ms`);
  console.log(`Components per second: ${Math.floor(ITERATIONS / ((end - start) / 1000))}`);
  
  // Check pool size
  console.log(`Object pool size: ${OptimizedComponent._pool.length}`);
}

benchmarkOptimizedComponent();

```

/**
 * JavaScript Object Creation and Performance Best Practices
 * --------------------------------------------------------
 * 
 * 1. Consistent Object Shapes
 *    - Always initialize all properties in constructors
 *    - Maintain consistent property order
 *    - Avoid adding properties dynamically after creation
 * 
 * 2. Prototype Chain Management
 *    - Keep prototype chains shallow when possible
 *    - Avoid Object.setPrototypeOf() in hot code paths
 *    - Use ES6 classes for cleaner inheritance
 * 
 * 3. Property Descriptors
 *    - Make methods non-enumerable
 *    - Consider making properties non-configurable for critical paths
 *    - Use getters/setters judiciously as they can impact performance
 * 
 * 4. Memory Management
 *    - Implement object pooling for frequently created/destroyed objects
 *    - Use WeakMap for private data to avoid memory leaks
 *    - Clear references when objects are no longer needed
 * 
 * 5. Mixins and Composition
 *    - Prefer composition over deep inheritance hierarchies
 *    - Use Object.assign or spread operators for simple mixins
 *    - Implement proper conflict resolution for complex mixins
 * 
 * 6. ES6 Classes
 *    - Leverage ES6 classes for better readability and structure
 *    - Remember they're still based on prototypes
 *    - Initialize all properties in the constructor
 * 
 * 7. Immutability
 *    - Use Object.freeze for truly immutable objects
 *    - Consider the performance trade-offs of immutable patterns
 *    - Use immutability selectively where it provides clear benefits
 */

// Example of applying best practices
class Opt











