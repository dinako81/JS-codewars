console.clear()

// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){
   const sakinys = s;
   const word = s.split (' ');

   let shortest = 0;

   console.log(word)
   
   for (let i = 0; i < word.length; i++){
     
      let x = word[i];
     console.log(x)

     if (x < shortest){
      shortest = x;
     }
     return x.length;
   }
   
   }



   console.log(findShort('Labas ryyyytas oky Lietuva'));