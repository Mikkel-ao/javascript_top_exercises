const reverseString = function(str) {
    if (typeof str !== 'string') {
        return 'Input must be a string';
    }
    
    // Reverse the string using split, reverse, and join methods
    return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
