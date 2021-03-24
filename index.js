// Code your solution here!
function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {

        printString(myString.substring(1, myString.length))
    }
};

function reverseString(myString) {
    const size = myString.length;
    if (myString.length > 1) {
        return myString[size - 1] + reverseString(myString.substring(0, size - 1));
    } else {
        return myString;
    }
};

function isPalindrome(myString) {
    //return reverseString(myString) === myString;
    const size = myString.length;
    if (size === 0 || myString[0] !== myString[size - 1]) {
        return false
    };
    if (size > 1) {
        isPalindrome(myString.substring(1, size - 1));
    };
    return true;
};

function addUpTo(array, index) {

};