const grades = [35, 45, 78, 93, 62, 17];
const max = grades.reduce(maximum);
const min = grades.reduce(minimum);

console.log(max);
console.log(min);

function maximum(accumulator, element){
    return Math.max(accumulator, element);
}

function minimum(accumulator, element){
    return Math.min(accumulator, element);
}