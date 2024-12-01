// 1. Falsy or Truthy?
// Given two values, return the first one if it is falsy, otherwise return the second one

function filterOutFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2 ;
}
console.log(filterOutFalsy(0, 50));

// 2.Return the length of any given array
// Given an array, return it's length

function arrLength(arr) {
     return arr.length;
}
console.log(arrLength([1, 2, 3, 4]));

