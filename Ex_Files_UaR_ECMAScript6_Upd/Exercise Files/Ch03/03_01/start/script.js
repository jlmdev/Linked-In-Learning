// 

for(let index = 0;index < 45; index++) {
  var div = document.createElement('div');
  div.onclick = function() {
    alert(`You clicked on a box # ${index}`);
  };
  document.getElementsByTagName('section')[0].appendChild(div)
}