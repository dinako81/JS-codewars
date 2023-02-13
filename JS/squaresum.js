console.clear()

// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
const numbers = [1, 2, 2];

function squareSum(numbers){

    const square = numbers.map(x => x * x);
    console.log(square)

    // for ( let i = 0; i < square.length; i++) {
    //    let sum += square++
    //     console.log(sum)
    // }
   
}
  console.log(squareSum([1, 2, 2]))
  console.log(squareSum([7, 5, 4]))