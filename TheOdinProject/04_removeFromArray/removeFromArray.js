// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the spread operator.  If this is unfamiliar to you look it up!
const removeFromArray = function (arr, num) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = arr[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((num) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(num)) {
        newArray.push(num);
      }
    });
    // and return that array
    return newArray;
  };

removeFromArray([1, 2, 3, 4], 3) // removes 3 and returns [1, 2, 3]

module.exports = removeFromArray;
