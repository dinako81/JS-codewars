console.clear()

// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
    let n1 = n.toString()
    let revStr = [ ];   

    for (let i = n1.length; i >= 0; i--) {
        revStr += n1[i];
        console.log(i, '-->', n1[i], revStr)
    }

return revStr;

}

console.log(digitize([35231]));

// kaip panaikinti undefined ir sudeti kableli?