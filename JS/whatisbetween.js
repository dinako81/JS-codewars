console.clear()

function between(min, max) {
    let arr = [];    
    for (let i = min; i <= max; i++) {
    arr.push(i)
    }
    return arr
  }

  console.log(between(1, 4))