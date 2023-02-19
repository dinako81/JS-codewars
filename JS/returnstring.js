console.clear()


// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

// For example:

// "This Is A Test" ==> "TIAT"
// Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

// function makeString(s){
//     return s.split(' ').splice(1).join()
//   }
  

const s = "This Is A Test";
const words = s.split(" ");
console.log(words)


const pirma = words[0];
const kitos = words.slice(1)
console.log(kitos)