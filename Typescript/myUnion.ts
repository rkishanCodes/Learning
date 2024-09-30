// let score: number | string;

// score = 89;
// score = "89";

type Admin = {
  name: string;
  age: number;
};

// type Pay={
//     pay:boolean;
// }

// let kishan: User | Admin = { name: "kishan" };

// kishan = { name: "kishan" };

type User = {
  name: string;
  age: number;
  adress?: string;
};
const data: (User | number | string)[] = [
  1,
  2,
  "3",

  {
    name: "kishan",
    age: 30,
    // hobbies: ["reading", "painting", "traveling"]
  },
];

type Status = "single" | "married" | 1 | "nice" | number;

let ustatus: Status;
