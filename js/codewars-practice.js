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
// function solution(str){
//     let strArray = str.split("");
//     strArray = strArray.reverse();
//     return strArray.join("");
// }

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
//of note is that one common solution is to use the .toString(#) method, where the # indicates the base of the numeric string from decimal. kindof like the opposite of parse.


//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
function toCamelCase(str){
    if (str.indexOf("-") !== -1){
        let strArrayHyphen = str.split("-");
        for (let i = 0; i < strArrayHyphen.length; i++) {
            strArrayHyphen[i].split("");
            strArrayHyphen[i][0].toUpperCase();
            strArrayHyphen[i].join("");
        }
        return strArrayHyphen.join("");
    } else if (str.indexOf("_") !== -1){
        let strArrayUnderscore = str.split("_");
        for (let i = 0; i < strArrayUnderscore.length; i++) {
            strArrayUnderscore[i].split("")
            strArrayUnderscore[i][0].toUpperCase();
            strArrayUnderscore[i].join("");
        }
        return strArrayUnderscore.join("");
    } else {
        return "";
    }
}

//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false;
            break;
        } else if (a[i] <= limit && i === a.length - 1) {
            return true;
            break;
        } else {
            continue;
        }
    }
}

//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
function scramble(str1, str2) {
    let str2Array = str2.split("");
    console.log(str2Array)

    for (let i = 0; i < str2Array.length; i++) {
        if (str1.indexOf(str2Array[i]) === -1) {
            return false;
        }
        else {
            continue;
        }
    }
    return true;
}// this function doesnt work because it doesnt take into account repeated letters.

function abbrevName(name){
    let array = name.split(" ");
    array[0] = array[0].slice(0,1).toUpperCase();
    array[1] = array[1].slice(0,1).toUpperCase();
    return array.join(".");
}

// function maxMultiple(divisor, bound){
//     if (bound % divisor === 0){
//         return bound;
//     } else {
//         bound--;
//         maxMultiple(divisor, bound)
//     }
//     if (bound % divisor === 0) {
//         return bound;
//     }
//} // testing recursion. solving with a loop should be extremely easy, but I wanted to see if i could figure this out. i am missing something

function maxMultiple (divisor, bound){
    for (let i = bound; i > divisor; i--){
        if (i % divisor === 0){
            return i;
        }
    }
}
//most simple solution returns bound - (bound % divisor). makes sense, skips the entire looping process.


//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
function dirReduc(arr){
    let array = arr;
    for (let i = 0; i < array.length; i++) {
        if ((array[i] === `NORTH` && array[i+1] === 'SOUTH') || (array[i] === `SOUTH` && array[i+1] === 'NORTH') || (array[i] === `EAST` && array[i+1] === 'WEST') || (array[i] === `WEST` && array[i+1] === 'EAST')) {
            array.splice(i,2);
            console.log(array);
            i--;
            i--;
        } else {
            continue;
        }
    }
    return array;
}

// Complete the function which get an input number n such that n >= 10 and n < 10000, then:
// Sum all the digits of n.
// Subtract the sum from n, and it is your new n.
// If the new n is in the list below return the associated fruit, otherwise return back to task 1.
function SubtractSum(n){
    let nArray = String(n).split("");
    let x = 0;
    for (let i = 0; i < nArray.length; i++) {
        x += parseInt(nArray[i]);
    }
    return n - x;
}

function fizzBuzz (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return String(number);
    }
}

// A perfect power is a classification of positive integers:
//
// In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.
//
// Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.
const isPP = function(n){
    for (let i = 2; i < ((n / 2) + 1); i++){
        let number = n;
        let counter = 1;
        if (n % i === 0) {
            for (let j = 1; number >= i; j++) {
            number /= i;
            if (Math.ceil(number) !== Math.floor(number)){
                break;
            } else if (number === 1) {
                return [i, counter];
            } else {
                counter++;
            }
            }
        } else {
            continue;
        }
    }
        return null;
}

//this is a more efficient way
// function isPP(n) {
//   for (var m = 2; m * m <= n; ++ m)
//     for (var k = 2; Math.pow(m, k) <= n; ++ k)
//       if (Math.pow(m, k) == n) return [m, k];
//   return null;
// }


