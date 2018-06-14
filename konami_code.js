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
 var index = 0;
  document.addEventListener('keydown', function (e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length - 1) {
        window.alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }, true);
}
