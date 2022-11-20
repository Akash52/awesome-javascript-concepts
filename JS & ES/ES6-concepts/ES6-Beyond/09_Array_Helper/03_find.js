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

function findTeam(teams, name) {
  return teams.find((team) => {
    return team.name === name;
  });
}
console.log(findTeam(teams, 'New York Yankees'));
console.log(findTeam(teams, 'Toronto Blue Jays'));

//find team by city

function findTeamByCity(teams, city) {
  return teams.find((team) => {
    return team.city === city;
  }).name;
}
console.log(findTeamByCity(teams, 'New York'));

//find team by country

function findTeamByCountry(teams, country) {
  return teams.find((team) => {
    return team.country === country;
  }).name;
}
console.log(findTeamByCountry(teams, 'USA'));

//find USA team name

function findUSATeamName(teams) {
  return teams.find((team) => {
    return team.country === 'USA';
  }).name;
}
console.log(findUSATeamName(teams));

//filter teams founded after 1876

function filterTeamsFoundedAfter1876(teams) {
  return teams
    .filter((team) => {
      return team.founded > 1876;
    })
    .map((team) => {
      return team.name;
    })
    .join(', ');
}
console.log(filterTeamsFoundedAfter1876(teams));

//filter teams by city

function filterTeamsByCity(teams, city) {
  return teams
    .filter((team) => {
      return team.city === city;
    })
    .map((team) => {
      return team.name;
    })
    .join(', ');
}
console.log(filterTeamsByCity(teams, 'New York'));

//filter teams by country

function filterTeamsByCountry(teams, country) {
  return teams
    .filter((team) => {
      return team.country === country;
    })
    .map((team) => {
      return team.name;
    })
    .join(', ');
}
console.log(filterTeamsByCountry(teams, 'USA'));
