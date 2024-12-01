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

// 5.Add up up the numbers from a single number
// Given a number, add up all the numbers from one to the number that is given

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i); {
    sum = sum + i;
}
return sum;
}
console.log(progressiveSum(3));

// 6.Calculate the time
// Given a number in seconds, return this number in mm:ss format

function calcTime(seconds) {
   let timerMinutes = Math.floor(seconds / 60);
   let timerSeconds = seconds % 60;
   if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes
   }
   return timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(50));

// 7.Find the largest number
// Given an array of numbers, return the largest number of that array

function getMax(arr) {
    let max = arr[0];
   for (let i = 0; i < arr.length; ++i) {
       if (arr[i] > max) {
        max = arr[i];
       }
   }
   return max;
}
console.log(getMax([5, 85, 9, 7]));

