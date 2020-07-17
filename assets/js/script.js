/*
var slideShow = document.getElementById('slideshow');
var i;
i = 0;
setInterval(function(){
	if(i<4){
		slideshow.style.left = -751 * i + "px";
		i++;
	}else{
		i = 0;
	}
}, 5000 );
*/
function slider(){
	var slideShow = document.getElementById("slideshow");
	var i;
	i = 0;
	return function(){
		var slideShowWidth = document.getElementById("slideshow-area").offsetWidth;
		if( i < 4){
			slideShow.style.left = -(slideShowWidth) * i + "px";
			i++;
		}else{
			i = 0;
		}
	};
}
setInterval(slider(), 3000);