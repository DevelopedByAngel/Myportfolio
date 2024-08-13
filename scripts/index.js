var angle = 0;
$(".pre").on("click", () => {
	angle = angle - 36;
	$(".spinner").css("transform", "rotateY(" + angle + "deg)");
});
$(".next").on("click", () => {
	angle = angle + 36;
	$(".spinner").css("transform", "rotateY(" + angle + "deg)");
});
$("#nav-mobile-icon .fa").on("click", () => {
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
		SecureToken:"00e11a06-332b-4f3c-8b44-e51a06c34a74",
		To: mail,
		From: "ang311806@gmail.com",
		Subject: subject,
		Body: body,
	}).then(function (message) {
		console.log(message);
		if (message == "OK")
			$("#contactform input, #contactform textarea").val("");
		else console.error("Error occurred. Not able to connect to service.")
		// else alert("Not able to send Message. Try again later");
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
		"Name: "+name + "<br>Mail: " + mail + "<br>Message: " + message + "<br>Contact: " + contact,
	);
	await mailTo(
		mail,
		"Thanks for getting in touch",
		"Hi " +
			name +
			",<br>Happy to connect with you.<br>Regards,<br>Angel F<br>angelfrancis1111@gmail.com",
	);
};