//Imagine you are in a universe where you can just perform the following arithematic operations. Addition(+), Subtraction(-), Multiplication(*), Division(/). You are given given a postfix expression. Postfix expression is where operands come after operator. Each operator and operand are seperated by a space. You need to evaluate the expression.
//
// For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70. Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, hence the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.
//
// Create a method 'evaluate' that takes a string as input and returns a long resulted in the evaluation. Just concentrate on happy paths. Assume that expression is always valid and division is always an integer division.

function postfixEvaluator(string) {
    let array = string.split(` `);
    while (array.indexOf(`+`) !== -1 || array.indexOf(`-`) !== -1 || array.indexOf(`*`) !== -1 || array.indexOf(`/`) !== -1) {
        if ((array.indexOf(`+`) < array.indexOf(`-`) && array.indexOf(`+`) < array.indexOf(`*`) && array.indexOf(`+`) < array.indexOf(`/`)) || (array.indexOf(`+`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) === -1) || ((array.indexOf(`+`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) === -1) && (array.indexOf(`+`) < array.indexOf(`-`))) || ((array.indexOf(`+`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) !== -1 && array.indexOf(`/`) === -1) && (array.indexOf(`+`) < array.indexOf(`*`))) || ((array.indexOf(`+`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`+`) < array.indexOf(`/`))) || ((array.indexOf(`+`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`*`) !== -1 && array.indexOf(`/`) === -1) && (array.indexOf(`+`) < array.indexOf(`-`)) && (array.indexOf(`+`) < array.indexOf(`*`))) || ((array.indexOf(`+`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`+`) < array.indexOf(`-`)) && (array.indexOf(`+`) < array.indexOf(`/`))) || ((array.indexOf(`+`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) !== -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`+`) < array.indexOf(`*`)) && (array.indexOf(`+`) < array.indexOf(`/`)))) {
            array.splice((array.indexOf(`+`) - 2), 3, (parseInt(array[array.indexOf(`+`) - 2]) + parseInt(array[array.indexOf(`+`) - 1])));
            //} else if ((array.indexOf(`-`) < array.indexOf(`+`) && array.indexOf(`-`) < array.indexOf(`*`) && array.indexOf(`-`) < array.indexOf(`/`)) || (array.indexOf(`-`) !== -1 && array.indexOf(`+`) === -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) === -1) || ((array.indexOf(`-`) !== -1 && array.indexOf(`+`) !== -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) === -1) && (array.indexOf(`-`) < array.indexOf(`+`))) || ((array.indexOf(`-`) !== -1 && array.indexOf(`+`) === -1 && array.indexOf(`*`) !== -1 && array.indexOf(`/`) === -1) && (array.indexOf(`-`) < array.indexOf(`*`))) || ((array.indexOf(`-`) !== -1 && array.indexOf(`+`) === -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`-`) < array.indexOf(`/`))) || ((array.indexOf(`-`) !== -1 && array.indexOf(`+`) !== -1 && array.indexOf(`*`) !== -1 && array.indexOf(`/`) === -1) && (array.indexOf(`-`) < array.indexOf(`+`)) && (array.indexOf(`-`) < array.indexOf(`*`))) || ((array.indexOf(`-`) !== -1 && array.indexOf(`+`) !== -1 && array.indexOf(`*`) === -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`-`) < array.indexOf(`+`)) && (array.indexOf(`-`) < array.indexOf(`/`))) || ((array.indexOf(`-`) !== -1 && array.indexOf(`+`) === -1 && array.indexOf(`*`) !== -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`-`) < array.indexOf(`*`)) && (array.indexOf(`-`) < array.indexOf(`/`))))
        } else if ((array.indexOf(`*`) < array.indexOf(`-`) && array.indexOf(`*`) < array.indexOf(`+`) && array.indexOf(`*`) < array.indexOf(`/`)) || (array.indexOf(`*`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`+`) === -1 && array.indexOf(`/`) === -1) || ((array.indexOf(`*`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`+`) === -1 && array.indexOf(`/`) === -1) && (array.indexOf(`*`) < array.indexOf(`-`))) || ((array.indexOf(`*`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`+`) !== -1 && array.indexOf(`/`) === -1) && (array.indexOf(`*`) < array.indexOf(`+`))) || ((array.indexOf(`*`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`+`) === -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`*`) < array.indexOf(`/`))) || ((array.indexOf(`*`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`+`) !== -1 && array.indexOf(`/`) === -1) && (array.indexOf(`*`) < array.indexOf(`-`)) && (array.indexOf(`*`) < array.indexOf(`+`))) || ((array.indexOf(`*`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`+`) === -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`*`) < array.indexOf(`-`)) && (array.indexOf(`*`) < array.indexOf(`/`))) || ((array.indexOf(`*`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`+`) !== -1 && array.indexOf(`/`) !== -1) && (array.indexOf(`*`) < array.indexOf(`+`)) && (array.indexOf(`*`) < array.indexOf(`/`)))) {
            array.splice((array.indexOf(`*`) - 2), 3, (parseInt(array[array.indexOf(`*`) - 2]) * parseInt(array[array.indexOf(`*`) - 1])));
        } else if ((array.indexOf(`/`) < array.indexOf(`-`) && array.indexOf(`/`) < array.indexOf(`*`) && array.indexOf(`/`) < array.indexOf(`+`)) || (array.indexOf(`/`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) === -1 && array.indexOf(`+`) === -1) || ((array.indexOf(`/`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`*`) === -1 && array.indexOf(`+`) === -1) && (array.indexOf(`/`) < array.indexOf(`-`))) || ((array.indexOf(`/`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) !== -1 && array.indexOf(`+`) === -1) && (array.indexOf(`/`) < array.indexOf(`*`))) || ((array.indexOf(`/`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) === -1 && array.indexOf(`+`) !== -1) && (array.indexOf(`/`) < array.indexOf(`+`))) || ((array.indexOf(`/`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`*`) !== -1 && array.indexOf(`+`) === -1) && (array.indexOf(`/`) < array.indexOf(`-`)) && (array.indexOf(`/`) < array.indexOf(`*`))) || ((array.indexOf(`/`) !== -1 && array.indexOf(`-`) !== -1 && array.indexOf(`*`) === -1 && array.indexOf(`+`) !== -1) && (array.indexOf(`/`) < array.indexOf(`-`)) && (array.indexOf(`/`) < array.indexOf(`+`))) || ((array.indexOf(`/`) !== -1 && array.indexOf(`-`) === -1 && array.indexOf(`*`) !== -1 && array.indexOf(`+`) !== -1) && (array.indexOf(`/`) < array.indexOf(`*`)) && (array.indexOf(`/`) < array.indexOf(`+`)))) {
            array.splice((array.indexOf(`/`) - 2), 3, (parseInt(array[array.indexOf(`/`) - 2]) / parseInt(array[array.indexOf(`/`) - 1])));
        } else {
            array.splice((array.indexOf(`-`) - 2), 3, (parseInt(array[array.indexOf(`-`) - 2]) - parseInt(array[array.indexOf(`-`) - 1])));
        }
    }
    return parseInt(array.join(``));
}

