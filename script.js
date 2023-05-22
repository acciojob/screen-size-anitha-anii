//your JS code here. If required.
let h1 = document.createElement('h1');
h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

let div = document.getElementById('sizeInfo');
div.appendChild(h1);

window.onresize = function() {
  h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
};
