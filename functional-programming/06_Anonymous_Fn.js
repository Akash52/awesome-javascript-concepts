//Pointfree Programming

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = (x) => x * 2;
array.map(double);

//Legibility
//Reduce the surface area for bugs
//unit test our named functions

//Pointful Programming
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.map((x) => x * 2);
