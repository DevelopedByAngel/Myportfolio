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
window.onload=async()=>{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open(
		"POST",
		"https://morning-thicket-08641.herokuapp.com/php.php",
		true
	); //getting the last status
	var subject="Visited Portfolio";
	var body="Someone visited your page 👏👏"
	await xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	await xmlHttp.send("name=null&email=angelfrancis1111@gmail.com&mobile=000&message="+body+"&body="+body+"&reply="+body+"&subject="+subject+"&sendmail=true");
	xmlHttp.onload=()=>{
			equip = xmlHttp.responseText;
if(xmlHttp.status == 200)
		{
			console.log("loaded");
		}
}
}
$("#contactform").on("submit",(e)=>
	{
		e.preventDefault();
		var name=e.target.name.value;
		var mail=e.target.email.value;
		var message=e.target.message.value;
		var contact=e.target.mobile.value;
		console.log(contact,name,mail,message);
		submit(name,mail,contact,message);
	});
console.log(Email)
const mailTo= async(mail,subject,body,callback)=>{
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ang311806@gmail.com",
        Password: "76CA546695B9792DDC89D31EF1DB1132E26D",
        // SecureToken:"994268e4-5260-4d15-abe5-004c6ceb37c1",
        To: mail,
        From: "ang311806@gmail.com",
        Subject: subject,
        Body: body,
      })
        .then(function (message) {
        	callback(message);
        });
}

const submit=async(name,mail,contact,message)=>
{
	await mailTo("angelfrancis1111@gmail.com","Angel Francis | Portfolio",name+"<br>"+mail+"<br>"+message+"<br>"+contact,(msg)=>)
	Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ang311806@gmail.com",
        Password: "76CA546695B9792DDC89D31EF1DB1132E26D",
        To: mail,
        From: "ang311806@gmail.com",
        Subject: "Thanks for getting in touch",
        Body: "Hi "+name+",<br>Happy to connect with you.<br>Regards,<br>Angel F<br>angelfrancis1111@gmail.com",
      })
        .then(function (message) {
        	console.log(message);
        });
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ang311806@gmail.com",
        Password: "76CA546695B9792DDC89D31EF1DB1132E26D",
        To: "angelfrancis1111@gmail.com",
        From: "ang311806@gmail.com",
        Subject: "",
        Body: ,
      })
        .then(function (message) {
        	console.log(message);
        	if(message==="OK")
        		$("#contactform input, #contactform textarea").val("");	
        	else
        		alert("Not able to send Message. Try again later");
        });


	}

