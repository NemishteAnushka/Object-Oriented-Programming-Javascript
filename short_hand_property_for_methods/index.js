//this is short hand property we dont need to use key value
const person = {
  firstName: "Anushka",
  age: 23,
  //   about: function () {
  //     console.log(this.firstName, this.age);
  //   },
  about() {
    console.log(this.firstName, this.age);
  },
};
person.about();
