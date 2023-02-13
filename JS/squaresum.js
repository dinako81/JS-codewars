console.clear()

// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


function squareSum(numbers){



}

let numbers = [1, 2, 3]
let squareArr = numbers.map(x => x ** 2);
console.log(squareArr);


for (let i = 0; i < squareArr.length; i++) {
  squareSum = 0;
  squareSum += squareArr[i]
  console.log(squareSum)
}