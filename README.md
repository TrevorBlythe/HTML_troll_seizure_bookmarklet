# HTML_troll_seizure_bookmarklet
Js code that makes any website turn into a seizure giving nightmare.


copy paste this in a bookmark:

javascript:var layers=[];for(let t=0;t<25;t++){let e=document.createElement("div");e.id="bookingLayer",e.style.position="absolute",e.style.left=t%5*20+"%",e.style.top=20*Math.floor(t/5)+"%",e.style.width="20%",e.style.height="20%",e.style.padding="0px",e.style.background="#000000",e.innerHTML='.<h1 style="color:white;position:absolute;font-size:300%;">HAVE A SEIZURE</h1>',e.color="white",e.hidden=t%2,e.style.zIndex=6e13,layers.push(e),document.body.appendChild(e)}setInterval(function(){for(let t=0;t<layers.length;t++){let e=layers[t];e.hidden?e.hidden=!1:e.hidden=!0,e.style.background="rgb("+255*Math.random()+","+255*Math.random()+","+255*Math.random()+")"}},10);



OR just run the code on a website on the file.
