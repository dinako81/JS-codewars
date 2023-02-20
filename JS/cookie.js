


function cookie(x) {
    if (typeof x === 'string') {
      return 'Who ate the last cookie? It was Zach!';
    } else if (typeof x === 'number') {
      return 'Who ate the last cookie? It was Monica!';
    } else {
      return 'Who ate the last cookie? It was the dog!';
    }
  }

// more optimal

function cookie(x){
    return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
  }




