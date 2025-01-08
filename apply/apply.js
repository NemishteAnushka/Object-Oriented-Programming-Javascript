//now apply method is as same is call method just we can pass the arguments in [] list

function userInfo(hobby, favMusic, singer) {
  console.log(`My name is ${this.firstName} my age is ${this.age}`);
  console.log(hobby);
  console.log(favMusic);
  console.log(singer);
}
const person1 = {
  firstName: "Anushka",
  age: 23,
  about: userInfo,
};
const person2 = {
  firstName: "Anuja",
  age: 18,
};

person1.about.apply(person2, ["music", "favmusic", "AS"]);
