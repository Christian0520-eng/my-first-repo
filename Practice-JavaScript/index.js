function myName(name) {
  console.log(`My name is ${name}`);
}
myName("Joy");

const myName2 = function (name) {
  console.log(`My name is ${name}`);
};
myName2("Joyjoy");

const myName3 = (name, age, address) => {
  console.log(`My name is ${name}`);
  console.log(`My age is ${age}`);
  console.log(`I live in ${address}`);
};
myName3("Joyjoyjoy", "30", "Quezon city");
