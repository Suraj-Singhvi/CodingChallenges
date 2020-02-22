/**
 * Create Phone Number

    Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

    Example:
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

    The returned format must be correct in order to complete this challenge.
    Don't forget the space after the closing parentheses!

 */

/**
 * Test if the input is an Array using 
 *     1. inputArrayOfNos instanceof Array 
 *     2. Array.isArray(inputArrayOfNos)
 *     3. inputArrayOfNos.constructor === Array
 * 
 * Test if the input no if of type number
 *     1. typeof(23) === "number"
 *     2. isNaN(23) == false => the result is a no.
 */

// SIMPLE solution
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }

    return format;
}


function createPhoneNumber(numbers) {

    const isInputValid = isInputArrayValid(numbers);
    if (!isInputValid) {
        console.log('Please enter a valid Input array of length 10 & have single digit only');
        return;
    }

    let phoneNo = numbers.join('');
    phoneNo = '(' + phoneNo.slice(0, 3) + ') ' + phoneNo.slice(3, 6) + '-' + phoneNo.slice(6, 10);
    console.log(phoneNo);
    return phoneNo;
}

function isInputArrayValid(numbers) {
    if (numbers instanceof Array && numbers.length === 10) {
        const inputArrayHasSingleDigitNumber = numbers.filter(n => typeof (n) != 'number' || n.toString().length != 1).length == 0;
        return inputArrayHasSingleDigitNumber;
    }
    return false;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, "0"]);
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, "suraj"]);