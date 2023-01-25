// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://www.codewars.com/kata/5a023c426975981341000014/solutions/javascript



function otherAngle(a, b) {
  
    let anglesSum = a + b;
    let angle3 = 180 - anglesSum;
    
    return angle3;
  }




// Optimalesnis

function otherAngle(a, b) {
    return 180-(a+b);
  }