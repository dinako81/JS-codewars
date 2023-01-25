
// Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
  
    let splitArray = str.split("");
    let reverseLetters = splitArray.reverse();
    newArray = reverseLetters.join("");
    
    return newArray;
    
  }

//   More optimal

  function solution(str){
    return str.split('').reverse().join('');  
  }