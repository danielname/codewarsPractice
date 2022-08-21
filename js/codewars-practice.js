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

//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function DNAStrand(dna){
    let dnaArr = dna.split("");
    let i = 0;
    while (i < dnaArr.length) {
        if (dnaArr[i] === "A") {
            dnaArr.splice(i,1,"T");
        } else if (dnaArr[i] === "T") {
            dnaArr.splice(i,1,"A");
        } else if (dnaArr[i] === "C") {
            dnaArr.splice(i,1,"G");
        } else {
            dnaArr.splice(i,1,"C");
        }
        i++;
    }
    return dnaArr.join("")
}

//Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).
function leastLarger(a,i) {
    let array = a;
    let startingValue = array[i];
    let sortedArray = array.sort(function (a, b) {
        return a - b;
    })
    let newIndex = sortedArray.indexOf(startingValue) + 1;
    console.log(newIndex);
    if (newIndex <= sortedArray.length){
    let valueSeek = sortedArray[newIndex];
    return array.indexOf(valueSeek);
    } else {
        return -1;
    }
}// for some reason this function works in the console, but does not work on codewars


//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
function binaryArrayToNumber(array){
    let biString = array.join('');
    return parseFloat(biString, 2);
}

function squareDigits(num){
    let numString = String(num);
    let numStringArray = numString.split("");
    for (let i = 0; i < numStringArray.length; numStringArray.splice(i,1,numStringArray[i] ** 2) ** 2, i++);
    let numStringArrayString = numStringArray.join("");
    return parseInt(numStringArrayString);
}//take a number, convert to string, convert to array,
//square each number, convert to string, convert to number

//YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task
// Create a function that takes in a list of button inputs and returns the final state.
function likeOrDislike (array) {
    let x = "Nothing";
    let i = 0;
    while (i < array.length) {
        if (x === "Nothing" && array[i] === "Like") {
            x = "Like";
        } else if (x === "Nothing" && array[i] === "Dislike") {
            x = "Dislike";
        } else if (x === "Like" && array[i] === "Dislike") {
            x = "Dislike";
        } else if (x === "Like" && array[i] === "Like") {
            x = "Nothing";
        } else if (x === "Dislike" && array[i] === "Like") {
            x = "Like";
        } else {
            x = "Nothing";
        }
        i++;
    }
    return x;
}

//reversing the letters in a string
function solution(str){
    let strArray = str.split("");
    strArray = strArray.reverse();
    return strArray.join("");
}

// hello world in arrow form
// const greet = () =>"hello world!";

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
function roundToNext5(n){
    return Math.ceil(n / 5) * 5;
} // const roundToNext5 = n => Math.ceil(n/5)*5;


// Write function which takes a string and make an acronym of it.
function toAcronym(inp){
    let inpArray = inp.split(" ");
    inpArray.forEach((word,index)=>{
    inpArray[index] = word.slice(0,1).toUpperCase();
    })
    return inpArray.join("");
}


// function that checks if a number is divisible by 2 other numbers
const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;


// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.
function addBinary(a,b) {
    let array = [];
    let sum = a + b;
    for (let i = sum; i > 0; i = i / 2) {
        if (i % 2 === 1) {
            array.unshift("1");
            i--;
        } else {
            array.unshift("0");
        }}
    return array.join("");
}

