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
var angle = 0;
$(".pre").on("click", () => {
	angle = angle - 36;
	$(".spinner").css("transform", "rotateY(" + angle + "deg)");
});
$(".next").on("click", () => {
	angle = angle + 36;
	$(".spinner").css("transform", "rotateY(" + angle + "deg)");
});
$(".menu .fa").on("click", () => {
	$("#nav").css("width", "15rem");
});
$("#nav .close").on("click", () => {
	$("#nav").css("width", "0rem");
});
$("#nav>span a").on("click", () => {
	console.log($(window).width())
	if ($(window).width()<768){
		$("#nav").css("width", "0rem");
	}
});

const submit=(name,mail,contact,message)=>
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open(
		"POST",
		"https://morning-thicket-08641.herokuapp.com/php.php",
		false
	); //getting the last status
	xmlHttp.send();
	equip = xmlHttp.responseText;
	console.log(equip);
}