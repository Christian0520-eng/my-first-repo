console.log("This is my First JavaScript code!");

// Types
console.log("String", "123");
console.log("Number", 123);
console.log("Boolean", true, false);
console.log("Undefined", undefined);
console.log("Null", null);
console.log("Array", [1, 2, 3]);
console.log("Object", { name: "John", age: 30 });
console.log("Symbol", Symbol("id"));

//Functions
function testFunction() {
  console.log("testFunction");
}
testFunction();

const testFunction2 = function () {
  console.log("testFunction2");
};
testFunction2();

const testFunction3 = () => {
  console.log("testFunction3");
};
testFunction3();

const data = {
  name: "Joy",
  hello: function () {
    console.log("Hello, " + this.name);
  },
};

data.hello();

//Arrays
const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);

//Objects
const person = {
  name: "Joy",
  age: 30,
  address: "2005 Ilangilang-Street,Batangas City, Philippines",
  skills: ["JavaScript", "HTML", "CSS"],
};

console.log(person.address);
console.log(person.skills);
console.log(person.skills[1]);

//Condition

const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

switch (age) {
  case 18:
    console.log("Adult");
    break;
  default:
    console.log("Not an adult");
}

//Loops
for (let i = 0; i < 5; i++) {
  console.log("For loop iteration:", i);
}

const animals = ["Dog", "Cat", "Elephant"];

for (let i in animals) {
  console.log("For in loop:", animals[i]);
}

for (const animal of animals) {
  console.log("Animal:", animal);
}

//Fetch API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
