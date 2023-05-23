let i = 0; 	
let images = [];	
let time = 2000;	
	 
images[0] = src="assets/images/prambanan.jpg";
images[1] = src="assets/images/kalasan.jpg";

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	setTimeout("changeImg()", time);
}

window.onload=changeImg;
