const printName = (name: number): number => {
  console.log(name);
  // return "hello world"
  return 123;
};

const myName = printName(1);

const consoleError = (error: string): void => {
  console.log(error);
};
const throwError = (error: string): never => {
  throw new Error(error);
};

const heros = ["a", "b"];

heros.map((item: string): string => {
  console.log(item.toString());
  return "kishan";
});