/* COME BACK TO THIS*/
// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120
//
// Your mission is simple: write a function that takes an integer n and returns the value of n!.
//
// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.
function factorial(n){
    if (n === 0) {
        return `1`;
    } else if (n > 0) {
        let x = n;
        let i = n - 1;
        while (i > 1){
            x = parseInt((x * i).toLocaleString('fullwide').split(`,`).join(``));
            i--;
        }
        return x.toLocaleString('fullwide').split(`,`).join(``);
    }
}
/*COME BACK TO THIS*/


//Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
//
// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
//
// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
//
// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
//
// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".
//
// Examples:
// (form of the result depends on the language)
//
// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".
//
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
function race(v1, v2, g) {
    if (v1 >= v2) {
        return null;
    } else {
        let t = g / (v2-v1);
        return [Math.floor(t),Math.floor((t-Math.floor(t))*60),Math.floor((t*3600) % 60)];
    }
}

// sum of the multiples of 3 and 5
function solution(number){
    let x = 0;
    for (let i = number; i >= 3; i--) {
        if (i % 3 === 0 || i % 5 === 0){
            x += i;
        }
    }
    return x;
}

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//count xs
//count os

//check ===
//return true/false

function XO(str) {
    let x = 0;
    let o = 0;
    let strA = str.split(``);
    for (let i = 0; i < strA.length; i++) {
        if (strA[i] === `x` || strA[i] === `X`) {
            x++;
        } else  if (strA[i] === `o` || strA[i] === `O`) {
            o++;
        } else {
            continue;
        }
    }
    return x === o;
}

//The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.
// Write a function which takes an integer array and returns its Stanton measure.
function stantonMeasure (array){
    let n = array.filter(x => x === 1).length;
    return array.filter(y => y === n).length;
}

