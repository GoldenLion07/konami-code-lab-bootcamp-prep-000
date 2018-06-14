const codes = [
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  66,
  65
];

let index = 0;

function onKeyDownHandler(e) {
  const key = e.key
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
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which)

    if (key === code[index]) {
      index++
   
      if (index === code.length - 1) {
        index = 0
        alert("YOU DID IT!")
      }
    } else {
      index = 0
    }
  })
}

