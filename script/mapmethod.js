// map method

const numbers = [1, 2, 3,4];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);
function square(element){
    return Math.pow(element, 2)
};

function cube(element){
    return Math.pow(element, 3)
};

const students = ["Kayode", "Ian", "Jumoke"];
const upperCaseNames = students.map(upperCase);
const lowerCaseNames =students.map(lowerCase);

console.log(upperCaseNames);
console.log(lowerCaseNames);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}