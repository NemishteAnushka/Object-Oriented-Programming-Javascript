//so 1st we got to know that methods() are functions inside object
//then we got to know about 'this'
//'this' is used inside a function, and will always refer to a single object — the object that invokes (calls) the function where “this” is used.
function userInfo(hobby) {
  console.log(`My name is ${this.firstName} and my age is ${this.age}`);
  console.log(hobby);
}
const person1 = {
  firstName: "Anushka",
  age: 23,
  about: userInfo,
};

const person2 = {
  firstName: "Anuja",
  age: 18,
  //   about: userInfo,
};

const person3 = {
  firstName: "Nisha",
  age: 15,
  //   about: userInfo,
};

// person1.about();
// person2.about();
// person3.about();

//so this is old way we used to pass the function beside this we can use call() method

// The call() method calls a function with a given this value and arguments provided individually.

//What that means, is that we can call any function, and explicitly specify what this should reference within the calling function

//in simple words we will decide what this will be whill calling the function so beside using the function mutiple time we can include the function in call method

person1.about.call(person3, "dancing"); // so this will give 'this' from the person 3 object
person1.about.call(person2, "singing");

//isnt it simple
//we can also pass the parameters
// person1.about.call(person2, "singing");
