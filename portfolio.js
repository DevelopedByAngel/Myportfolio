function image(event)	// when mouse move on selector
{
	console.log("t");
	$('#my').css("background-image","radial-gradient(transparent,transparent,rgba(255,255,255,0.2))");
	x=event.pageX/20;
	y=event.pageY/20;
	x=(x/28);
	y=(y/28);
	if(x>0.5)
		x=-1*(x-0.5);
	else
		x=0.5-x;
	if(y>0.5)
		y=-1*(y-0.5);
	else
		y=0.5-y;
	$('#my').css('transform','rotate3d('+x+','+y+',0,20deg');//rotate al three axis
}
$('#my').mouseout(function()
	{
		$('#my').css("background-image","");

	});
$('#home').mousemove(function()
	{
		$('#underline').css('left','18px');
		$('#underline').css('width','80px');
	});
$('#about').mousemove(function()
{
	$('#underline').css('left','120px');
	$('#underline').css('width','80px');
});
$('#works').mousemove(function()
{
	$('#underline').css('left','222px');
	$('#underline').css('width','85px');
});
$('#contact,table').mousemove(function()
{
	$('#underline').css('left','330px');
	$('#underline').css('width','0px');
	$('table').css('visibility','visible');
});
$('#contact,table').mouseout(function()
{
		$('table').css('visibility','hidden');
});
$('#menu').mouseout(function()
	{
		$('#underline').css('left','18px');
		$('#underline').css('width','80px');
	});
$(".con").mousemove(function()
	{
		const contactname=$(this).attr("id");
		$('#'+contactname+' > td >img').attr('src',contactname+'c.png');
	});
$('.con').mouseout(function()
{
	const contactname=$(this).attr("id");
	$('#'+contactname+' > td >img').attr('src',contactname+'.png');
});
$('#paper1').click(function()
{
		$('#paper1').css('transition','0.6s');
				$('#paper2').css('transition','0.6s');
	$('#paper1').css('z-index','4');
	$('#paper2').css('z-index','4');
	$('#paper1').css('border-bottom','1000px solid rgba(0,0,0,0)');
	$('#paper1').css('border-left','2000px solid rgba(220,220,220,1)');
	$('#paper2').css('border-bottom','1000px solid white');
	$('#paper2').css('border-left','2000px solid rgba(220,220,220,1)');
	setTimeout(function(){
		window.location.href = "https://developedbyangel.github.io/Myportfolio/resume.pdf";
		$('<a href="https://developedbyangel.github.io/Myportfolio/resume.pdf" download></a>')[0].click();    
	},250);
});
function paperin()
{
	// alert("an");
	$('#paper1').css('border-bottom','80px solid rgba(0,0,0,0)');
	$('#paper1').css('border-left','80px solid rgba(135,3,61,1)');
	$('#paper2').css('border-bottom','80px solid white');
	$('#paper2').css('border-left','80px solid rgba(135,3,61,1)');

};
function paperout()
{
	// alert("an");
	$('#paper1').css('border-bottom','50px solid rgba(255,255,255,0)');
	$('#paper1').css('border-left','50px solid rgba(83,1,36,1)');
	$('#paper2').css('border-bottom','50px solid rgba(255,255,255,1)');
	$('#paper2').css('border-left','50px solid rgba(83,1,36,1)');

};
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
   		$('#arrow').css("opacity","100%");
   }
   else{
	$('#arrow').css("opacity","0%");}
});
const inPicEnd=$('#m').width()+$('#m').position().left;
$('#m').on('click',function()
	{
		$('#m').css("animation-name","unset");
	});
$('#m').on("touchstart touchmove",function(event)
{
		$('#m').css("animation-name","unset");
	$('#m').css("background-image","radial-gradient(transparent,transparent,rgba(255,255,255,0.2))");
	x=event.originalEvent.touches[0].pageX/30;
	// original event to access the event thae was actually triggered and touches is  fingers  used[0] is one finger
	y=event.originalEvent.touches[0].pageY/30;
	x=(x/28);
    y=(y/28);
	if(x>0.5)
		x=-1*(x-0.5);
	else
		x=0.5-x;
	if(y>1.0)
		y=-1*(y-1);
	else
		y=0.5-y;

$('#m').css('transform','rotate3d('+x+','+y+',0,30deg');
});
$('#m').on("touchend",function()
	{
		$('#m').css("background-image","");
	});
var swipes=0;
var swipee=0;
$(document).on("touchstart",function(event)
	{
		swipes=event.originalEvent.touches[0].pageX;
		
	});
$(document).on("touchend",function(event)
	{
		swipee=event.originalEvent.changedTouches[0].pageX;
		if(swipes-swipee>200 && swipes>inPicEnd)
			$("#about")[0].click();
	});
$(document).ready()
{
	if(document.documentElement.scrollHeight == document.documentElement.clientHeight)
	{
$('#arrow').css("opacity","100%");
	}
}