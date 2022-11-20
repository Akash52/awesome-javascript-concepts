const teams = [
  {
    name: 'New York Yankees',
    city: 'New York',
    country: 'USA',
    founded: 1876,
    championships: ['World Series', 'American League', 'National League'],
    points: 223,
  },
  {
    name: 'Boston Red Sox',
    city: 'Boston',
    country: 'USA',
    founded: 1878,
    championships: ['World Series', 'American League', 'National League'],
    points: 123,
  },
  {
    name: 'New York Mets',
    city: 'New York',
    country: 'USA',
    founded: 1879,
    championships: ['World Series', 'American League', 'National League'],
    points: 100,
  },
  {
    name: 'Baltimore Orioles',
    city: 'Baltimore',
    country: 'USA',
    founded: 1876,
    championships: ['World Series', 'American League', 'National League'],
    points: 200,
  },
  {
    name: 'Toronto Blue Jays',
    city: 'Toronto',
    country: 'Canada',
    founded: 1879,
    championships: ['World Series', 'American League', 'National League'],
    points: 300,
  },
];

// let points = 0;

// for (let i = 0; i < teams.length; i++) {
//   points += teams[i].points;
// }

// console.log(points);

//map & reduce over points

const points = teams
  .map((team) => {
    return team.points;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(points);

//reduce over points

const totalPoints = teams.reduce((total, team) => {
  return total + team.points;
}, 0);

//flaten array using reduce

const flattened = teams.reduce((acc, curr) => {
  return acc.concat(curr.championships);
}, []);

console.log(flattened);
