let user1 = {
  firstName: "Anushka",
  age: 23,
};
let user2 = {
  teacher: "Anuja",
  num: 18,
};

//note key should be diff in both objects
const combine = Object.assign({}, user1, user2);
console.log(combine);
