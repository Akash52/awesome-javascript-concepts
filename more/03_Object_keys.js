//dot notation

const person = {
  name: 'Wes Bos',
  age: 80,
  country: 'Canada',
  treehouse: {
    course: 'JavaScript',
    teacher: 'Wes Bos',
    students: ['Wes', 'Kait', 'Irv'],
  },
};

console.log(person['name']);

//bracket notation

const items = {
  'first-item': ['item1', 'item2', 'item3'],
};
console.log(items['first-item'][0]);
