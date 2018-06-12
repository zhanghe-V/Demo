/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-11 20:23:17
 * @version $Id$
 */
window.onload = function(){
	imgLocation("container","box")

	var imgData = {"data":[{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"}/*,{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"17.jpg"},{"src":"18.jpg"},{"src":"19.jpg"}*/]}
	
	window.onscroll = function(){
		if (checkFlag()) {
			var cparent = document.getElementById("container");
			for (var i = 0; i < imgData.data.length; i++) {
				var ccontent = document.createElement("div");
				ccontent.className = "box";
				cparent.appendChild(ccontent);

				/*var boximg = document.createElement("div");
				boximg.className = "boximg";
				ccontent.appendChild("boximg");*/
				var boxImg = document.createComment("div");
				boxImg.className = "boximg";
				ccontent.appendChild("boximg");

				var img = document.createElement("img");
				img.src = "images/"+imgData.data[i].src;
				boxImg.appendChild(img);
			}
		}		
	}
}

function checkFlag(){
	var cparent = document.getElementById("container");
	var  ccontent = getChildElement(cparent,"box");
	var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	if (lastContentHeight<scrollTop+pageHeight) {
		return true;
	}
	console.log(lastContentHeight+","+scrollTop+","+pageHeight);
}

function imgLocation(parent,content){
	//将parent下所有的content全部取出
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	var imgwidth = ccontent[0].offsetWidth;
	var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
	cparent.style.cssText = "width:"+imgwidth*cols+"px;margin:0 auto";

	var boxHeightArr = [];
	for (var i = 0; i < ccontent.length; i++) {
		if (i<cols) {
			boxHeightArr[i] = ccontent[i].offsetHeight;			
		}
		else{
			var minheight = Math.min.apply(null,boxHeightArr);
			var minIndex = getminheightLocation(boxHeightArr,minheight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minheight+"px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
			boxHeightArr[minIndex] = boxHeightArr[minIndex]+ccontent[i].offsetHeight;
		}
		
	}
}

function getminheightLocation(boxHeightArr,minheight){
	for (var i in boxHeightArr) {
		if (boxHeightArr[i] == minheight) {
			return i;
		}
	}
}

function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for (var i = 0; i < allcontent.length; i++) {
		if (allcontent[i].className == content) {
			contentArr.push(allcontent[i]);
		}	
	}
	return contentArr;
}