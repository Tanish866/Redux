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

console.log(makeItalics(makeUpperCase(repeatString(removeSpaces(str)))));

// removeSpaces -> repeatString -> makeUpperCase -> makeItalics 

// alternatives

const func = [str, removeSpaces, repeatString, makeUpperCase, makeItalics];

const result = func.reduce((prevAns, currAns) =>{
    console.log(prevAns, currAns);
    return currAns(prevAns);
});

console.log("final result is: " + result);
