const object1 = {
  key1: "value1",
  key2: "value2",
};

// const object2 = {}; //one way to add empty object
//another way is to use object.create()

const object2 = Object.create(object1);
object2.key3 = "value3"
console.log(object2);
console.log(object2.key1)