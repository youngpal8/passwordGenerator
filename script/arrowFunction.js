//formular is (PARAMETER => CODE)

const hey = function(){
    console.log("hey");
}
hey();

setTimeout

setTimeout(help, 3000);

function help(){
    console.log("help");
}

setTimeout(function(){
    console.log("Help");
}, 5000);



//using Arrow function with MFR method
const numb = [1, 2, 3, 4, 5, 6, 7, 8];
const square = numb.map ((element) =>
Math.pow(element, 2));

const cube = numb.map ((element) =>
Math.pow(element, 3));

const evenNumber = numb.filter((element) =>
element % 2 === 0);

const oddNumber = numb.filter((element) =>
element % 2 !== 0);

const totalNumber = numb.reduce((accumulaor, element) => (accumulaor + element));

// console.log(square);
// console.log(cube);
// console.log(evenNumber);
// console.log(oddNumber);
// console.log(totalNumber);