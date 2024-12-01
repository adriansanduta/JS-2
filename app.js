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

// 8.Reverse a string
// Given a string, return the reversed string

function reverseString(str) {
    let reversedString = '';
   for (let i = 0; i < str.length; ++i); {
    reversedString = str[i] + reversedString;
   }
   return reversedString;
}
console.log(reverseString("This is cool"));


function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("This is cool"));

// 9. Turn every element in an array into 0
// Given an array of elements, return the same length array filled with 0's
// For loop
function convertToZeros(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    newArr[i]  = 0 }
    return newArr;   
}
console.log(convertToZeros([8, 5, 9, 4]));

// Array 'fill'
function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}
console.log(convertToZeros([8, 5, 9, 4]));


// Array 'map'
function convertToZeros(arr) {
    return arr.map(elem => 0);
}
console.log(convertToZeros([8, 5, 9, 4]));


// 10. Filter out all the apples
// Given an array of fruits, if it is an apple remove it from the array

function removeApples(arr) {
   return arr.filter(element => element !== 'Apple');
}
console.log(removeApples(['Banana', 'Orange', 'Apple']));

// 'For' loop
function removeApples(arr) {
    let noApples = []
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple'){
            noApples.push(arr[i]);
        }
    }
    return noApples;
 }
 console.log(removeApples(['Banana', 'Orange', 'Apple']));

// 11. Filter out all the falsy values
// Given an array of values, filter out all the falsy values and only return the truthy values

function filterOutFalsy(arr){
    return arr.filter(element => !!element === true);
}
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]));
 
// 'for' loop
function filterOutFalsy(arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]));