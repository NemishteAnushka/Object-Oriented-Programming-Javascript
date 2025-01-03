//Multiple methods
function userInfo() {
  console.log(`My name is ${this.firstName} and my age is ${this.age}`);
}
const person1 = {
  firstName: "Anushka",
  age: 23,
  about: userInfo,
};

const person2 = {
  firstName: "Anuja",
  age: 18,
  about: userInfo,
};

const person3 = {
  firstName: "Nisha",
  age: 15,
  about: userInfo,
};

//now when ever i will call userInfo method "this" will be the object where function is been calling
//for example
person1.about(); //Here "this" will be person1 object itself
person2.about(); //Here "this" will be person2 object itself
person3.about(); //Here "this" will be person3 object itself
