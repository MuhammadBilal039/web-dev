// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for..of loop

const users = ["Bilal", "Muhammad", "Azan"];

for (const user of users) {
  console.log(user);
}

// for..in loop

const loggedInUser = {
  name: "Bilal",
  age: 22,
  student: true,
};

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}

// while loop

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done");
