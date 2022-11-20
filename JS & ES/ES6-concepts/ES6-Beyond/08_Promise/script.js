const API_URL = 'https://starwars.egghead.training/films';
const output = document.getElementById('output');
const spinner = document.getElementById('spinner');

fetch(API_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Error fetching data'));
  })
  .then((data) => {
    output.innerText = getFilmTitle(data);
  })
  .catch(handleError)
  .finally(() => {
    spinner.style.display = 'none';
  });

function getFilmTitle(data) {
  return data
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`)
    .join('\n');
}

function handleError(error) {
  console.log(error);
  const { message } = error;
  output.innerText = message;
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
