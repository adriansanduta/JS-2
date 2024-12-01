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

// 3. Get the last element in an array
// Given an array, return the last element

function arrLength(arr) {
    return arr[arr.length -1];
}
console.log(arrLength([9, 2, 3, 4]));

