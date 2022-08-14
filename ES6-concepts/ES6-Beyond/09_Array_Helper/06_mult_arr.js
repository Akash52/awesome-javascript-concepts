const posts = [
  {
    id: 1,
    title: 'New Post',
    author: 'John Doe',
    views: 120,
    language: ['javascript', 'html', 'css'],
  },
  {
    id: 2,
    title: 'Old Post',
    author: 'Jane Doe',
    views: 10,
    language: ['javascript', 'html', 'css'],
  },
];

const jhonPost = posts.find((post) => post.author === 'John Doe');
console.log(jhonPost);

//map post language

// const postLanguages = posts.map((post) => {
//   return post.language;
// });
// console.log(postLanguages);

//filter post language

// const postLanguages = posts.filter((post) => {
//   return post.language.length > 1;
// });

//reduce post language

const postLanguages = posts.reduce((acc, post) => {
  return acc.concat(post.language);
}, []);
console.log(postLanguages);

const usedLanguage = Array.from(new Set(postLanguages));
console.log(usedLanguage);
