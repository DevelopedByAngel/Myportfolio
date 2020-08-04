$('#menu').mouseout(function()
	{
		$('#underline').css('left','227px');
		$('#underline').css('width','80px');
	});
const small=$('.container')[0];
const bootstrap=$('#bootstrap')[0];
const big=$(".bigscreen")[0];
$(document).ready(function()
	{
	if(document.documentElement.scrollHeight == document.documentElement.clientHeight)
	{
$('#arrow').css("opacity","100%");
	}
	else
		$('#arrow').css("opacity","0%");

if($(window).width()<1000 || $(window).height()<400)
			{
				$('.bigscreen').remove();
				$(".res").css("transform","scale(2)");
			}
		else
		{
			$('.container').remove();
			$(".res").css("transform","scale(1)");
		}
	});
$(window).resize(function()
	{
		if($(window).width()<1000 || $(window).height()<400)
			{
				$(".bigscreen").before(small);
				$('.bigscreen').remove();
				$(".res").css("transform","scale(2)");
			}
		else
		{
			$(".container").before(big);
			$('.container').remove();
			$(".res").css("transform","scale(1)");
		}
	});
$(document).on("touchstart",function(event)
	{
		swipes=event.originalEvent.touches[0].pageX;
	});
$(document).on("touchend",function(event)
	{
		swipee=event.originalEvent.changedTouches[0].pageX;
				console.log(swipes-swipee)
		if(swipes-swipee<-200)
			$("#about")[0].click();
	});
