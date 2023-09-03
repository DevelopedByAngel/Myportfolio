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
const mailO=()=>{
      Email.send({
        Host: "smtp.gmail.com",
        // Username: "angelfrancis@portfolio.com",
        // Password: "99408AC8D120E93DA236F0152D4565424D68",
        SecureToken:"994268e4-5260-4d15-abe5-004c6ceb37c1",
        To: 'angelfrancis1111@gmail.com',
        From: "angelfrancis1111@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
}
const submit=async(name,mail,contact,message)=>
{
	mailO();
	// fetch("https://morning-thicket-08641.herokuapp.com/php.php", {
 //      method: "POST",
 //      headers: { "Content-Type": "application/json" },
 //      body: JSON.stringify({
 //        name:name,
 //        email:mail,
 //        mobile:contact,
 //        message:message
 //      }),
 //    })
 //      .then((res) => res.json())
 //      .then((r)=>console.log(r));
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open(
		"POST",
		"https://morning-thicket-08641.herokuapp.com/php.php",
		true
	); //getting the last status
	var reply="From: "+name+"("+mail+")\nContact.No:"+contact+"\n\n "+message;
	var subject="Angel Francis | Portfolio";
	var body="<div><div style='background: #ddfff9; border: 7px double white; border-radius: 1rem; padding: 10px;'><span><h1 style='color:#05ab8e;'>Hi "+name+"!!</h1></span><span><h3 style='color: #066f5d;'>Happy to connect with you.</h3></span><br><br><br><h4><span>From,</span><div style='padding:1rem 2rem;line-height:1.5rem;'>Angel F ,<br>Final Year Under Graduate,<br>Panimalar Engineering College.</div></h4></div></div>"
	await xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	await xmlHttp.send("name="+name+"&email="+mail+"&mobile="+contact+"&message="+message+"&body="+body+"&reply="+reply+"&subject="+subject+"&sendmail=true");
	xmlHttp.onload=()=>{
			equip = xmlHttp.responseText;
	console.log(equip);
	console.log(xmlHttp.status);
if(xmlHttp.status == 200)
		{
			$("#contactform input, #contactform textarea").val("");
		}
	else
		{
			alert("Not able to send Message. Try again later");
		}
	};
	
}

