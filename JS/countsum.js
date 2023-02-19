console.clear()

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



// function countPositivesSumNegatives(input) {
//     const arr = [];
//     const x = 0;
    
//      if (x > 0) {       
//        for (let i = 0; i < arr.length; i++){
//          mul *= arr[i];         
//        }
//        return mul;
//     }
    
//       if (x < 0) {
//         for (let i = 0; i < arr.length; i++){
//          sum += arr[i];
        
//         }
//         return sum; 
//     }

// const arr2 = [mul + sum]
//    return arr2
//   }


// countPositivesSumNegatives(1, 3, -5, 8, 9)

const num = [1, 2, -3, 4, 6, -8, 11, -17];
const arr1 = num.filter(x => x > 0);
console.log(arr1)

console.log(arr1[i++])

// for (let i = 0; i < arr1.length; i++){
//     count += arr1[i];
    
//     }
// console.log(count)


const arr2 = num.filter(x => x < 0);
console.log(arr2)
// for (let i = 0; i < arr2.length; i++){
//     sum += arr2[i]++;
    
//     }
//     console.log(sum)