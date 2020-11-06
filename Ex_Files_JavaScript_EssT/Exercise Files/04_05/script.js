var firstFraction = 12;
var secondFraction = 13;

var theBiggest = (function(a,b) {
  var result;
  a>b ? result = ["a", a] : result = ["b", b];
  return result;
})(firstFraction,secondFraction)

console.log(theBiggest);
