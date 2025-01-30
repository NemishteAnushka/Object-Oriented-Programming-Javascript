//when you create an array like this
let arr = [1, 2, 3];
//JavaScript actually creates it using the new keyword behind the scenes
// let arr = new Array(1,2,3);
// arrays inherit from Array.prototype
//When you call an array method like .map(), JavaScript looks for it in arr. If not found, it checks Array.prototype
console.log(arr);

// so if you use Object.getPrototypeof(arr) you will get array of prototype in that array methods are present

console.log(Object.getPrototypeOf(arr));
