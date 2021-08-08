//Write a function called add7 that takes one number and 
//returns that number + 7.
let number = 1;

function add7(num){
    num = num + 7;
    console.log(num);
}

add7(number);



//Write a function called multiply that takes 2 numbers and 
//returns their product.
function multiply(num1, num2){
    return num1 * num2;
}

let mult = multiply(5, 10);

console.log(mult);



//Write a function called capitalize that takes a string and 
//returns that string with only the first letter capitalized. 
//Make sure that it can take strings that are lowercase, UPPERCASE 
//or BoTh.
function capitalize(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let string = capitalize("This Is A String.");

console.log(string);



//Write a function called lastLetter that takes a string and 
//returns the very last letter of that string:
//lastLetter("abcd") should return "d"
function lastLetter(string2){
    lastChar = string2.charAt(string2.length-1);
    return lastChar;
}

let string2 = lastLetter("This is also a string")

console.log(string2)