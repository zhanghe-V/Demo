//通过js改变html的font-size值，适配不同机型
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
//html.style.fontSize =//获得当前浏览器宽度/7.5+px
//如果当前设备的宽度，如果过750px，dpr2 分辨率达到1500；就可以去访问pc端页面
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 750){ deviceWidth = 750;}
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

//750px    100px    =7.5rem

/*
750px             7.5    ==100px  1rem
375px             7.5    ==50px ?
414px             7.5    ==55.2px   ?
320px             7.5    ==42.66px  ?

7.5 rem -50 = 375px



640px             6.4     ==100px
375px             6.4    ==50px ?
414px             6.4    ==55.2px   ?
320px             6.4    ==50px  ?


7.5  100px   rem=750px浏览器的宽度
7.5  50px-font-size=iphone6 375px
7.5  42.66-font-size=iphone5  320px
7.5   55.2-font-size=iphone6p  414px
7.5   102 -font-size=ipad   768*/








