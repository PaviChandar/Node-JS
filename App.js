//normal func
// function sample() {
//     console.log("Hello world")
// }

// sample();

// function callFunction(fun)
// {
//     fun();
// }

// //func expression
// var example = function() {
//     console.log("Hi everyone")
// }

// callFunction(example);

var array = require('./array');

console.log(array.arrayList(['Damon', 'Stefan', 'Enzo']));
console.log(array.adder(5,10));
console.log(array.adder(array.pi,3));