
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();

// MY WAY ________________________________
// const keyCodes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//
// let keyCodesIndexPosition = 0
//
// function init(event) {
//   const key = parseInt(event.detail || event.which);
//
//     if (key === keyCodes[keyCodesIndexPosition]) {
//       keyCodesIndexPosition++;
//
//       if (keyCodesIndexPosition === keyCodes.length){
//         alert("Happy Easter!");
//
//         index = 0;
//       }
//     }else{
//       keyCodesIndexPosition = 0;
//     }
// }
//
//
// document.body.addEventListener('keydown', init())
//
// init();


//________________________________
//   if(code[i] === key){
//     //if keydown === code[0] move to code[1] iterate through .length of code
//     //if at any point not === exit out of the loop and call the function again
//   alert("Happy Easter!")
// }elsse{
//   alert("Nope")
//   //exit out of function and then call the function again
//   //aka call itself aka callback trigger listening
//   }
//   // Write your JavaScript code inside the init() function
//
// }

// e.detail, e.which, and e.location
// parseInt
//up, up, down , down, left, right, left, right, b, a
