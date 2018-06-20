/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-19 19:26:59
 * @version $Id$
 */
 var imgs = [
 		'http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0e2442a7d933c8950db7aff3dd1373f083020068.jpg',
 		'https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1529417099374&amp;di=18425b2189eb5a4a8896e0f20c4677ba&amp;imgtype=0&amp;src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb21c8701a18b87d62fac9f980b0828381e30fd4e.jpg',
 		'https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1529417099374&amp;di=ba30ea519eacff65716fab00e30531e0&amp;imgtype=0&amp;src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F9213b07eca806538c066018c9bdda144ac3482a5.jpg',
 		'https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1529417099373&amp;di=3bc4cd039c7b9e1e27ea87672edbe3dc&amp;imgtype=0&amp;src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F8694a4c27d1ed21b8b195967a16eddc450da3f5b.jpg'

 ];
 var index = 0,
 	 len = imgs.length;

 $(".btn").on('click',function(){
 	if ('prev' === $(this).data('control')) {
 		//上一张
 		index = Math.max(0,--index);
 		alert(sss);
 	}
 	else{//下一张
 		index = Math.min(len - 1, ++index);
 		alert(vvv);
 	}
 	document.title = (index + 1) + "/" + len;

 	$('#img').attr('src', imgs[index]);
 });

