/**
 * 
 * @authors zhanghe-V (807597850@qq.com)
 * @date    2018-06-11 20:23:17
 * @version $1$
 */
window.onload = function(){
	imgLocation("container","box")

	var imgData = {"data":[
							{"src":"11.jpg"},
							{"src":"12.jpg"},
							{"src":"13.jpg"},
							{"src":"14.jpg"},
							{"src":"15.jpg"},
							{"src":"16.jpg"},
							{"src":"17.jpg"},
							{"src":"18.jpg"},
							{"src":"19.jpg"},
							{"src":"20.jpg"},
							{"src":"21.jpg"},
							{"src":"22.jpg"},]}

	
	window.onscroll = function(){
		if (checkFlag()) {
			var cparent = document.getElementById("container");
			for (var i = 0; i < imgData.data.length; i++) {
				var ccontent = document.createElement("div");
				ccontent.className="box";
				cparent.appendChild(ccontent);
				var boximg = document.createElement("div");
				boximg.className="boximg";
				ccontent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = "images/"+imgData.data[i].src;
				boximg.appendChild(img);
			}
			imgLocation("container","box");
		}		
	}
}

function checkFlag(){
	var cparent = document.getElementById("container");
	var  ccontent = getChildElement(cparent,"box");
	var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight||document.body.clientHeight;
	if (lastContentHeight<(scrollTop+pageHeight)) {
		return true;
	}
	console.log(lastContentHeight+","+scrollTop+","+pageHeight);
}

function imgLocation(parent,content){
	//将parent下所有的content全部取出
	var cparent = document.getElementById(parent);
	var ccontent = getChildElement(cparent,content);
	var imgwidth = ccontent[0].offsetWidth;
	//获得每一行显示图片的个数
	var cols = Math.floor(document.documentElement.clientWidth / imgwidth);
	//设置父容器container的宽度，并设置样式居中
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

//将parent下的所有类名为content的div存储在自定义的数组contentArr中
function getChildElement(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	 //获取所有内容，返回的是一个dom对象可以遍历，有length属性，但不是数组。
	for (var i = 0; i < allcontent.length; i++) {
		if (allcontent[i].className == content) {
			contentArr.push(allcontent[i]);//向数组contentArr末尾进行追加content
		}	
	}
	return contentArr;
}
