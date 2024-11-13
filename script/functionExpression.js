const number = [1, 2, 3, 4, 5];
const squares = number.map(square);


function square(element) {
    return Math.pow(element, 2);
};

console.log(squares)
const cubes = number.map(function(element){
    return Math.pow(element, 3);
});

console.log(cubes);

const num = [1, 2, 3, 4, 5, 6, 7];
const evenNum = num.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNum);

const oddNum = num.filter(function(element) {
    return element % 2 == 0;
});

console.log(oddNum);

const total = num.reduce(function(accumulator, element) {
    return (accumulator + element);
});

console.log(total);