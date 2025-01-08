const person = {
  firstName: "Anushka",
  age: 23,
  about: () => {
    console.log(`My name is ${this.firstName} and age is ${this.age}`);
  },
};

person.about(); //this will return undefined
//You can't directly use this inside an arrow function when you need it to refer to the object it belongs to. Arrow functions are designed to inherit this from their lexical scope, which is often not the object itself in cases like this example.
