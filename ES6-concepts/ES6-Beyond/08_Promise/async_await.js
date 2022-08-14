function myPromiseFunction() {
  return new Promise((res) => res('Hello'));
}

function myAsyncFunction() {
  myPromiseFunction()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log('after');
}

async function myAsyncFunction2() {
  console.log(await myPromiseFunction());
  console.log('after');
}

myAsyncFunction();
myAsyncFunction2();

//Exampele 1

(async () => {
  const data = await fetch('https://starwars.egghead.training/films');
  const films = await data.json();
  const filmData = films.map(
    (film) => `${film.title} (${film.release_date}) (${film.episode_id})`
  );
  console.log(filmData);
})();

async function fetchUser(id) {
  try {
    const data = await fetch(`https://api.github.com/users/${id}`);
    const user = await data.json();
    console.log(user);
  } catch (error) {
    const { message } = error;
    console.log(message);
  }
}

fetchUser('johndoe');
