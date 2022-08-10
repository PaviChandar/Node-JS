var arrayList = function(arr) {
// module.exports.arrayList = function(arr) {
    return ("There are " + arr.length + " elements in this array");
};

var adder = function(x,y) {
// module.exports.adder = function(x,y) {
    return `The sum of the 2 numbers is ${x+y}`;
};

// module.exports.pi = 3.142
var pi = 3.142

// module.exports.arrayList = arrayList;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    arrayList : arrayList,
    adder : adder,
    pi : pi
}