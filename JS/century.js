console.clear()

// Century from year

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    // if (year % 100 > 0) {
    //   let ++century ;
    // }
    // return century 
    return Math.floor ((year-1)/100) + 1
  }

  console.log(1652)