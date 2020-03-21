var img = ["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8"];
var id = ["div_1","div_2","div_3","div_4","div_5","div_6","div_7","div_8"];

var i=0;
var x=0;
var y=0;
var a=0;
var b=0;
//left arrow click span/view image preview/backward
function leftclick(n) {
	i--;
	x = i + 1;
	if (x == 0){
				i = 7;
				a = 7;
				b = 0;
				document.getElementById(img[a]).style.opacity = 1;
				document.getElementById(img[b]).style.opacity = 0;
				document.getElementById(id[a]).style.opacity = 1;
				document.getElementById(id[b]).style.opacity = 0;
	}
	if (n==0){
		document.getElementById(img[i]).style.opacity = 1;
		document.getElementById(img[x]).style.opacity = 0;
		document.getElementById(id[i]).style.opacity = 1;
		document.getElementById(id[x]).style.opacity = 0;
	}
}
setInterval(leftclick,100);
//right arrow click span/view image next
function rightclick(n){
	i++;
	x = i - 1;
	if (i == 8){
				i = 0;
				a = 0;
				b = 7;
				document.getElementById(img[a]).style.opacity = 1;
				document.getElementById(img[b]).style.opacity = 0;
				document.getElementById(id[a]).style.opacity = 1;
				document.getElementById(id[b]).style.opacity = 0;
			}	
	if (n==1){
			document.getElementById(img[i]).style.opacity = 1;
			document.getElementById(img[x]).style.opacity = 0;
			document.getElementById(id[i]).style.opacity = 1;
			document.getElementById(id[x]).style.opacity = 0;
	}
				
}
setInterval(rightclick,100);
//Images Auto Slide
function slides(){
	i++;
	if (i==1){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 1;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 1;
	}
	if(i==2){
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 1;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 1;
	}
	if(i==3){
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 1;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 1;
	}
	if(i==4){
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 1;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 1;
	}
	if(i==5){
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 1;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 1;
	}
	if(i==6){
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 1;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 1;
	}
	if(i==7){
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 1;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 1;
	}
	if(i==8){
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("img_1").style.opacity = 1;
		document.getElementById("div_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 1;
		i=0;
	}
}
setInterval(slides,3000);
//Button click for each images
function btn_click(value){
	if (value==1){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 1;
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 1;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 0;
	}
	if(value==2){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 1;
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 1;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 0;
	}
	if(value==3){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 1;
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 1;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 0;
	}
	if(value==4){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 1;
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 1;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 0;
	}
	if(value==5){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 1;
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 1;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 0;
	}
	if(value==6){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 1;
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 1;
		document.getElementById("div_8").style.opacity = 0;
	}
	if(value==7){
		document.getElementById("img_1").style.opacity = 0;
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 1;
		document.getElementById("div_1").style.opacity = 0;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 1;
	}
	if(value==0){
		document.getElementById("img_1").style.opacity = 1;
		document.getElementById("img_2").style.opacity = 0;
		document.getElementById("img_3").style.opacity = 0;
		document.getElementById("img_4").style.opacity = 0;
		document.getElementById("img_5").style.opacity = 0;
		document.getElementById("img_6").style.opacity = 0;
		document.getElementById("img_7").style.opacity = 0;
		document.getElementById("img_8").style.opacity = 0;
		document.getElementById("div_1").style.opacity = 1;
		document.getElementById("div_2").style.opacity = 0;
		document.getElementById("div_3").style.opacity = 0;
		document.getElementById("div_4").style.opacity = 0;
		document.getElementById("div_5").style.opacity = 0;
		document.getElementById("div_6").style.opacity = 0;
		document.getElementById("div_7").style.opacity = 0;
		document.getElementById("div_8").style.opacity = 0;
	}
	i = value;
}