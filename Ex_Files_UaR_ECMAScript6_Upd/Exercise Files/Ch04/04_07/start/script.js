// function* director() {
//   yield "Three";
//   yield "Two";
//   yield "One";
//   yield "Action";
// }

// var action = director();

// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);

function* eachItem(arr) {
  for(var index=0; index < arr.length; index++) {
    yield arr[index];
  }
}

var letters = eachItem(["a", "b", "c", "d", "e", "f", "g"]);

var abcs = setInterval(function(){
  var letter = letters.next();
  if(letter.done) {
    clearInterval(abcs);
    console.log("Now I know my ABC's")
  } else {
    console.log(letter.value);
  }
},

500);