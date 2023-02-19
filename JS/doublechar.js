console.clear()
// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


// issplitinam, pamapinaim v+v ir join

function doubleChar(str) {  
    return str.split('').map(function(v) {return v + v;}).join('')
    }
      

// more optimal