console.clear()

// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.
let x = [];

function sumMix(x){
    let sum = 0;
    let x1 = x.map(a => a * 1)
    for (let i = 0; i < x1.length; i++){
        sum += x1[i]
        }
        return sum
      }
    