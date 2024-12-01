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

// 4. Find the sum of an array
// Given an array, return the sum of every element
// for (let i=0; i < arr.length; ++i)

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i); {
    sum = sum + arr[i];
}
return sum;
}
console.log(arrSum([1, 5, 8, 9]));

// 5.