//You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
// Here are the following valid operators :
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
function dotCalculator (equation) {
    if (equation.indexOf(`+`) !== -1) {
        return equation.splice(equation.indexOf(`+`) -1, 3);
    } else if (equation.indexOf(`-`) !== -1) {
        return
    }
        }

//You have function one_two (oneTwo for Java) that returns 1 or 2 with 50% chance. one_two is already defined in a global scope and can be called everywhere.
//
// Your goal is to create function one_two_three (oneTwoThree for Java) that returns 1, 2 or 3 with equal probability using only one_two function.
//
// Do not try to cheat returning repeating non-random sequences. There is randomness test especially for this case.

function one_two_three() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 1){
        return 3;
    } else{
        return one_two();
    }
}

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    let accumMin = 0;
    let accumMax = 0;
    let sortedArray = arr.sort(function(a,b){
        return a - b;
    })
    for (let i = 0; i < sortedArray.length; i++){
        if (i < 4){
            accumMin += sortedArray[i];
        }
        if (i >= sortedArray.length - 4){
            accumMax += sortedArray[i];
        }
    }
    console.log (`${accumMin} ${accumMax}`)
}

//Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
//
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    let time = s.slice(0,8);
    if (parseInt(time.slice(0,2)) < 12 && s.indexOf("A") !== -1) {
        return time;
    } else if (parseInt(time.slice(0,2)) === 12 && s.indexOf("A") === -1) {
        return time;
    } else if (parseInt(time.slice(0,2)) < 12 && s.indexOf("A") === -1){
        return (parseInt(time.slice(0,2)) + 12) + time.slice(2);
    } else {
        return `00${time.slice(2)}`;
    }
}


function min(arr){
    if (arr.length === 1){
        return arr[0];
    } else {
        if (arr[arr.length - 1] > arr[arr.length - 2]){
            arr.pop();
        } else{
            arr.splice(arr.length-2, 1);
        }
        return min(arr);
    }
}


//Function Description
//
// Complete the breakingRecords function in the editor below.
//
// breakingRecords has the following parameter(s):
//
// int scores[n]: points scored per game
// Returns
//
// int[2]: An array with the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
//LOOKING FOR THE NUMBER OF TIMES, NOT THE HIGHEST AND LOWEST NUMBERS!!!!!!!!!
// Input is an array with scores
function breakingRecords(scores) {
    let scoresArray = scores;
    let mincounter = 0;
    let maxcounter = 0;
    let minScore = scoresArray[0];
    let maxScore = scoresArray[0];
    for (let i = 1; i < scoresArray.length; i++){
        if (scoresArray[i] > maxScore){
            maxScore = scoresArray[i];
            maxcounter++;
        } else if (scoresArray[i] < minScore){
            minScore = scoresArray[i];
            mincounter++;
        }
    }
    return [maxcounter, mincounter];
}

//3step
const threeStep = n => (n**2)/2-(n/2)+1;

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.
//
// Input Format
//
// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be S (split) or C (combine)
// M indicates method, C indicates class, and V indicates variable
// In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
// Output Format
//
// For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

function processData(input) {
    let inputArray = input.split(';');
    if (inputArray[0].toLowerCase() === 's'){
        for (let i = 0; i < inputArray[2].length; i++){
            if (inputArray[2].charAt(i) === inputArray[2].charAt(i).toUpperCase())
                inputArray[2].splice(i-1, 0, ' ');
                i++;
        }
        return inputArray[2].toLowerCase();
    } else {
        if (inputArray[1].toLowerCase() === "m" || inputArray[1].toLowerCase() === "v"){
            let words = inputArray[2];
            let wordsArray = words.split(' ');
            let firstWord = wordsArray.unshift();
            wordsArray = dnUtils.string.capitalizeName(wordsArray.unshift().join(' '));
            return `${firstWord} ${wordsArray}`.split(' ').join('');
        } else {
            return  dnUtils.string.capitalizeName(inputArray[2]).split(' ').join('');
        }
    }
}


//The cat can jump up to 3 shelves at the same time: from shelf 1 to shelf 2 or 4 (the cat cannot climb on the shelf directly above its head), according to the illustration:
//Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)
//
// Task
// Find the minimum number of jumps to go from start to finish
function solution(start, finish) {
    //Mew
}