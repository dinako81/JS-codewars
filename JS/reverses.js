console.clear()
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript
// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  
  return str.split("").reverse().join ("");
  
}

console.log('-----------')

function solution(str){
   let revStr = ' ';

   for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
    console.log(i, '-->', str[i], revStr)
   }

    return revStr;
    
  }

console.log('abs'), '-->', ('cba');
console.log('labas'), '-->', ('sabal');
console.log(solution('hello'));
console.log(solution('matematika'));

