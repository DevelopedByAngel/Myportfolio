function imageEnter(event) {
	// when mouse move on selector
	$("#section1 #pic-img").css(
		"background-image",
		"radial-gradient(transparent,transparent,rgba(255,255,255,0.2))",
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
		"rotateX(" + 60 * x + "deg) rotateY(" + 60 * y + "deg) scale(1.12)",
	);
}
function imageLeave(event) {
	$("#section1 #pic-img").css("background-image", "");
	$("#section1 #pic-img").css(
		"transform",
		"rotateX(0deg) rotateY(0deg) scale(1)",
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
	console.log($(window).width());
	if ($(window).width() < 768) {
		$("#nav").css("width", "0rem");
	}
});
const mailTo = async (mail, subject, body) => {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "ang311806@gmail.com",
		Password: "76CA546695B9792DDC89D31EF1DB1132E26D",
		// SecureToken:"994268e4-5260-4d15-abe5-004c6ceb37c1",
		To: mail,
		From: "ang311806@gmail.com",
		Subject: subject,
		Body: body,
	}).then(function (message) {
		console.log(message);
		if (message == "OK")
			$("#contactform input, #contactform textarea").val("");
		else alert("Not able to send Message. Try again later");
	});
};

window.onload = async () => {
	mailTo(
		"angelfrancis1806@gmail.com",
		"Visited Portfolio",
		"Someone visited your page 👏👏",
	);
};
$("#contactform").on("submit", (e) => {
	e.preventDefault();
	var name = e.target.name.value;
	var mail = e.target.email.value;
	var message = e.target.message.value;
	var contact = e.target.mobile.value;
	submitContactInfo(name, mail, contact, message);
});

const submitContactInfo = async (name, mail, contact, message) => {
	await mailTo(
		"angelfrancis1111@gmail.com",
		"Angel Francis | Portfolio",
		"Name: "+name + "<br>Ma" + mail + "<br>" + message + "<br>" + contact,
	);
	await mailTo(
		mail,
		"Thanks for getting in touch",
		"Hi " +
			name +
			",<br>Happy to connect with you.<br>Regards,<br>Angel F<br>angelfrancis1111@gmail.com",
	);
};
