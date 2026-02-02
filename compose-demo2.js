import { compose } from "redux";
function removeSpaces(str){
    return str.split(" ").join("");
}

function repeatString(str){
    return str.repeat(2);
}

function makeUpperCase(str){
    return str.toUpperCase();
}

function makeItalics(str){
    return str.italics();
}

let str = "Hello there how are you?";
const composedFunc = compose(removeSpaces, repeatString, makeUpperCase, makeItalics);
console.log(composedFunc(str));

// compose function takes a bunch of functions and compose them into one chain of function