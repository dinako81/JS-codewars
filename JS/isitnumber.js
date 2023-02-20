console.clear()

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

function isDigit(s) {
    if (typeof s === 'number') { //valid single integer or floating number???
     return true
  } 
    return false
  } 
  

  console.log(isDigit("3"));
  console.log(isDigit("  3  "));
  console.log(isDigit("-3.23"));


  console.log(isDigit("3-4"));
  console.log(isDigit("  3   5"));
  console.log(isDigit("3 5"));
  console.log(isDigit("zero"));