//Type annotations for functions

const add = (a: number, b: number):number => {
    return a + b;
  };
  
  const divide = (a: number, b: number): number => {
    return a / b;
  };
  
  const multiply = (a: number, b: number) => a * b;
  
  //void function
  //void is used to specify that a function doesn't return a value.
  
  const logger = (message: string): void => {
    console.log(message);
  };

  
  //Never
  
  //Never is a type that represents the absence of a value.
  
  // const throwError = (message: string): never => {
  //   throw new Error(message);
  // };
  
  //Type Inference for functions
  
  //Here typescript knows that the return type of the function is number.
  
  const add2 = (a: number, b: number) => {
    return a + b;
  };

  //Destructuring with Annotations

const todaysWeather = {
    date: new Date(),
    weather: "sunny",
  };
  
  const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
    console.log(date);
    console.log(weather);
  };
  
  logWeather(todaysWeather);