function userInfo() {
  console.log(`My name is ${this.firstName} my age is ${this.age}`);
  //   console.log(hobby);
  //   console.log(favMusic);
  //   console.log(singer);
}
const person1 = {
  firstName: "Anushka",
  age: 23,
};
const person2 = {
  firstName: "Anuja",
  age: 18,
};

const func = userInfo.bind(person2);
func();
