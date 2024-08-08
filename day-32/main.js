let age = 32;
let userName = "Bilal Khan";
let hobbies = ["Sports", "Programming", "Traveling", "Reciting"];
let job = { title: "Web Developer", name: "ABC", salary: 50000 };

let totalAdultYears;

function calculateAdultYears(userAge) {
  let result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

let person = {
  name: "John Doe",
  age: 30,
  greet() {
    alert("Hello");
  },
};

person.greet();
