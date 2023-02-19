console.clear()
// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;  
    const arr1 = arr.filter(x => x > 0);
      
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum
  }

  //more optimal

  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }