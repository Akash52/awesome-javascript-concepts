//optional chaining

// type serializationOptions = {
//   formatting: {
//     indentSize: number;
//   };
// };

// function serializeJSON(value: any, options: serializationOptions) {
//   const indent = options.formatting.indentSize;
//   return JSON.stringify(value, null, indent);
// }

// const user = {
//   name: 'John',
//   twitter: '@john',
//   website: 'www.john.com',
// };

// const json = serializeJSON(user, {
//   formatting: {
//     indentSize: 2,
//   },
// });

// console.log(json);

//2nd case

type serializationOptions = {
  formatting?: {
    indentSize: number;
  };
};

function serializeJSON(value: any, options?: serializationOptions) {
  const indent = options?.formatting?.indentSize;
  return JSON.stringify(value, null, indent);
}

const user = {
  name: 'John',
  twitter: '@john',
  website: 'www.john.com',
};

const json = serializeJSON(user, {
  formatting: {
    indentSize: 2,
  },
});

console.log(json);

//For avoiding nested coditionals
//we can use the optional chaining operator
//optional chaining is a feature of TypeScript that allows us to access properties of an object that might not exist.

// options
//     ? options.formatting
//       ? options.formatting.indentSize
//       : undefined
//     : undefined;
