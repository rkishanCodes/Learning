// const User={
//     name: "John Doe",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     },
//     hobbies: ["reading", "painting", "traveling"]
// }

// console.log(user);

// function createUser({ name: string }) {}

// createUser({ name: "kishan" });

// function retunObj(): { name: string } {
//   return { name: "kishan" };
// }

type User = {
  readonly _id: string;
  name: string;
  age: number;
  creditCard?: number;
};

let user: User = {
  _id: "123",
  name: "kishan",
  age: 89,
  creditCard: 1234,
};

user.name = "ch";

function createUser(user: User): User {
  return user;
}

createUser({ name: "kishan", age: 89 ,_id:"ge"});

export {};

type CardName = {
  cardName: string;
};

type CardNumber = {
  cardNumber: number;
};

type Card = CardName &
  CardNumber & {
    cvv: string;
  };

let card: Card = {
  cardName: "Visa",
  cardNumber: 1234567890123456,
  cvv: "123",
};
