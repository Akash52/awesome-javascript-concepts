//nullish coalescing operator is used to return a default value if the value is null or undefined

type serializationOptions = {
  formatting?: {
    indentSize: number;
  };
};

function serializeJSON(value: any, options?: serializationOptions) {
  const indent = options?.formatting?.indentSize ?? 2;
  return JSON.stringify(value, null, indent);
}

const user = {
  name: 'John',
  twitter: '@john',
  website: 'www.john.com',
};

const json = serializeJSON(user, {
  formatting: {
    indentSize: 4,
  },
});

console.log(json);

// //OR operator

// null || 2; //2
// undefined; //2
// false || 2; //2

// //nullish coalescing operator

// null ?? 2; //2
// undefined ?? 2; //2
// false ?? 2; //2
// 0 ?? 2; //0
// '' ?? 2; //''
// NaN ?? 2; //NaN
