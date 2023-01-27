
console.clear()

ages = [18, 27, 78, 29, 5, 85];

function differenceInAges(ages){
  
    let minAge = Math.min(...ages);
    let maxAge = Math.max (...ages);
    let min = maxAge - minAge;
      
    return [minAge, maxAge, min];
    }

console.log(min)