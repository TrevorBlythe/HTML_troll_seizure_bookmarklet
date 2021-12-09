var parent = document.body; // Element that holds the mover
var mover = document.createElement('img');
mover.src = "https://i.pinimg.com/originals/ce/57/77/ce5777bf7b7bd966ef14f4a0c7e4c845.gif";
mover.style.zIndex = 60000000000001;
parent.appendChild(mover);
var dir = 1; // The direction we are moving... 1 is right, -1 is left.
var dist = 10; // The distance we move each "tick"
mover.style.position = "absolute";
var layers = [];
for(let i = 0;i<25;i++){
let myLayer = document.createElement('div');
myLayer.id = 'bookingLayer';
myLayer.style.position = 'absolute';
myLayer.style.left = (i%5) * 20 + '%';
myLayer.style.top = Math.floor(i/5) * 20 + '%';
myLayer.style.width = '20%';
myLayer.style.height = '20%';
myLayer.style.padding = '0px';
myLayer.style.background = '#000000';
myLayer.innerHTML = '.<h1 style="color:white;position:absolute;font-size:300%;">HAVE A SEIZURE</h1>';
myLayer.color = "white";
myLayer.hidden = i % 2;
myLayer.style.zIndex = 60000000000000;
layers.push(myLayer);
document.body.appendChild(myLayer);
}

setInterval(function() {
  for(let i = 0;i<layers.length;i++){
  let myLayery = layers[i];
	if(myLayery.hidden) {
		myLayery.hidden = false;
	} else {
		myLayery.hidden = true;
	}
	myLayery.style.background = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
	
  }
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;

    // Add dir * dist
    posX += dir * dist;

    // If we are moving right and we've gone over the right edge...
    if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX -= posX + mover.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir *= -1
    // If we are moving left and we've gone over the left edge...
    } else if (dir == -1 && posX < 0) {
        // stop at zero...
        posX = 0;
        // and change direction...
        dir *= -1;
    }

    // Set the new position
    mover.style.left = posX + "px";
}, 10);

   
