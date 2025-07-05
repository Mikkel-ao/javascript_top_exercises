const removeFromArray = function(array, ...removals) {
    return array.filter(item => !removals.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
