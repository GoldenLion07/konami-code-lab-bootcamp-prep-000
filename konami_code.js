const codes = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];

let index = 0;

function onKeyDownHandler(e) {
  const key = e.key;
 
  if (key === alphabet[index]) {
    index++;
 
    if (index === alphabet.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}

function init() {
  // your code here
 var body = document.body;
  body.addEventListener('keydown', function(e){
    var key = parseInt(e.detail || e.which);

    // check if key is equal to current value of index in code array
    // then loop through the array if conditions match

    if (key === codes[index]) {
      // if yes, increment index by 1
      index++;

      // if still in the loop, check if index is equal to code array length
      if (index === codes.length - 1) {
        // reset the index counter
        index = 0;
        // if yes, you passed, congrats!
        alert("Congrats!");
      }



  // if key doesn't match current index in code array, then reset the index to zero
  } else {
    index = 0;
  }


  });

}

init();