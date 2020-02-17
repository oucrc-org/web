function Rotate(){
	var i=0;
	var image = new Image();
	image.src = "./magiccircuit.png";
	document.body.appendChild(image);
	while(true){
		i+=0.1;
		image.rotate(i);
		document.body.appendChild(image);
		if(i>360){
			i-=360;
		}
	}
}
function Test(){
	var hiduke=document.lastModified;
	document.write(hiduke);
}