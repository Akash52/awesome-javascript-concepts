const teams = [
  {
    name: 'New York Yankees',
    city: 'New York',
    country: 'USA',
    founded: 1876,
    championships: ['World Series', 'American League', 'National League'],
  },
  {
    name: 'Boston Red Sox',
    city: 'Boston',
    country: 'USA',
    founded: 1878,
    championships: ['World Series', 'American League', 'National League'],
  },
  {
    name: 'New York Mets',
    city: 'New York',
    country: 'USA',
    founded: 1879,
    championships: ['World Series', 'American League', 'National League'],
  },
  {
    name: 'Baltimore Orioles',
    city: 'Baltimore',
    country: 'USA',
    founded: 1876,
    championships: ['World Series', 'American League', 'National League'],
  },
  {
    name: 'Toronto Blue Jays',
    city: 'Toronto',
    country: 'Canada',
    founded: 1879,
    championships: ['World Series', 'American League', 'National League'],
  },
];

const city = teams.find((team) => {
  return team.city === 'New York';
});
console.log(city);

const cityIndex = teams.indexOf(city);
console.log(cityIndex);

//first part of teams array
const firstPart = teams.slice(0, cityIndex);
console.log(firstPart);

//second part of teams array
const secondPart = teams.slice(cityIndex + 1);
console.log(secondPart);
