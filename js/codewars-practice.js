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