console.clear()

// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

const marks = [1, 2, 3]

function double(x){
     return x * 2
}
const marks2x = marks.map(double)

console.log(marks2x)