function imageEnter(event) {
	// when mouse move on selector
	$("#section1 #pic-img").css(
		"background-image",
		"radial-gradient(transparent,transparent,rgba(255,255,255,0.2))"
	);
	x = event.pageX / 20;
	y = event.pageY / 20;
	x = x / 28;
	y = y / 28;
	if (x < 0.5) x = -1 * (x - 0.5);
	else x = 0.5 - x;
	if (y < 0.5) y = -1 * (y - 0.5);
	else y = 0.5 - y;
	$("#section1 #pic-img").css(
		"transform",
		"rotateX(" + 60 * x + "deg) rotateY(" + 60 * y + "deg) scale(1.12)"
	);
}
function imageLeave(event) {
	$("#section1 #pic-img").css("background-image", "");
	$("#section1 #pic-img").css(
		"transform",
		"rotateX(0deg) rotateY(0deg) scale(1)"
	);
}
$('.pre').on('click',()=>{
	// var matrix=$('.carousel').css('transform');
	// const values = matrix.split('(')[1].split(')')[0].split(',');
	// console.log(values)
 //    const a = values[0];
 //    const b = values[1];
 //    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
 //    console.log(angle)
	$('.carousel').css('transform','rotateY('+50+'deg)');
	// console.log($('.carousel').css('transform'))
	var carousel=document.getElementsByClassName('carousel')[0];
	var st = window.getComputedStyle(carousel, null);
	var tr = st.getPropertyValue("transform")
	var values = tr.split('(')[1];
      values = values.split(')')[0];
      values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a*a + b*b);

    // arc sin, convert from radians to degrees, round
    /** /
    var sin = b/scale;
    var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    /*/
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
	console.log(st.getPropertyValue("transform") ,angle);
})