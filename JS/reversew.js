console.clear()

// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.

// const { log } = require("console");

// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


function reverseWords(str){
  
  //   let sujungti = '';
    
    let splitWords = str.split (' ');
    let reverseArray = splitWords.reverse ();
    naujasSakinys = reverseArray.join (' ');
 
    return naujasSakinys; 
    }

  // more optimal



