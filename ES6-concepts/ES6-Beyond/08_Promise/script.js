const API_URL = 'https://starwars.egghead.training/films';
const output = document.getElementById('output');
const body = document.querySelector('body');

fetch(API_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  })
  .then((data) => {
    output.innerText = getFilmTitle(data);
  })
  .catch(handleError);

function getFilmTitle(data) {
  return data
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join('\n');
}

function handleError(error) {
  output.innerText = 'Error';
  console.error(error);
}

// const films = fetch(API_URL);
// films
//   .then((response) => response.json())
//   .then((data) => {
//     const filmData = data.map(
//       (film) => `${film.title} (${film.release_date}) (${film.episode_id})`
//     );
//     const filmList = document.createElement('ul');
//     filmList.innerHTML = filmData.map((film) => `<li>${film}</li>`).join('');
//     document.body.appendChild(filmList);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('finally');
//   })
//   .then(() => {
//     console.log('then');
//   });

body.style.backgroundColor = '#000';
body.style.color = '#fff';
body.style.fontSize = '1.5rem';
body.style.fontFamily = 'monospace';
