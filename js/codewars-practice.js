function makeNegative(number) {
    return -Math.abs(number);
}

// const makeNegative = number => -Math.abs(number);
/*#######################################################*/

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    let x = 0;
    for (let i = 0; i < array.length; x = x + array[i], i++);
    if (x % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
    }

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check (a, x) {
    return a.indexOf(x) !== -1;
}

// We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.
function findNextPower (val, pow) {
    for (var i = val + 1; Number.isInteger(Math.pow(i,(1 / pow))) === false; i++);
    return i;
}
/* the code seems to work except for big numbers. come back to this*/

// fix the code
function multiply(a, b){
    return a * b;
}

//Complete the function which converts hex number (given as a string) to a decimal number.
function hexToDec (string) {
    return parseInt(string, 16);
}
// const hexToDec = string => parseInt(string, 16);

//Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input == null){
        return [];
    } else if (input.length > 0) {
        let x = 0;
        let y = 0;
        let i = 0;
        while (i < input.length) {
            if (input[i] > 0) {
                x++;
            } else {
                y = y + input[i];
            }
            i++;
        }
        return [x, y];
    } else {
        return [];
    }
}

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    let numArray = numbers.split(" ");
    numArray.sort(function(a,b){
        return a-b;
    })
    return numArray[numArray.length - 1] + " " + numArray[0];
}

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
function getSum (a, b) {
    let numArray = [a, b];
    numArray.sort(function (a,b) {
        return a-b;
    })
    let x = 0;
    for (let i = numArray[0]; i <= numArray[1]; x = x + i, i++);
    console.log(numArray);
    return x;
}

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    let str = s1 + s2;
    let arr = str.split("");
    arr.sort();
    let arrStr = arr.join("");
    return String.prototype.concat(...new Set(arrStr));
}

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    return "Hello, " + name + " how are you doing today?";
}

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd (integer) {
    if (integer % 2 === 0) {
        return "Even";
    }
    return "Odd";
}

//Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.
function booleanToString(b){
    if (b === true) {
        return "true";
    } else {
        return "false";
    }
}
/* function booleanToString(b) {
    return b?"true":"false";
    }
 */

