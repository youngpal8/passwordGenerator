const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(isEven);
const oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


const ages = [10, 12, 5, 40, 50, 32];
const adults = ages.filter(isAdults);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdults(element){
    return element >=18;
}

function isChild(element){
    return element < 18;
}

const names = ["Ian", "Ayotomiwa", "Ayomikun"];
const shortWords = names.filter(isShortWord);
const longWords = names.filter(isLongWord);

console.log(shortWords);
console.log(longWords);

function isShortWord(element){
    return element.length <=6;
}

function isLongWord(element){
    return element.length >6;
}