const reverseString = function(str) {
    const myArr = str.split('');
    const reversed = myArr.reverse();
    const newStr = reversed.join('');
    return newStr

    // another way to do this would have been 
    // return string.split('').reverse().join('')
};

reverseString('hello there') // returns 'ereht olleh'

module.exports = reverseString;
