
//淘宝-视口适配
/*alert(devicePixelRatio);*/
var scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

//动态设置html元素的font-size值
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

//这个deviceWidth因为改变了 initial-scale的值，所以会放大     1-0.5   375---750
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 1440){ deviceWidth = 1440;}
document.documentElement.style.fontSize = deviceWidth /10 + 'px';

