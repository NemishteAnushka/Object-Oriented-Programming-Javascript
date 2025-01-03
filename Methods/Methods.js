//Methods are
//Function inside object

const person = {
  firstName: "Anushka",
  age: 23,
  about: function () {
    // console.log("this", this); “This” keyword refers to an object that is executing the current piece of code. Means jo object apan banvla ahe toch this madye yeto ('person === this')
    console.log(`My name is ${this.firstName} and my age is ${this.age}`);
  },
};

person.about();
